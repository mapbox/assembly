'use strict';

const path = require('path');
const mkdirp = require('mkdirp');
const pify = require('pify');
const copyFonts = require('./copy-fonts');
const timelog = require('./timelog');

const distDir = path.join(__dirname, '../dist');

function copySiteAssets() {
  timelog('Copying assets');
  return pify(mkdirp)(distDir).then(() => {
    return copyFonts().then(() => timelog('Done copying assets'));
  });
}

module.exports = copySiteAssets;

if (require.main === module) {
  copySiteAssets().catch(err => console.error(err.stack));
}
