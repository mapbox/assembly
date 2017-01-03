'use strict';

const svgstore = require('svgstore');
const fs = require('fs');
const pify = require('pify');
const path = require('path');
const SVGO = require('svgo');

const svgDir = path.join(__dirname, '../src/svgs');
const svgo = new SVGO({
  plugins: [
    {
      removeAttrs: {
        attrs: 'path:(fill|color|style|width|height|overflow)'
      }
    }
  ]
});

const baseJsTemplate = (options) => {
  return `
    (function () {
      var svgDocument = (new DOMParser()).parseFromString('${options.svgSprite}', 'text/xml');
      var appendSvg = function () {
        document.body.appendChild(svgDocument.getElementById('svg-symbols'));
      }
      if (document.readyState !== 'loading') {
        appendSvg();
      } else {
        document.addEventListener('DOMContentLoaded', appendSvg);
      }
    }());
  `;
};

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

function buildSvgLoader() {
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
      return jsContent;
    });
}

module.exports = buildSvgLoader;
