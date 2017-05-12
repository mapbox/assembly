'use strict';

const path = require('path');
const del = require('del');
const pify = require('pify');
const fs = require('fs');
const os = require('os');
const crypto = require('crypto');
const buildJs = require('../scripts/build-js');

function getTmp() {
  return path.join(os.tmpdir(), crypto.randomBytes(16).toString('hex'));
}

function cleanup(tmp) {
  return del(tmp, { force: true });
}

describe('buildJs', () => {
  test('works', () => {
    const tmp = `${getTmp()}/test.js`;
    return buildJs({
      outfile: tmp,
      quiet: true,
      unminified: true
    })
      .then(() => pify(fs.readFile)(tmp, 'utf8'))
      .then((js) => {
        expect(js).toMatchSnapshot();
      })
      .then(() => cleanup(tmp));
  });
});
