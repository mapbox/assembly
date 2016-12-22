'use strict';

const fs = require('fs');
const pify = require('pify');
const path = require('path');
const buildSvgSprite = require('../scripts/build-color-variants');

const svgPath = path.join(__dirname, '../dist/assembly-svg.js');

describe('buildSvgSprite', () => {
  it('works as expected', () => {
    buildSvgSprite();
    return pify(fs.readFile)(svgPath, 'utf8').then((output) => {
      expect(output).toMatchSnapshot();
    });
  });
});
