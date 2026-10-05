/**
 * @jest-environment jsdom
 */

/* global window */

'use strict';

describe('Assembly icon functions (IIFE)', () => {
  let Assembly;

  beforeEach(() => {
    jest.resetModules();

    // Clear global Assembly before each test
    delete window.Assembly;

    // Load the IIFE file (executes and attaches Assembly to window)
    require('../src/js/icon-functions');

    // Now get the Assembly object from the global window
    Assembly = window.Assembly;

    // Mock the SVG sprite content
    Assembly._svgSprite = `
      <svg>
        <symbol id="icon-check"></symbol>
        <symbol id="icon-close"></symbol>
      </svg>
    `;
  });

  test('iconExists returns true for existing icon', () => {
    expect(Assembly.iconExists('check')).toBe(true);
    expect(Assembly.iconExists('close')).toBe(true);
  });

  test('iconExists returns false for non-existing icon', () => {
    expect(Assembly.iconExists('nonexistent')).toBe(false);
  });

  test('iconExists returns false on string resembling regex', () => {
    expect(Assembly.iconExists('a"|(.*)*$')).toBe(false);
  });

  test('createIcon creates valid SVG with <use>', () => {
    const icon = Assembly.createIcon('check');

    expect(icon.nodeName.toLowerCase()).toBe('svg');
    expect(icon.getAttribute('class')).toBe('icon');

    const use = icon.querySelector('use');
    expect(use).not.toBeNull();
    expect(use.getAttributeNS('http://www.w3.org/1999/xlink', 'href')).toBe(
      '#icon-check'
    );
  });

  test('createIcon throws error if icon does not exist', () => {
    expect(() => Assembly.createIcon('missing')).toThrow(
      'Icon "missing" does not exist'
    );
  });

  test('changeIcon updates xlink:href', () => {
    const icon = Assembly.createIcon('check');
    Assembly.changeIcon(icon, 'close');

    const use = icon.querySelector('use');
    expect(use.getAttributeNS('http://www.w3.org/1999/xlink', 'href')).toBe(
      '#icon-close'
    );
  });

  test('changeIcon throws error if icon does not exist', () => {
    const icon = Assembly.createIcon('check');
    expect(() => Assembly.changeIcon(icon, 'missing')).toThrow(
      'Icon "missing" does not exist'
    );
  });
});
