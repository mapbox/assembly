'use strict';

const buildColorVariants = require('../scripts/build-color-variants');

describe('buildColorVariants', () => {
  it('defaults', () => {
    expect(buildColorVariants()).toMatchSnapshot();
  });

  it('handles custom variables', () => {
    expect(buildColorVariants({
      'gray-dark': '#000',
      'pink': 'pink',
      'red': '#fff'
    })).toMatchSnapshot();
  });

  it('with universal colors', () => {
    expect(buildColorVariants(null, [
      'red',
      'teal',
      'teal-dark',
      'green-light'
    ])).toMatchSnapshot();
  });

  it('with granular colors', () => {
    expect(buildColorVariants(null, {
      universal: ['lighten50', 'lighten25', 'gray'],
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
