// Runs on babel-node only, because render-site uses React components
'use strict';

const renderSite = require('./render-site');
const buildCss = require('./build-css');
const copyAssets = require('./copy-assets');

function buildSite() {
  return buildCss()
    .then(() => Promise.all([renderSite(), copyAssets()]));
}

module.exports = buildSite;

if (require.main === module) {
  buildSite().catch((err) => console.error(err.stack));
}
