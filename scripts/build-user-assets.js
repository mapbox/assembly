'use strict';

const path = require('path');
const buildCss = require('./build-css');
const buildJs = require('./build-js');
const copyFonts = require('./copy-fonts');

function buildUserAssets(outdir, options) {
  options = options || {};
  outdir = outdir || path.join(__dirname, '../dist');

  const buildCssOptions = Object.assign(
    {
      outfile: path.join(outdir, 'assembly.css')
    },
    options
  );

  const buildJsOptions = {
    outfile: path.join(outdir, 'assembly.js'),
    icons: options.icons || false,
    quiet: options.quiet || false
  };

  const copyFontsOptions = {
    outdir,
    quiet: options.quiet || false
  };

  return Promise.all([
    buildCss(buildCssOptions),
    buildJs(buildJsOptions),
    copyFonts(copyFontsOptions)
  ]);
}

module.exports = buildUserAssets;

if (require.main === module) {
  buildUserAssets().catch(err => console.error(err.stack));
}
