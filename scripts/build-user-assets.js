'use strict';

const path = require('path');
const buildCss = require('./build-css');
const buildSvgSprite = require('./build-svg-sprite');
const copyFonts = require('./copy-fonts');

function buildUserAssets(outdir, options) {
  outdir = outdir || path.join(__dirname, '../dist');

  const buildCssOptions = Object.assign({
    outfile: path.join(outdir, 'assembly.css')
  }, options);

  const svgOutfile = path.join(outdir, 'assembly-svg.js');

  return Promise.all([
    buildCss(buildCssOptions),
    buildSvgSprite(svgOutfile),
    copyFonts(outdir)
  ]);
}

module.exports = buildUserAssets;

if (require.main === module) {
  buildUserAssets().catch((err) => console.error(err.stack));
}
