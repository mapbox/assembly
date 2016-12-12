'use strict';

const fs = require('fs');
const path = require('path');
const pify = require('pify');
const Concat = require('concat-with-sourcemaps');
const postcss = require('postcss');
const reporter = require('postcss-reporter');
const autoprefixer = require('autoprefixer');
const initPostcssCustomProperties = require('postcss-custom-properties');
const postcssCustomMedia = require('postcss-custom-media');
const variableDefinitions = require('../src/variables');
const customMediaQueries = require('../src/media-queries');

const distCssFilename = 'assembly.css';
const distCssPath = path.join(__dirname, `../dist/${distCssFilename}`);

function getCssPath(name) {
  return path.join(__dirname, `../src/${name}.css`);
}

const cssFiles = [
  getCssPath('reset'),
  getCssPath('fonts'),
  getCssPath('typography'),
  getCssPath('basic'),
  getCssPath('forms'),
  getCssPath('buttons'),
  getCssPath('theming'),
  getCssPath('icons'),
  getCssPath('layout'),
  getCssPath('colors'),
  getCssPath('animations')
];

const customProperties = initPostcssCustomProperties();
customProperties.setVariables(variableDefinitions);

const postcssPlugins = [
  customProperties,
  postcssCustomMedia({
    extensions: customMediaQueries
  }),
  autoprefixer({
    browsers: 'last 2 versions, ie > 11'
  }),
  reporter()
];

function processCssFile(cssFile, concat) {
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

function writeDistCss(concat) {
  const css = `${concat.content}\n/*# sourceMappingURL=${distCssFilename}.map */`;
  return Promise.all([
    pify(fs.writeFile)(distCssPath, css, 'utf8'),
    pify(fs.writeFile)(`${distCssPath}.map`, concat.sourceMap, 'utf8')
  ]);
}

function processCss() {
  const concat = new Concat(true, distCssPath, '\n');

  Promise.all(cssFiles.map((file) => processCssFile(file, concat)))
    .then(() => writeDistCss(concat))
    .catch((err) => console.log(err.stack));
}

module.exports = processCss;
