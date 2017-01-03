'use strict';

const fs = require('fs');
const path = require('path');
const pify = require('pify');
const mkdirp = require('mkdirp');
const PQueue = require('p-queue');
const Concat = require('concat-with-sourcemaps');
const postcss = require('postcss');
const cssnano = require('cssnano');
const reporter = require('postcss-reporter');
const autoprefixer = require('autoprefixer');
const initPostcssCustomProperties = require('postcss-custom-properties');
const postcssCustomMedia = require('postcss-custom-media');
const defaultVariables = require('../src/variables');
const defaultMediaQueries = require('../src/media-queries');
const timelog = require('./timelog');
const buildColorVariants = require('./build-color-variants');

function getCssPath(name) {
  return path.join(__dirname, `../src/${name}.css`);
}

function handlePostcssError(error) {
  if ( error.name === 'CssSyntaxError' ) {
    process.stderr.write(error.message + error.showSourceCode());
  } else {
    throw error;
  }
}

const assemblyCssFiles = [
  getCssPath('reset'),
  getCssPath('focus'),
  getCssPath('fonts'),
  getCssPath('typography'),
  getCssPath('tables'),
  getCssPath('buttons'),
  getCssPath('links'),
  getCssPath('forms'),
  getCssPath('theming'),
  getCssPath('icons'),
  getCssPath('layout'),
  getCssPath('colors'),
  getCssPath('triangles'),
  getCssPath('animations'),
  getCssPath('miscellaneous')
];

/**
 * Build CSS.
 *
 * @param {Object} options
 * @param {string} [options.outfile] - Path to which built CSS should be written.
 * @param {Array<string>} [options.files] - Paths to stylesheets that should be
 *   processed and appended.
 * @param {Object} [options.variables] - Variables to override the defaults.
 * @param {Object} [options.mediaQueries] - Media queries to override the defaults.
 * @param {Object} [options.colorVariants] - Color variant config to override.
 * @param {Object} [options.quiet] - Suppress logs.
 * @return {Promise<void>}
 */
function buildCss(options) {
  options = options || {};

  if (!options.quiet) timelog('Building CSS');

  const outfile = options.outfile || path.join(__dirname, '../dist/assembly.css');
  const outfileFilename = path.basename(outfile);

  const cssFiles = (options.files === undefined)
    ? assemblyCssFiles
    : assemblyCssFiles.concat(options.files);

  const concat = new Concat(true, outfile, '\n');

  const variableDefinitions = (options.variables)
    ? Object.assign({}, defaultVariables, options.variables)
    : defaultVariables;

  const mediaQueryDefinitions = (options.mediaQueries)
    ? Object.assign({}, defaultMediaQueries, options.mediaQueries)
    : defaultMediaQueries;

  const customProperties = initPostcssCustomProperties();
  customProperties.setVariables(variableDefinitions);

  const postcssPlugins = [
    customProperties,
    postcssCustomMedia({
      extensions: mediaQueryDefinitions
    }),
    autoprefixer({
      browsers: 'last 2 versions, not ie < 11'
    }),
    reporter()
  ];

  function processCss(css, filePath, concat) {
    return postcss(postcssPlugins)
      .process(css, {
        from: filePath,
        to: filePath,
        map: {
          inline: false,
          annotation: false,
          sourcesContent: true
        }
      })
      .then((postcssResult) => {
        concat.add(filePath, postcssResult.css, postcssResult.map.toString());
      })
      .catch(handlePostcssError);
  }

  function processFile(cssFile, concat) {
    return pify(fs.readFile)(cssFile, 'utf8').then((css) => {
      return processCss(css, cssFile, concat);
    });
  }

  function appendColorVariants(concat) {
    const colorVariantsCss = buildColorVariants(variableDefinitions, options.colorVariants);
    return processCss(colorVariantsCss, 'color-variants.css', concat);
  }

  function writeDistCss(concat) {
    const css = `${concat.content}\n/*# sourceMappingURL=${outfileFilename}.map */`;

    function writeMinifiedCss() {
      return cssnano.process(css).then((minifiedCss) => {
        pify(fs.writeFile)(outfile.replace('.css', '.min.css'), minifiedCss, 'utf8');
      });
    }

    return pify(mkdirp)(path.dirname(outfile)).then(() => {
      return Promise.all([
        pify(fs.writeFile)(outfile, css, 'utf8'),
        pify(fs.writeFile)(`${outfile}.map`, concat.sourceMap, 'utf8'),
        writeMinifiedCss()
      ]);
    });
  }

  // Read these one at a time to ensure deterministic
  // stylesheet ordering based on the array above
  const queue = new PQueue({ concurrency: 1 });
  const processCssFiles = cssFiles.map((file) => {
    return queue.add(() => processFile(file, concat));
  });

  return Promise.all(processCssFiles)
    .catch(handlePostcssError)
    .then(() => appendColorVariants(concat))
    .then(() => writeDistCss(concat))
    .then(() => {
      if (!options.quiet) timelog('Done building CSS');
    });
}

module.exports = buildCss;

if (require.main === module) {
  buildCss().catch((err) => console.error(err.stack));
}
