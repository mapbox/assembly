'use strict';

const fs = require('fs');
const pify = require('pify');
const path = require('path');
const xml2js = require('xml2js');
const parseString = xml2js.parseString;
const SVGO = require('svgo');
const collectPaths = require('./svg-utils').collectPaths;
const collectPathsFromGroup = require('./svg-utils').collectPathsFromGroup;

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
    (function() {
      var svgData = '${JSON.stringify(options.icons)}';
      function getSymbols(icon) {
        return ('<symbol id="' + icon[0] + '" viewBox="0 0 18 18">' + icon[1].map(function(p) {
          return '<path d="' + p + '" />';
        }).join('') + '</symbol>');
      }

      var doc = '<?xml version="1.0" encoding="UTF-8"?><svg id="svg-symbols" style="display:none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
        JSON.parse(svgData).map(function(svg) {
          return getSymbols(svg);
        }).join('') + '</svg>';

      var svgDocument = (new DOMParser()).parseFromString(doc, 'text/xml');
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

function addFileToIcons(filename, icons) {
  return new Promise((resolve, reject) => {
    const extname = path.extname(filename);
    if (extname !== '.svg') return resolve();

    const basename = path.basename(filename, extname);

    const handleError = (err) => {
      console.log(`Error with icon "${basename}"`);
      reject(err);
    };

    pify(fs.readFile)(filename, 'utf8')
      .then((content) => {
        try {
          svgo.optimize(content, (optimizedContent) => {
            pify(parseString)(optimizedContent.data)
              .then((svgObject) => {

                const pathData = [];

                if (svgObject.svg.g) {
                  collectPathsFromGroup(svgObject.svg.g, pathData);
                }

                if (svgObject.svg.path) {
                  collectPaths(svgObject.svg.path, pathData);
                }

                icons.push([`icon-${basename}`, pathData]);
                resolve();
              }, handleError);
          });
        } catch (e) {
          handleError(e);
        }
      });

  });
}

function buildSvgLoader() {
  let icons = [];
  return pify(fs.readdir)(svgDir)
    .then((filenames) => {
      return Promise.all(filenames.map((filename) => {
        return addFileToIcons(path.join(svgDir, filename), icons);
      }));
    })
    .then(() => {
      icons = icons.sort((a, b) => {
        if (a[0] > b[0]) return -1;
        if (a[0] < b[0]) return 1;
        return 0;
      });
      return baseJsTemplate({ icons: icons });
    });
}

module.exports = buildSvgLoader;
