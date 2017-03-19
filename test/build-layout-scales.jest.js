'use strict';

const buildLayoutScales = require('../scripts/build-layout-scales');

describe('buildLayoutScales', () => {
  test('defaults', () => {
    expect(buildLayoutScales()).toMatchSnapshot();
  });
});
