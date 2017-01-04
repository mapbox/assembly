'use strict';

// renderSite uses JSX, ES2015
require('babel-register');
const renderSite = require('./render-site');
const buildCss = require('./build-css');

function fastBuildSite() {
  return buildCss().then(renderSite);
}

module.exports = fastBuildSite;

if (require.main === module) {
  fastBuildSite().catch((err) => console.error(err.stack));
}
