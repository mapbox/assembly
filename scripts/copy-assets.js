'use strict';

const path = require('path');
const globby = require('globby');
const cpFile = require('cp-file');
const timelog = require('./timelog');

const fontsGlob = path.join(__dirname, '../fonts/*.*');
const distGlob = path.join(__dirname, '../dist/*.*');
const siteAssetsGlob = path.join(__dirname, '../site/css/*.*');

function copyFile(infile, outdir) {
  const outfile = path.join(outdir, path.basename(infile));
  return cpFile(infile, outfile);
}

function copyFonts() {
  return globby(fontsGlob).then((fontFiles) => {
    return Promise.all(fontFiles.map((file) => {
      return copyFile(file, path.join(__dirname, '../dist'));
    }));
  });
}

function copySiteAssets() {
  return globby([distGlob, siteAssetsGlob]).then((assetFiles) => {
    return Promise.all(assetFiles.map((file) => {
      return copyFile(file, path.join(__dirname, '../dist/assets'));
    }));
  });
}

function copyAssets() {
  timelog('Copying assets');
  return copyFonts().then(() => copySiteAssets())
    .then(() => timelog('Done copying assets'));
}

module.exports = copyAssets;

if (require.main === module) {
  copyAssets().catch((err) => console.error(err.stack));
}
