'use strict';

const path = require('path');
const mkdirp = require('mkdirp');
const pify = require('pify');
const globby = require('globby');
const cpFile = require('cp-file');
const timelog = require('./timelog');

const distDir = path.join(__dirname, '../dist');
const fontsGlob = path.join(__dirname, '../fonts/*.*');
const siteAssetsGlob = path.join(__dirname, '../site/css/*.*');

function copyFile(infile, outdir) {
  const outfile = path.join(outdir, path.basename(infile));
  return cpFile(infile, outfile);
}

function copyFonts() {
  return globby(fontsGlob).then((fontFiles) => {
    return Promise.all(fontFiles.map((file) => {
      return copyFile(file, distDir);
    }));
  });
}

function copySiteAssets() {
  return globby([siteAssetsGlob]).then((assetFiles) => {
    return Promise.all(assetFiles.map((file) => {
      return copyFile(file, distDir);
    }));
  });
}

function copyAssets() {
  timelog('Copying assets');
  return pify(mkdirp)(distDir).then(() => {
    return Promise.all([
      copyFonts(),
      copySiteAssets()
    ]).then(() => timelog('Done copying assets'));
  });
}

module.exports = copyAssets;

if (require.main === module) {
  copyAssets().catch((err) => console.error(err.stack));
}
