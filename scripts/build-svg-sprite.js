'use strict';

const svgstore = require('svgstore');
const fs = require('fs');
const _ = require('lodash');
const path = require('path');
const queue = require('d3-queue').queue;
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

function addFileToSprite(filename, sprite, callback) {
  const extname = path.extname(filename);
  if (extname !== '.svg') return callback();

  const basename = path.basename(filename, extname);
  const handleError = (err) => {
    console.log(`Error with icon "${basename}"`);
    callback(err);
  };

  fs.readFile(filename, 'utf8', (err, content) => {
    if (err) return callback(err);
    try {
      svgo.optimize(content, (optimizedContent) => {
        try {
          sprite.add(`icon-${basename}`, optimizedContent.data);
          callback();
        } catch (e) {
          handleError(e);
        }
      });
    } catch (e) {
      handleError(e);
    }
  });
}

function buildSvgSprite() {
  timelog('Building SVGs');
  const sprite = svgstore();

  fs.readdir(svgDir, (err, filenames) => {
    if (err) throw err;

    const q = queue();
    filenames.forEach((filename) => {
      q.defer(addFileToSprite, path.join(svgDir, filename), sprite);
    });

    q.awaitAll((err) => {
      if (err) throw err;

      sprite.element('svg')
        .attr('id', 'svg-symbols')
        .attr('style', 'display:none');

      const cleanedSprite = sprite.toString().replace(/\n/g, '');
      const jsContent = baseJsTemplate({ svgSprite: cleanedSprite });
      ensureDist().then(() => {
        fs.writeFileSync(svgScript, jsContent);
        timelog('Done building SVGs');
      });
    });
  });
}

module.exports = buildSvgSprite;

if (require.main === module) {
  buildSvgSprite();
}
