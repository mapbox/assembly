'use strict';

const path = require('path');
const pify = require('pify');
const mkdirp = require('mkdirp');

function ensureDist() {
  return pify(mkdirp)(path.join(__dirname, '../dist'));
}

module.exports = ensureDist;
