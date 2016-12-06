'use strict';

const svgstore = require('svgstore');
const fs = require('fs');
const _ = require('lodash');
const path = require('path');
const queue = require('d3-queue').queue;
const SVGO = require('svgo');

const svgDir = path.join(__dirname, '../src/svgs');
const svgScript = path.join(__dirname, '../dist/base-svgs.js');
const svgo = new SVGO();
const sprite = svgstore({
  cleanDefs: [
    'fill',
    'width',
    'height'
  ]
});

const baseJsTemplate = _.template(
`var svgDocument = (new DOMParser()).parseFromString('<%= svgSprite %>', 'text/xml');
document.addEventListener("DOMContentLoaded", function() {
  document.body.appendChild(svgDocument.getElementById("svg-symbols"));
});`
);

function addFileToSprite(filename, callback) {
  const basename = path.basename(filename, path.extname(filename));
  fs.readFile(filename, 'utf8', (err, content) => {
    if (err) throw err;
    svgo.optimize(content, (optimizedContent) => {
      sprite.add(`base-svg-${basename}`, optimizedContent);
      callback();
    });
  });
}

fs.readdir(svgDir, (err, filenames) => {
  if (err) throw err;

  const q = queue();
  filenames.forEach((filename) => {
    q.defer(addFileToSprite, path.join(svgDir, filename));
  });

  q.awaitAll((err) => {
    if (err) throw err;

    sprite.element('svg')
      .attr('id', 'svg-symbols')
      .attr('style', 'display:none');

    const cleanedSprite = sprite.toString().replace(/\n/g, '');
    const jsContent = baseJsTemplate({ svgSprite: cleanedSprite });
    fs.writeFileSync(svgScript, jsContent);
  });
});
