'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const crypto = require('crypto');
const { execFile } = require('child_process');
const { promisify } = require('util');
const postcss = require('postcss');
const csso = require('csso');
const reporter = require('postcss-reporter');
const autoprefixer = require('autoprefixer');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssCustomMedia = require('postcss-custom-media');
const defaultVariables = require('./variables');
const defaultMediaQueries = require('./media-queries');
const timelog = require('./timelog');

const execFileAsync = promisify(execFile);

const DEFAULT_BROWSERS = [
  'last 4 Chrome versions',
  'last 4 Firefox versions',
  'last 4 Safari versions',
  'last 2 Edge versions',
  'last 2 iOS versions',
  'last 2 Android versions',
  'not IE 11',
  'not dead'
];

function handlePostcssError(error) {
  if (error.name === 'CssSyntaxError') {
    process.stderr.write(error.message + error.showSourceCode());
    return;
  }
  throw error;
}

async function processWithPostcss(plugins, css, processOpts) {
  try {
    return await postcss(plugins).process(css, processOpts);
  } catch (error) {
    handlePostcssError(error);
    throw error;
  }
}

async function generateUnoCss(presetOptions) {
  const optionsFile = path.join(
    os.tmpdir(),
    `assembly-uno-${crypto.randomBytes(8).toString('hex')}.json`
  );
  await fs.promises.writeFile(optionsFile, JSON.stringify(presetOptions));
  try {
    const { stdout } = await execFileAsync(
      process.execPath,
      [path.join(__dirname, 'generate-uno.mjs'), optionsFile],
      { maxBuffer: 20 * 1024 * 1024 }
    );
    return stdout;
  } finally {
    await fs.promises.rm(optionsFile, { force: true });
  }
}

/**
 * Build CSS with the Assembly UnoCSS preset.
 *
 * @param {Object} [options]
 * @param {string} [options.outfile] - Path to which built CSS should be written.
 * @param {Array<string>} [options.files] - Paths to stylesheets that should be
 *   processed and appended.
 * @param {Object} [options.variables] - Variables to override the defaults.
 * @param {Object} [options.mediaQueries] - Media queries to override the defaults.
 * @param {Object} [options.colorVariants] - Color variant config to override.
 * @param {Array<string>} [options.browsersList] - A Browserslist
 *   value for Autoprefixer.
 * @param {Object} [options.quiet] - Suppress logs.
 * @return {Promise<void>}
 */
async function buildCss(options) {
  const opts = Object.assign(
    {
      browsersList: DEFAULT_BROWSERS
    },
    options
  );

  if (!opts.quiet) timelog('Building CSS');

  const outfile = opts.outfile || path.join(__dirname, '../dist/assembly.css');

  const variableDefinitions = opts.variables
    ? Object.assign({}, defaultVariables, opts.variables)
    : defaultVariables;

  const mediaQueryDefinitions = opts.mediaQueries
    ? Object.assign({}, defaultMediaQueries, opts.mediaQueries)
    : defaultMediaQueries;

  const generatedCss = await generateUnoCss({
    variables: opts.variables,
    colorVariants: opts.colorVariants,
    files: opts.files
  });

  const postcssPlugins = [
    postcssCustomProperties({
      preserve: false,
      warnings: true,
      importFrom: {
        customProperties: variableDefinitions
      }
    }),
    postcssCustomMedia({
      importFrom: { customMedia: mediaQueryDefinitions }
    }),
    autoprefixer({
      overrideBrowserslist: opts.browsersList
    }),
    reporter()
  ];

  const postcssResult = await processWithPostcss(postcssPlugins, generatedCss, {
    from: outfile,
    to: outfile,
    map: {
      inline: false,
      annotation: true,
      sourcesContent: true
    }
  });

  const css = postcssResult.css;
  const minifiedCss = csso.minify(css).css;

  await fs.promises.mkdir(path.dirname(outfile), { recursive: true });

  await Promise.all([
    fs.promises.writeFile(outfile, css, 'utf8'),
    fs.promises.writeFile(
      `${outfile}.map`,
      postcssResult.map.toString(),
      'utf8'
    ),
    fs.promises.writeFile(
      outfile.replace('.css', '.min.css'),
      minifiedCss,
      'utf8'
    )
  ]);

  if (!opts.quiet) timelog('Done building CSS');
}

module.exports = buildCss;

async function main() {
  try {
    await buildCss();
  } catch (error) {
    process.stderr.write(`${error.stack}\n`);
    process.exitCode = 1;
  }
}

if (require.main === module) {
  main();
}
