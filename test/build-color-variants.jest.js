'use strict';

const buildColorVariants = require('../scripts/build-color-variants');

console.log(buildColorVariants());
return;

describe('buildColorVariants', () => {
  it('defaults', () => {
    expect(buildColorVariants()).toMatchSnapshot();
  });
});
