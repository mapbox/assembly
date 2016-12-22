'use strict';

const svgstore = require('svgstore');
const fs = require('fs');
const _ = require('lodash');
const pify = require('pify');
const path = require('path');
const SVGO = require('svgo');
const timelog = require('./timelog');
const ensureDist = require('./ensure-dist');

const svgDir = path.join(__dirname, '../src/svgs');
const svgScript = path.join(__dirname, '../dist/assembly-svg.js');
const svgo = new SVGO({
  plugins: [
    {
      removeAttrs: {
        attrs: 'path:(fill|color|style|width|height|overflow)'
      }
    }
  ]
});

const baseJsTemplate = _.template(
`(function() { var svgDocument = (new DOMParser()).parseFromString('<%= svgSprite %>', 'text/xml');
document.addEventListener("DOMContentLoaded", function() {
  document.body.appendChild(svgDocument.getElementById("svg-symbols"));
});}());`
);

function addFileToSprite(filename, sprite) {
  return new Promise((resolve, reject) => {
    const extname = path.extname(filename);
    if (extname !== '.svg') return resolve();

    const basename = path.basename(filename, extname);
    const handleError = (err) => {
      console.log(`Error with icon "${basename}"`);
      reject(err);
    };

    fs.readFile(filename, 'utf8', (readError, content) => {
      if (readError) return handleError(readError);
      try {
        svgo.optimize(content, (optimizedContent) => {
          try {
            sprite.add(`icon-${basename}`, optimizedContent.data);
            resolve();
          } catch (e) {
            handleError(e);
          }
        });
      } catch (e) {
        handleError(e);
      }
    });
  });
}

function buildSvgSprite() {
  timelog('Building SVGs');
  const sprite = svgstore();

  return pify(fs.readdir)(svgDir)
    .then((filenames) => {
      return Promise.all(filenames.map((filename) => {
        return addFileToSprite(path.join(svgDir, filename), sprite);
      }));
    })
    .then(() => {
      sprite.element('svg')
        .attr('id', 'svg-symbols')
        .attr('style', 'display:none');

      const cleanedSprite = sprite.toString().replace(/\n/g, '');
      const jsContent = baseJsTemplate({ svgSprite: cleanedSprite });
      return ensureDist().then(() => {
        return pify(fs.writeFile)(svgScript, jsContent);
      });
    })
    .then(() => {
      timelog('Done building SVGs');
    });
}

module.exports = buildSvgSprite;

if (require.main === module) {
  buildSvgSprite();
}
