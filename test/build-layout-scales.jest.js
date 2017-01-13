'use strict';

const buildLayoutScales = require('../scripts/build-layout-scales');

describe('buildLayoutScales', () => {
  it('defaults', () => {
    expect(buildLayoutScales()).toMatchSnapshot();
  });
});
