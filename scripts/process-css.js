'use strict';

const fs = require('fs');
const path = require('path');
const pify = require('pify');
const mkdirp = require('mkdirp');
const Concat = require('concat-with-sourcemaps');
const postcss = require('postcss');
const reporter = require('postcss-reporter');
const autoprefixer = require('autoprefixer');
const initPostcssCustomProperties = require('postcss-custom-properties');
const postcssCustomMedia = require('postcss-custom-media');
const variableDefinitions = require('../src/variables');
const customMediaQueries = require('../src/media-queries');
const timelog = require('./timelog');
const buildColorVariants = require('./build-color-variants');

const distCssFilename = 'assembly.css';
const distCssPath = path.join(__dirname, `../dist/${distCssFilename}`);

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

const cssFiles = [
  getCssPath('reset'),
  getCssPath('fonts'),
  getCssPath('typography'),
  getCssPath('tables'),
  getCssPath('buttons'),
  getCssPath('forms'),
  getCssPath('theming'),
  getCssPath('icons'),
  getCssPath('layout'),
  getCssPath('colors'),
  getCssPath('triangles'),
  getCssPath('animations'),
  getCssPath('miscellaneous')
];

const customProperties = initPostcssCustomProperties();
customProperties.setVariables(variableDefinitions);

const postcssPlugins = [
  customProperties,
  postcssCustomMedia({
    extensions: customMediaQueries
  }),
  autoprefixer({
    browsers: 'last 2 versions, not ie < 11'
  }),
  reporter()
];

function postcssify(css, filePath, concat) {
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

function postcssifyFile(cssFile, concat) {
  return pify(fs.readFile)(cssFile, 'utf8').then((css) => {
    return postcssify(css, cssFile, concat);
  });
}

function appendColorVariants(concat) {
  const colorVariantsCss = buildColorVariants();
  return postcssify(colorVariantsCss, 'color-variants.css', concat);
}

function writeDistCss(concat) {
  const css = `${concat.content}\n/*# sourceMappingURL=${distCssFilename}.map */`;
  return pify(mkdirp)(path.join(__dirname, '../dist')).then(() => {
    return Promise.all([
      pify(fs.writeFile)(distCssPath, css, 'utf8'),
      pify(fs.writeFile)(`${distCssPath}.map`, concat.sourceMap, 'utf8')
    ]);
  });
}

function processCss() {
  timelog('Building CSS');
  const concat = new Concat(true, distCssPath, '\n');

  return Promise.all(cssFiles.map((file) => postcssifyFile(file, concat)))
    .catch(handlePostcssError)
    .then(() => appendColorVariants(concat))
    .then(() => writeDistCss(concat))
    .then(() => timelog('Done building CSS'));
}

module.exports = processCss;

if (require.main === module) {
  processCss().catch((err) => console.error(err.stack));
}
