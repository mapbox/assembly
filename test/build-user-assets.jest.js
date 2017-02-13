'use strict';

const path = require('path');
const postcss = require('postcss');
const postcssDiscardComments = require('postcss-discard-comments');
const del = require('del');
const pify = require('pify');
const fs = require('fs');
const crypto = require('crypto');
const os = require('os');
const buildUserAssets = require('../scripts/build-user-assets');

function getTmp() {
  return path.join(os.tmpdir(), crypto.randomBytes(16).toString('hex'));
}

function cleanup(tmp) {
  return del(tmp, { force: true });
}

// Discard comments before comparison, because we don't care
// what the comments are for these tests
function discardComments(css) {
  return postcss().use(postcssDiscardComments()).process(css).css;
}

describe('buildUserAssets', () => {
  it('defaults', () => {
    const tmp = getTmp();
    return buildUserAssets(tmp)
      .then(() => pify(fs.readdir)(tmp))
      .then((files) => {
        expect(files.sort()).toMatchSnapshot();
        return pify(fs.readFile)(path.join(tmp, 'assembly.css'), 'utf8');
      })
      .then((css) => {
        expect(discardComments(css)).toMatchSnapshot();
      })
      .then(cleanup);
  });

  it('all options exploited', () => {
    const tmp = getTmp();
    return buildUserAssets(tmp, {
      files: [
        path.join(__dirname, './fixtures/b.css'),
        path.join(__dirname, './fixtures/a.css'),
      ],
      variables: {
        'blue-dark': '#223B53',
        'blue': '#3887BE',
        'blue-light': '#52A1D8',
        'blue-faint': '#F4F7FB',
        'beige': '##FFF8DC' // New color
      },
      mediaQueries: {
        '--l-screen': 'screen and (min-width: 760px)',
        '--ms-screen': '(min-width: 433px)' // New media query
      },
      colorVariants: {
        'range': ['blue-faint']
      },
      quiet: true
    })
      .then(() => pify(fs.readdir)(tmp))
      .then((files) => {
        expect(files.sort()).toMatchSnapshot();
        return pify(fs.readFile)(path.join(tmp, 'assembly.css'), 'utf8');
      })
      .then((css) => {
        expect(discardComments(css)).toMatchSnapshot();
      })
      .then(cleanup);
  });
});
