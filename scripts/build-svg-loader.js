'use strict';

const fs = require('fs');
const pify = require('pify');
const path = require('path');
const svgDir = path.join(__dirname, '../src/svgs');
const xml2js = require('xml2js');
const parseString = xml2js.parseString;
const SVGO = require('svgo');

const svgo = new SVGO();

const baseJsTemplate = (options) => {
  return `
    (function() {
      var svgData = '${JSON.stringify(options.icons)}';
      function getSymbols(icon) {
        return ('<symbol id=' + icon[0] + 'viewBox="0 0 18 18">' + icon[1].map(function(p) {
          return '<path d="' + p + '"/>';
        }).join('') + '</symbol>');
      }

      var doc = '<?xml version="1.0" encoding="UTF-8"?><svg id="svg-symbols" style="display:none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
        JSON.parse(svgData).map(function(svg) {
          return getSymbols(svg);
        }).join('') + '</svg>';

      var svgDocument = (new DOMParser()).parseFromString(doc.toString(), 'text/xml');
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
  return new Promise((resolve) => {
    const extname = path.extname(filename);
    if (extname !== '.svg') return resolve();

    const basename = path.basename(filename, extname);

    pify(fs.readFile)(filename, 'utf8')
      .then((content) => {
        pify(svgo.optimize)(content)
          .then((optimizedContent) => {
            pify(parseString)(optimizedContent)
              .then((svgObject) => {

                const pathData = [];

                function collectPaths(path) {
                  path.forEach((p) => {
                    if (p.$ && p.$.d) {
                      pathData.push(p.$.d);
                    }
                  });
                }

                function traverseGroups(group) {
                  group.forEach((g) => {

                    if (g.path) {
                      collectPaths(g.path);
                    }

                    if (g.g) {
                      traverseGroups(g.g);
                    }

                  });
                }
                if (svgObject.svg.g) traverseGroups(svgObject.svg.g);
                if (svgObject.svg.path) collectPaths(svgObject.svg.path);

                icons.push([`icon-${basename}`, pathData]);
                resolve();
              });
          });
      });

  });
}

function buildSvgLoader() {
  const icons = [];
  return pify(fs.readdir)(svgDir)
    .then((filenames) => {
      return Promise.all(filenames.map((filename) => {
        return addFileToIcons(path.join(svgDir, filename), icons);
      }));
    })
    .then(() => {
      return baseJsTemplate({ icons: icons });
    });
}

module.exports = buildSvgLoader;
