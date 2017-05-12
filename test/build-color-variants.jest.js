'use strict';

const buildColorVariants = require('../scripts/build-color-variants');

describe('buildColorVariants', () => {
  test('defaults', () => {
    expect(buildColorVariants()).toMatchSnapshot();
  });

  test('handles custom variables', () => {
    expect(buildColorVariants({
      'gray-dark': '#000',
      'pink': 'pink',
      'red': '#fff'
    })).toMatchSnapshot();
  });

  test('with default colors array', () => {
    expect(buildColorVariants(null, [
      'red',
      'teal',
      'teal-dark',
      'green-light'
    ])).toMatchSnapshot();
  });

  test('with granular colors', () => {
    expect(buildColorVariants(null, {
      default: ['lighten50', 'lighten25', 'gray'],
      buttonFill: ['green', 'purple'],
      selectFill: ['green'],
      background: ['orange', 'yellow', 'pink'],
      link: ['orange'],
      hoverShadow: ['lighten50'],
      switch: [],
      range: [],
    })).toMatchSnapshot();
  });
});
