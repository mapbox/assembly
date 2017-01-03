'use strict';

const path = require('path');
const buildCss = require('./build-css');
const buildJs = require('./build-js');
const copyFonts = require('./copy-fonts');

function buildUserAssets(outdir, options) {
  outdir = outdir || path.join(__dirname, '../dist');

  const buildCssOptions = Object.assign({
    outfile: path.join(outdir, 'assembly.css')
  }, options);

  const jsOutfile = path.join(outdir, 'assembly.js');

  return Promise.all([
    buildCss(buildCssOptions),
    buildJs(jsOutfile),
    copyFonts(outdir)
  ]);
}

module.exports = buildUserAssets;

if (require.main === module) {
  buildUserAssets().catch((err) => console.error(err.stack));
}
