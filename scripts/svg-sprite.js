'use strict';

const svgstore = require('svgstore');
const fs = require('fs');
const path = require('path');
const queue = require('d3-queue').queue;
const SVGO = require('svgo');

const svgDir = path.join(__dirname, '../svgs');
const svgo = new SVGO();
const sprite = svgstore({
  cleanDefs: [
    'fill',
    'width',
    'height'
  ]
});

function addFileToSprite(filename, callback) {
  const basename = path.basename(filename, path.extname(filename));
  fs.readFile(filename, 'utf8', (err, content) => {
    if (err) throw err;
    svgo.optimize(content, (optimizedContent) => {
      sprite.add(`icon-${basename}`, content);
      callback();
    });
  });
}

fs.readdir(svgDir, (err, filenames) => {
  if (err) throw err;

  const q = queue();
  const addFiles = filenames.map((filename) => {
    q.defer(addFileToSprite, path.join(svgDir, filename));
  });

  q.awaitAll((err) => {
    if (err) throw err;
    fs.writeFileSync(path.join(__dirname, '../dist/svgs.svg'), sprite);
  });
});
