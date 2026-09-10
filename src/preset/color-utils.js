'use strict';

const ALL_COLORS = [
  'gray-dark',
  'gray-deep',
  'gray',
  'gray-light',
  'gray-lighter',
  'gray-faint',

  'pink-dark',
  'pink-deep',
  'pink',
  'pink-light',
  'pink-lighter',
  'pink-faint',

  'red-dark',
  'red-deep',
  'red',
  'red-light',
  'red-lighter',
  'red-faint',

  'orange-dark',
  'orange-deep',
  'orange',
  'orange-light',
  'orange-lighter',
  'orange-faint',

  'yellow-dark',
  'yellow-deep',
  'yellow',
  'yellow-light',
  'yellow-lighter',
  'yellow-faint',

  'green-dark',
  'green-deep',
  'green',
  'green-light',
  'green-lighter',
  'green-faint',

  'blue-dark',
  'blue-deep',
  'blue',
  'blue-light',
  'blue-lighter',
  'blue-faint',

  'purple-dark',
  'purple-deep',
  'purple',
  'purple-light',
  'purple-lighter',
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
  'black',
  'transparent'
];

function isSemitransparent(color) {
  return /^(lighten|darken)/.test(color);
}

function isNotAccessibleForForms(color) {
  return (
    color === 'black' ||
    /^(darken5|darken10|lighten5|lighten10)$/.test(color) ||
    /(-dark|-deep|-light|-lighter|-faint)$/.test(color)
  );
}

function isNotAccessibleForButtons(color) {
  return (
    color === 'black' ||
    /^(darken5|lighten5)$/.test(color) ||
    /(-faint|-lighter|-deep|-dark)$/.test(color)
  );
}

function isNotAccessibleExceptBg(color) {
  return /^(darken5|lighten5)$/.test(color);
}

function getDarkerShade(color) {
  if (color === 'white') return 'lighten75';
  if (color === 'transparent') return 'darken10';
  if (color === 'black') return 'No dark variant for "black"';

  const semitransparentMatch = color.match(/(lighten|darken)(\d+$)/);
  if (semitransparentMatch !== null) {
    const action = semitransparentMatch[1];
    const magnitude = semitransparentMatch[2];
    switch (magnitude) {
      case '5':
        return `${action}10`;
      case '10':
        return `${action}25`;
      case '25':
        return `${action}50`;
      case '50':
        return `${action}75`;
      case '75':
        if (action === 'lighten') return 'white';
        return 'black';
      default:
        throw new Error(`Unknown color ${color}`);
    }
  }

  const splitColor = color.split('-');
  const colorBase = splitColor[0];
  const colorShade = splitColor[1];
  switch (colorShade) {
    case 'faint':
      return `${colorBase}-light`;
    case 'light':
      return colorBase;
    case undefined:
      return `${colorBase}-deep`;
    case 'dark':
      throw new Error(
        `Dark variants not allowed as base colors: use "${colorBase}" instead of "${color}"`
      );
    default:
      throw new Error(`Unknown color ${color}`);
  }
}

function resolveColorVariants(config) {
  if (Array.isArray(config)) {
    return { default: config };
  }
  return Object.assign({ default: ALL_COLORS }, config);
}

function colorsFor(resolved, key) {
  const colors = resolved[key] !== undefined ? resolved[key] : resolved.default;
  if (colors == null) return [];
  return colors;
}

module.exports = {
  ALL_COLORS,
  isSemitransparent,
  isNotAccessibleForForms,
  isNotAccessibleForButtons,
  isNotAccessibleExceptBg,
  getDarkerShade,
  resolveColorVariants,
  colorsFor
};
