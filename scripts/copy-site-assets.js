'use strict';

const path = require('path');
const globby = require('globby');
const mkdirp = require('mkdirp');
const pify = require('pify');
const cpFile = require('cp-file');
const copyFonts = require('./copy-fonts');
const timelog = require('./timelog');

const distDir = path.join(__dirname, '../dist');
const siteAssetsGlob = path.join(__dirname, '../site/+(css|js)/*.*');

function copyFile(infile, outdir) {
  const outfile = path.join(outdir, path.basename(infile));
  return cpFile(infile, outfile);
}

function copyAssets() {
  return globby([siteAssetsGlob]).then((assetFiles) => {
    return Promise.all(assetFiles.map((file) => {
      return copyFile(file, distDir);
    }));
  });
}

function copySiteAssets() {
  timelog('Copying assets');
  return pify(mkdirp)(distDir).then(() => {
    return Promise.all([
      copyFonts(),
      copyAssets()
    ]).then(() => timelog('Done copying assets'));
  });
}

module.exports = copySiteAssets;

if (require.main === module) {
  copySiteAssets().catch((err) => console.error(err.stack));
}
