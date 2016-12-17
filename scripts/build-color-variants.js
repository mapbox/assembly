#!/usr/bin/env node
'use strict';

const stripIndent = require('strip-indent');
const variables = require('../src/variables');

const allConfig = [
  'gray-dark',
  'gray',
  'gray-light',
  'gray-faint',

  'pink-dark',
  'pink',
  'pink-light',
  'pink-faint',

  'red-dark',
  'red',
  'red-light',
  'red-faint',

  'orange-dark',
  'orange',
  'orange-light',
  'orange-faint',

  'yellow-dark',
  'yellow',
  'yellow-light',
  'yellow-faint',

  'green-dark',
  'green',
  'green-light',
  'green-faint',

  'teal-dark',
  'teal',
  'teal-light',
  'teal-faint',

  'blue-dark',
  'blue',
  'blue-light',
  'blue-faint',

  'purple-dark',
  'purple',
  'purple-light',
  'purple-faint',

  'darken5',
  'darken10',
  'darken25',
  'darken50',
  'darken75',

  'lighten5',
  'lighten10',
  'lighten25',
  'lighten50',
  'lighten75',

  'white',
  'black'
];

// const defaultConfig = {
//   buttons: {
//     fill: ['pink', 'red', 'lighten25', 'orange'],
//     stroke: ['pink', 'red', 'orange', 'yellow'],
//   },
//   checkboxes: ['pink', 'red', 'lighten25', 'orange'],
//   radios: ['pink', 'red', 'lighten25', 'orange'],
//   switches: ['pink', 'red', 'lighten25', 'orange'],
//   borders: ['pink', 'red', 'lighten25', 'orange'],
// };

function isSemitransparent(color) {
  return /^(lighten|darken)/.test(color);
}

function isDark(color) {
  return color === 'black' || /-dark$/.test(color);
}

function getDarkerShade(color) {
  if (color === 'white') return 'gray-faint';
  if (color === 'black') return 'No dark variant for "black"';

  const semitransparentMatch = color.match(/(lighten|darken)(\d+$)/);
  if (semitransparentMatch !== null) {
    const action = semitransparentMatch[1];
    const magnitude = semitransparentMatch[2];
    switch (magnitude) {
      case '5':
        return variables[`${action}10`];
      case '10':
        return variables[`${action}25`];
      case '25':
        return variables[`${action}50`];
      case '50':
        return variables[`${action}75`];
      case '75':
        if (action === 'lighten') return '#fff';
        return '#000';
      default:
        throw new Error(`Unknown color ${color}`);
    }
  }

  const splitColor = color.split('-');
  const colorBase = splitColor[0];
  const colorShade = splitColor[1];
  switch (colorShade) {
    case 'faint':
      return variables[`${colorBase}-light`];
    case 'light':
      return variables[colorBase];
    case undefined:
      return variables[`${colorBase}-dark`];
    case 'dark':
      throw new Error(`Dark variants not allowed as base colors: use "${colorBase}" instead of "${color}"`);
    default:
      throw new Error(`Unknown color ${color}`);
  }
}

const variantGenerators = {};

variantGenerators.buttonFill = function (color) {
  if (isDark(color)) return '';
  const darkerShade = getDarkerShade(color);
  return stripIndent(`
    .btn.bg-${color}:hover {
      background-color: ${darkerShade} !important;
    }
  `);
};

variantGenerators.buttonStroke = function (color) {
  if (isDark(color)) return '';
  const darkerShade = getDarkerShade(color);
  return stripIndent(`
    .btn--stroke.color-${color}:hover {
      color: ${darkerShade} !important;
    }
  `);
};

variantGenerators.selectFill = function (color) {
  if (isDark(color)) return '';
  const darkerShade = getDarkerShade(color);
  return stripIndent(`
    .select.bg-${color}:hover {
      background-color: ${darkerShade} !important;
    }
  `);
};

variantGenerators.selectStroke = function (color) {
  if (isDark(color)) return '';
  const darkerShade = getDarkerShade(color);
  return stripIndent(`
    .select--stroke.color-${color}:hover {
      color: ${darkerShade} !important;
    }
  `);
};

variantGenerators.checkbox = function (color) {
  if (isDark(color)) return '';
  const darkerShade = getDarkerShade(color);
  return stripIndent(`
    .checkbox-container:hover > .checkbox.color-${color},
    input:checked + .checkbox.color-${color},
    .checkbox.color-${color}.is-active {
      color: ${darkerShade} !important;
    }
  `);
};

variantGenerators.radio = function (color) {
  if (isDark(color)) return '';
  const darkerShade = getDarkerShade(color);
  return stripIndent(`
    .radio-container:hover > .radio.color-${color},
    input:checked + .radio.color-${color},
    .radio.color-${color}.is-active {
      color: ${darkerShade} !important;
    }
  `);
};

variantGenerators.switch = function (color) {
  if (isDark(color)) return '';
  const darkerShade = getDarkerShade(color);
  // Darken background when active
  // Darken dot on hover when inactive only
  return stripIndent(`
    .switch.color-${color}:hover {
      border-color: ${darkerShade} !important;
    }

    input:not(:checked) + .switch.color-${color}:hover::after,
    :not(input) + .switch.color-${color}:not(.is-active):hover::after,
    .switch--dot-${color}.is-active::after,
    input:checked + .switch--dot-${color}::after {
      background-color: ${darkerShade} !important;
    }
  `);
};

variantGenerators.toggle = function (color) {
  if (isDark(color)) return '';
  const colorValue = variables[color];
  const darkerShade = getDarkerShade(color);
  // Set the text color to regular when inactive.
  // Set the text color to dark when inactive on hover.
  // Set the background color to dark and text color to white
  // when active.
  return stripIndent(`
    .toggle--${color} {
      color: ${colorValue} !important;
    }

    input:not(:checked) + .toggle.toggle--${color}:not(.is-active):hover,
    :not(input) + .toggle.toggle--${color}:not(.is-active):hover {
      color: ${darkerShade} !important;
    }

    .toggle.toggle--${color}.is-active,
    input:checked + .toggle.toggle--${color} {
      background: ${colorValue} !important;
      color: #fff !important;
    }
  `);
};

variantGenerators.link = function (color) {
  if (isDark(color)) return '';
  const darkerShade = getDarkerShade(color);
  return stripIndent(`
    .txt-link.color-${color}:hover,
    .txt-link.color-${color}.is-active {
      color: ${darkerShade} !important;
    }
  `);
};

variantGenerators.border = function (color) {
  return stripIndent(`
    .border--${color} {
      border-color: ${variables[color]} !important;
    }
  `);
};

variantGenerators.hoverShadow = function (color) {
  if (!isSemitransparent(color)) return '';
  const colorValue = variables[color];
  return stripIndent(`
    .hover-shadow-${color}:hover {
      box-shadow: 0 0 10px 2px ${colorValue} !important;
    }
    .hover-shadow-${color}-bold:hover {
      box-shadow: 0 0 20px 2px ${colorValue} !important;
    }
  `);
};

variantGenerators.hoverBackground = function (color) {
  return stripIndent(`
    .hover-bg-${color}:hover {
      background-color: ${variables[color]} !important;
    }
  `);
};

variantGenerators.hoverColor = function (color) {
  return stripIndent(`
    .hover-color-${color}:hover {
      color: ${variables[color]} !important;
    }
  `);
};

variantGenerators.activeColor = function (color) {
  return stripIndent(`
    .active-color-${color}.is-active {
      color: ${variables[color]} !important;
    }
  `);
};

variantGenerators.hoverBorder = function (color) {
  return stripIndent(`
    .hover-border-${color}:hover {
      border-color: ${variables[color]} !important;
    }
  `);
};

variantGenerators.activeBackground = function (color) {
  return stripIndent(`
    .active-bg-${color}.is-active {
      background-color: ${variables[color]} !important;
    }
  `);
};

variantGenerators.activeBorder = function (color) {
  return stripIndent(`
    .active-border-${color}.is-active {
      border-color: ${variables[color]} !important;
    }
  `);
};

function buildColorVariants(config) {
  config = config || allConfig;
  const universalColors = (Array.isArray(config))
    ? config
    : null;

  let result = '';

  Object.keys(variantGenerators).forEach((coloredThing) => {
    const colors = universalColors || config[coloredThing];
    if (colors === null || colors === undefined) return;
    colors.forEach((color) => {
      result += variantGenerators[coloredThing](color);
    });
  });

  return result;
}

module.exports = buildColorVariants;

if (require.main === module) {
  buildColorVariants().catch((err) => console.error(err.stack));
}
