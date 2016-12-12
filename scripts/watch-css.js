#!/usr/bin/env node
'use strict';

const path = require('path');
const chokidar = require('chokidar');
const processCss = require('./process-css');
const timelog = require('./timelog');

const cssGlob = path.join(__dirname, '../src/*.css');

timelog('Watching for changes to CSS');

function rebuild() {
  processCss().catch((err) => console.log(err.stack));
}

function watchCss() {
  chokidar.watch(cssGlob, {
    ignoreInitial: true
  }).on('all', rebuild);
}

module.exports = watchCss;

if (require.main === module) {
  watchCss();
}
