'use strict';

const fs = require('fs');
const path = require('path');
const pify = require('pify');
const postcss = require('postcss');
const reporter = require('postcss-reporter');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const cssSrc = path.join(__dirname, '../src/base-core.css');
const cssDist = path.join(__dirname, '../dist/base-core.css');

const postcssPlugins = [
  autoprefixer({
    browsers: 'last 2 versions, ie > 11'
  }),
  cssnano(),
  reporter()
];

function readCssSrc() {
  return pify(fs.readFile)(cssSrc, 'utf8');
}

function processCss(css) {
  return postcss(postcssPlugins).process(css, {
    from: cssSrc,
    to: cssDist,
    map: { inline: false }
  });
}

function writeCssDist(result) {
  return Promise.all([
    pify(fs.writeFile)(cssDist, result.css, 'utf8'),
    pify(fs.writeFile)(`${cssDist}.map`, result.map, 'utf8')
  ]);
}

readCssSrc()
  .then(processCss)
  .then(writeCssDist)
  .catch((err) => {
    console.log(err.stack);
  });
