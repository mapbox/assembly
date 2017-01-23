'use strict';

const path = require('path');
const globby = require('globby');
const fs = require('fs');
const mkdirp = require('mkdirp');
const browserify = require('browserify');
const pify = require('pify');
const cpFile = require('cp-file');
const copyFonts = require('./copy-fonts');
const timelog = require('./timelog');

const distDir = path.join(__dirname, '../dist');
const siteAssetsGlob = path.join(__dirname, '../site/+(css|img)/*.*');

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

function buildSiteJs() {
  return new Promise((resolve, reject) => {
    timelog('Building JS');
    const writer = fs.createWriteStream(path.join(distDir, 'site.js'));
    writer.on('error', reject);
    writer.on('finish', () => {
      timelog('Done building JS');
      resolve();
    });

    const b = browserify();
    b.transform('babelify');
    b.transform({
      global: true
    }, 'uglifyify');
    b.add(path.join(__dirname, '../site/js/index.js'));
    b.bundle()
      .on('error', reject)
      .pipe(writer);
  });
}

function copySiteAssets() {
  timelog('Copying assets');
  return pify(mkdirp)(distDir).then(() => {
    return Promise.all([
      copyFonts(),
      copyAssets(),
      buildSiteJs()
    ]).then(() => timelog('Done copying assets'));
  });
}

module.exports = copySiteAssets;

if (require.main === module) {
  copySiteAssets().catch((err) => console.error(err.stack));
}
