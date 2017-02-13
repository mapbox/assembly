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

function buildJs(outfile, options) {
  options = options || {};

  if (!options.quiet) timelog('Building JS');
  outfile = outfile || path.join(__dirname, '../dist/assembly.js');

  return Promise.all([
    buildSvgLoader(),
    concatJs()
  ])
    .then((data) => {
      const allJs = data.join('');
      return UglifyJS.minify(allJs, { fromString: true }).code;
    })
    .then((minifiedJs) => {
      return optimizeJs(minifiedJs);
    })
    .then((optimizedJs) => {
      return pify(mkdirp)(path.join(__dirname, '../dist')).then(() => {
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
