'use strict';

// renderSite uses JSX, ES2015
require('babel-register');
const renderSite = require('./render-site');
const buildCss = require('./build-css');
const buildJs = require('./build-js');
const copySiteAssets = require('./copy-site-assets');

function buildSite() {
  return Promise.all([
    buildCss().then(renderSite()),
    buildJs(),
    copySiteAssets()
  ]);
}

module.exports = buildSite;

if (require.main === module) {
  buildSite().catch((err) => console.error(err.stack));
}
