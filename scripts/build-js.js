'use strict';

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const pify = require('pify');
const globby = require('globby');
const UglifyJS = require('uglify-js');
const optimizeJs = require('optimize-js');
const timelog = require('./timelog');
const buildSvgLoader = require('./build-svg-loader');

const jsGlob = path.join(__dirname, '../src/js/*.js');

/**
 * Build JS.
 *
 * @param {Object} [options]
 * @param {string} [options.outfile] - Path to which built JS should be written.
 * @param {Object} [options.quiet] - Suppress logs.
 * @return {Promise<void>}
 */
function buildJs(options) {
  options = options || {};

  if (!options.quiet) timelog('Building JS');
  const outfile = options.outfile || path.join(__dirname, '../dist/assembly.js');

  return Promise.all([
    buildSvgLoader(),
    concatJs()
  ])
    .then((data) => {
      const allJs = data.join('');
      if (options.unminified) return allJs;
      const minifiedJs = UglifyJS.minify(allJs, { fromString: true }).code;
      return optimizeJs(minifiedJs);
    })
    .then((optimizedJs) => {
      return pify(mkdirp)(path.dirname(outfile)).then(() => {
        return pify(fs.writeFile)(outfile, optimizedJs);
      });
    }).then(() => {
      if (!options.quiet) timelog('Done building JS');
    });
}

function concatJs() {
  let result = '';
  return globby(jsGlob).then((jsFiles) => {
    return Promise.all(jsFiles.map((jsFile) => {
      return pify(fs.readFile)(jsFile, 'utf8').then((jsFileContent) => {
        result += jsFileContent;
      });
    }));
  }).then(() => result);
}

module.exports = buildJs;

if (require.main === module) {
  buildJs().catch((err) => console.error(err.stack));
}
