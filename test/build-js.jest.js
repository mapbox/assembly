'use strict';

const path = require('path');
const fs = require('fs');
const os = require('os');
const crypto = require('crypto');
const buildJs = require('../src/build-js');

function getTmp() {
  return path.join(os.tmpdir(), crypto.randomBytes(16).toString('hex'));
}

function cleanup(tmp) {
  return fs.promises.rm(tmp, { force: true });
}

describe('buildJs', () => {
  test('works', () => {
    const tmp = `${getTmp()}/test.js`;
    return buildJs({
      outfile: tmp,
      quiet: true,
      unminified: true
    })
      .then(() => fs.promises.readFile(tmp, 'utf8'))
      .then(js => {
        expect(js).toMatchSnapshot();
      })
      .then(() => cleanup(tmp));
  });

  test('with valid svg option', () => {
    const tmp = `${getTmp()}/test.js`;
    return buildJs({
      outfile: tmp,
      icons: ['airplane', 'alert']
    })
      .then(() => fs.promises.readFile(tmp, 'utf8'))
      .then(js => {
        expect(js).toMatchSnapshot();
      })
      .then(() => cleanup(tmp));
  });

  test('fails with invalid icon option', () => {
    const tmp = `${getTmp()}/test.js`;
    return expect(
      buildJs({
        outfile: tmp,
        icons: ['airplane', 'pizza']
      })
    ).rejects.toEqual(Error('an icon matching pizza does not exist'));
  });
});
