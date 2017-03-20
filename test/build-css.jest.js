'use strict';

const path = require('path');
const postcss = require('postcss');
const postcssDiscardComments = require('postcss-discard-comments');
const del = require('del');
const pify = require('pify');
const fs = require('fs');
const os = require('os');
const crypto = require('crypto');
const buildCss = require('../scripts/build-css');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

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

describe('buildCss', () => {
  test('defaults', () => {
    const tmp =  `${getTmp()}/test.css`;
    return buildCss({ outfile: tmp, quiet: true })
      .then(() => pify(fs.readFile)(tmp, 'utf8'))
      .then((css) => {
        expect(discardComments(css)).toMatchSnapshot();
      })
      .then(() => cleanup(tmp));
  });

  test('all options', () => {
    const options = {
      outfile: `${getTmp()}/test2.css`,
      files: [
        path.join(__dirname, './fixtures/b.css'),
        path.join(__dirname, './fixtures/a.css'),
      ],
      variables: {
        'blue-dark': '#223B53',
        'blue': '#3887BE',
        'blue-light': '#52A1D8',
        'blue-faint': '#F4F7FB',
        'beige': '#FFF8DC' // New color
      },
      mediaQueries: {
        '--l-screen': 'screen and (min-width: 760px)',
        '--ms-screen': '(min-width: 433px)' // New media query
      },
      colorVariants: {
        'range': ['blue-faint']
      },
      quiet: true
    };

    return buildCss(options)
      .then(() => pify(fs.readFile)(options.outfile, 'utf8'))
      .then((css) => {
        expect(discardComments(css)).toMatchSnapshot();
      })
      .then(() => cleanup(options.outfile));
  });
});
