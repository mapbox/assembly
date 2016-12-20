'use strict';

const buildColorVariants = require('../scripts/build-color-variants');

describe('buildColorVariants', () => {
  it('defaults', () => {
    expect(buildColorVariants()).toMatchSnapshot();
  });
});
