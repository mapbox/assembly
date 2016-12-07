'use strict';

const fs = require('fs');
const path = require('path');
const pify = require('pify');
const Concat = require('concat-with-sourcemaps');
const postcss = require('postcss');
const reporter = require('postcss-reporter');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const cssDist = path.join(__dirname, '../dist/base-core.css');

function cssPath(name) {
  return path.join(__dirname, `../src/${name}.css`);
}

const cssFiles = [
  cssPath('reset'),
  cssPath('display'),
  cssPath('theming'),
  cssPath('positioning'),
  cssPath('layout')
];

const postcssPlugins = [
  autoprefixer({
    browsers: 'last 2 versions, ie > 11'
  }),
  cssnano(),
  reporter()
];


function concatenateCss() {
  const concat = new Concat(true, cssDist, '\n');
  const promises = cssFiles.map((cssFile) => {
    return pify(fs.readFile)(cssFile, 'utf8').then((css) => {
      concat.add(cssFile, css);
    });
  });
  return Promise.all(promises).then(() => concat);
}

function processConcatenatedCss(concat) {
  return postcss(postcssPlugins).process(concat.content, {
    from: cssDist,
    to: cssDist,
    map: {
      inline: false,
      prev: concat.sourceMap
    }
  });
}

function writeCssDist(result) {
  return Promise.all([
    pify(fs.writeFile)(cssDist, result.css, 'utf8'),
    pify(fs.writeFile)(`${cssDist}.map`, result.map, 'utf8')
  ]);
}

concatenateCss()
  .then(processConcatenatedCss)
  .then(writeCssDist)
  .catch((err) => {
    console.log(err.stack);
  });
