'use strict';

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const pify = require('pify');
const UglifyJS = require('uglify-js');
const optimizeJs = require('optimize-js');
const timelog = require('./timelog');
const buildSvgLoader = require('./build-svg-loader');

const jsSrcDir = path.join(__dirname, '../src/js');

// If you create a new script for assembly.js you must add it here
const jsFiles = [
  path.join(jsSrcDir, 'focus-control.js'),
  path.join(jsSrcDir, 'icon-functions.js')
];

/**
 * Build JS.
 *
 * @param {Object} [options]
 * @param {string} [options.outfile] - Path to which built JS should be written.
 * @param {Object} [options.quiet] - Suppress logs.
 * @param {Array<string>} [options.icons] - Array of icon names to include in the
 *   loader. icon names correspond to SVG file names excluding the `.svg` suffix.
 * @return {Promise<void>}
 */
function buildJs(options) {
  options = options || {};

  if (!options.quiet) timelog('Building JS');
  const outfile =
    options.outfile || path.join(__dirname, '../dist/assembly.js');

  return Promise.all([buildSvgLoader(options.icons || []), concatJs()])
    .then(data => {
      const allJs = data.join('');
      if (options.unminified) return allJs;
      const uglifyResult = UglifyJS.minify(allJs);
      if (uglifyResult.error) {
        throw uglifyResult.error;
      }
      return optimizeJs(uglifyResult.code);
    })
    .then(optimizedJs => {
      return pify(mkdirp)(path.dirname(outfile)).then(() => {
        return pify(fs.writeFile)(outfile, optimizedJs);
      });
    })
    .then(() => {
      if (!options.quiet) timelog('Done building JS');
    });
}

function concatJs() {
  const result = [];
  // Deterministic order needed for tests
  return Promise.all(
    jsFiles.map((jsFile, index) => {
      return pify(fs.readFile)(jsFile, 'utf8').then(jsFileContent => {
        result[index] = jsFileContent;
      });
    })
  ).then(() => result.join(''));
}

module.exports = buildJs;

if (require.main === module) {
  buildJs().catch(err => console.error(err.stack));
}
