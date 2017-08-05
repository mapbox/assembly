'use strict';

const buildMediaVariants = require('../scripts/build-media-variants');

describe('buildMediaVariants', () => {
  test('defaults', () => {
    return buildMediaVariants().then(css => {
      expect(css).toMatchSnapshot();
    });
  });
});
