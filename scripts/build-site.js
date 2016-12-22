'use strict';

// renderSite uses JSX, ES2015
require('babel-register');
const renderSite = require('./render-site');
const buildCss = require('./build-css');
const copySiteAssets = require('./copy-site-assets');

function buildSite() {
  return buildCss()
    .then(() => Promise.all([renderSite(), copySiteAssets()]));
}

module.exports = buildSite;

if (require.main === module) {
  buildSite().catch((err) => console.error(err.stack));
}
