'use strict';

jest.mock('../scripts/build-css');
jest.mock('../scripts/build-js');
jest.mock('../scripts/copy-fonts');

const buildCss = require('../scripts/build-css');
const buildJs = require('../scripts/build-js');
const copyFonts = require('../scripts/copy-fonts');
const path = require('path');
const buildUserAssets = require('../scripts/build-user-assets');

describe('buildUserAssets', () => {
  test('defaults', () => {
    return buildUserAssets('/path/to/outdir')
      .then(() => {
        expect(buildCss).toHaveBeenCalledTimes(1);
        expect(buildCss).toHaveBeenCalledWith({
          outfile: '/path/to/outdir/assembly.css'
        });
        expect(buildJs).toHaveBeenCalledTimes(1);
        expect(buildJs).toHaveBeenCalledWith({
          outfile: '/path/to/outdir/assembly.js',
          quiet: false,
          icons: false
        });
        expect(copyFonts).toHaveBeenCalledTimes(1);
        expect(copyFonts).toHaveBeenCalledWith({
          outdir: '/path/to/outdir',
          quiet: false
        });
      });
  });

  test('all options exploited', () => {
    const options = {
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
      quiet: true,
      icons: ['airplane']
    };

    return buildUserAssets('/path/to/another/outdir', options)
      .then(() => {
        expect(buildCss).toHaveBeenCalledTimes(1);
        expect(buildCss).toHaveBeenCalledWith(Object.assign({}, options, {
          outfile: '/path/to/another/outdir/assembly.css',
        }));
        expect(buildJs).toHaveBeenCalledTimes(1);
        expect(buildJs).toHaveBeenCalledWith({
          outfile: '/path/to/another/outdir/assembly.js',
          quiet: true,
          icons: ['airplane']
        });
        expect(copyFonts).toHaveBeenCalledTimes(1);
        expect(copyFonts).toHaveBeenCalledWith({
          outdir: '/path/to/another/outdir',
          quiet: true
        });
      });
  });
});
