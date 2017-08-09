'use strict';

const path = require('path');
const globby = require('globby');
const pify = require('pify');
const cpFile = require('cp-file');
const mkdirp = require('mkdirp');
const timelog = require('./timelog');

const fontsGlob = path.join(__dirname, '../fonts/*.*');

function copyFile(infile, outdir) {
  const outfile = path.join(outdir, path.basename(infile));
  return cpFile(infile, outfile);
}

function copyFonts(options) {
  options = options || {};

  if (!options.quiet) timelog('Copying fonts');
  const outdir = options.outdir || path.join(__dirname, '../dist');

  return pify(mkdirp)(outdir)
    .then(() => globby(fontsGlob))
    .then(fontFiles => {
      return Promise.all(
        fontFiles.map(file => {
          return copyFile(file, outdir);
        })
      );
    })
    .then(() => {
      if (!options.quiet) timelog('Done copying fonts');
    });
}

module.exports = copyFonts;

if (require.main === module) {
  copyFonts().catch(err => console.error(err.stack));
}
