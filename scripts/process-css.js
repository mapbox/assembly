'use strict';

const fs = require('fs');
const path = require('path');
const pify = require('pify');
const Concat = require('concat-with-sourcemaps');
const postcss = require('postcss');
const reporter = require('postcss-reporter');
const autoprefixer = require('autoprefixer');
// const cssnano = require('cssnano');

const distCssFilename = 'base-core.css';
const distCssPath = path.join(__dirname, `../dist/${distCssFilename}`);

function getCssPath(name) {
  return path.join(__dirname, `../src/${name}.css`);
}

const cssFiles = [
  getCssPath('colors'),
  getCssPath('sizing'),
  getCssPath('reset'),
  getCssPath('fonts'),
  getCssPath('typography'),
  getCssPath('basic'),
  getCssPath('display'),
  getCssPath('positioning'),
  getCssPath('layout'),
  getCssPath('theming'),
  getCssPath('icons')
];

const postcssPlugins = [
  autoprefixer({
    browsers: 'last 2 versions, ie > 11'
  }),
  // cssnano(),
  reporter()
];

const concat = new Concat(true, distCssPath, '\n');

function processCss() {
  return Promise.all(cssFiles.map(processCssFile));
}

function processCssFile(cssFile) {
  return pify(fs.readFile)(cssFile, 'utf8').then((css) => {
    return postcss(postcssPlugins)
      .process(css, {
        from: cssFile,
        to: cssFile,
        map: {
          inline: false,
          annotation: false,
          sourcesContent: true
        }
      })
      .then((postcssResult) => {
        concat.add(cssFile, postcssResult.css, postcssResult.map.toString());
      });
  });
}

function writeDistCss() {
  const css = `${concat.content}\n/*# sourceMappingURL=${distCssFilename}.map */`;
  return Promise.all([
    pify(fs.writeFile)(distCssPath, css, 'utf8'),
    pify(fs.writeFile)(`${distCssPath}.map`, concat.sourceMap, 'utf8')
  ]);
}

processCss()
  .then(writeDistCss)
  .catch((err) => {
    console.log(err.stack);
  });
