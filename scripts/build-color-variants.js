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
  'black',
  'transparent'
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
  if (color === 'white') return variables['gray-faint'];
  if (color === 'transparent') return variables['darken5'];
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

variantGenerators.buttonFill = function (colors) {
  return colors.reduce((result, color) => {
    if (isDark(color)) return result;
    const darkerShade = getDarkerShade(color);
    const colorValue = variables[color];
    return result += stripIndent(`
      .btn--${color} {
        background-color: ${colorValue} !important;
      }

      .btn--${color}:hover {
        background-color: ${darkerShade} !important;
      }
    `);
  }, '');
};

variantGenerators.inputStroke = function (colors) {
  return colors.reduce((result, color) => {
    if (isDark(color)) return result;
    const darkerShade = getDarkerShade(color);
    return result += stripIndent(`
      .textarea.border--${color}:hover,
      .input.border--${color}:hover,
      .textarea.border--${color}:focus,
      .input.border--${color}:focus {
        border-color: ${darkerShade} !important;
      }
    `);
  }, '');
};

variantGenerators.buttonStroke = function (colors) {
  return colors.reduce((result, color) => {
    if (isDark(color)) return result;
    const darkerShade = getDarkerShade(color);
    return result += stripIndent(`
      .btn--stroke.color-${color}:hover {
        color: ${darkerShade} !important;
      }
    `);
  }, '');
};

variantGenerators.selectFill = function (colors) {
  return colors.reduce((result, color) => {
    if (isDark(color)) return result;
    const darkerShade = getDarkerShade(color);
    return result += stripIndent(`
      .select.bg-${color}:hover {
        background-color: ${darkerShade} !important;
      }
    `);
  }, '');
};

variantGenerators.selectStroke = function (colors) {
  return colors.reduce((result, color) => {
    if (isDark(color)) return result;
    const darkerShade = getDarkerShade(color);
    return result += stripIndent(`
      .select-container--stroke.color-${color}:hover {
        color: ${darkerShade} !important;
      }
    `);
  }, '');
};

variantGenerators.checkbox = function (colors) {
  return colors.reduce((result, color) => {
    if (isDark(color)) return result;
    const darkerShade = getDarkerShade(color);
    return result += stripIndent(`
      .checkbox-container:hover > .checkbox.color-${color},
      input:checked + .checkbox.color-${color} {
        color: ${darkerShade} !important;
      }
    `);
  }, '');
};

variantGenerators.radio = function (colors) {
  return colors.reduce((result, color) => {
    if (isDark(color)) return result;
    const darkerShade = getDarkerShade(color);
    return result += stripIndent(`
      .radio-container:hover > .radio.color-${color},
      input:checked + .radio.color-${color} {
        color: ${darkerShade} !important;
      }
    `);
  }, '');
};

variantGenerators.switch = function (colors) {
  return colors.reduce((result, color) => {
    if (isDark(color)) return result;
    const darkerShade = getDarkerShade(color);
    // Darken background when hovered and when active
    // Darken dot on hover when inactive only
    return result += stripIndent(`
      .switch.color-${color}:hover {
        border-color: ${darkerShade} !important;
      }

      input:checked + .switch.color-${color},
      input:not(:checked) + .switch.color-${color}:hover::after,
      input:checked + .switch--dot-${color}::after {
        background-color: ${darkerShade} !important;
      }
    `);
  }, '');
};

variantGenerators.toggle = function (colors) {
  return colors.reduce((result, color) => {
    if (isDark(color)) return result;
    const colorValue = variables[color];
    const darkerShade = getDarkerShade(color);
    // Set the text color to regular when inactive.
    // Set the text color to dark when inactive on hover.
    // Set the background color to dark and text color to white
    // when active.
    return result += stripIndent(`
      .toggle--${color} {
        color: ${colorValue} !important;
      }

      input:not(:checked) + .toggle--${color}:hover {
        color: ${darkerShade} !important;
      }

      input:checked + .toggle--${color} {
        background: ${colorValue} !important;
        color: #fff !important;
      }
    `);
  }, '');
};

variantGenerators.toggleActive = function (colors) {
  return colors.reduce((result, color) => {
    const colorValue = variables[color];
    // Set the text color of toggle label when active.
    // Must be below .toggle group in  stylesheet
    return result += stripIndent(`
      input:checked + .toggle--active-${color} {
        color: ${colorValue} !important;
      }
    `);
  }, '');
};




variantGenerators.color = function (colors) {
  // Manually adding `color-text`
  let css = stripIndent(`
    /**
     * @section Text colors
     * @memberof Colors & gradients
     */

    /**
     * @group
     * @memberof Text colors
     * @example
     * <div class='grid'>`
  );
  colors.forEach((color) => {
    css += `\n *   <div class='col col--3 color-${color}'>.color-${color}</div>`;
  });
  css += `\n *   <div class='col col--3 color-text'>.color-text</div>`; // eslint-disable-line quotes
  css += '\n * </div>\n */';
  css += colors.reduce((result, color) => {
    return result += stripIndent(`
      .color-${color} {
        color: ${variables[color]} !important;
      }
    `);
  }, '');
  css += stripIndent(`
    .color-text {
      color: ${variables['text-color']} !important;
    }
  `);
  return css += '/** @endgroup */';
};

variantGenerators.background = function (colors) {
  let css = stripIndent(`
    /**
     * @section Background colors
     * @memberof Colors & gradients
     */

    /**
     * @group
     * @memberof Background colors
     * @example
     * <div class='grid'>`
  );
  colors.forEach((color) => {
    css += `\n *   <div class='col col--3 bg-${color} p6'>.bg-${color}</div>`;
  });
  css += '\n * </div>\n */';
  css += colors.reduce((result, color) => {
    return result += stripIndent(`
      .bg-${color} {
        background-color: ${variables[color]} !important;
      }
    `);
  }, '');
  return css += '/** @endgroup */';
};

variantGenerators.link = function (colors) {
  return colors.reduce((result, color) => {
    if (isDark(color)) return result;
    const darkerShade = getDarkerShade(color);
    return result += stripIndent(`
      .txt-link.color-${color}:hover {
        color: ${darkerShade} !important;
      }
    `);
  }, '');
};

variantGenerators.border = function (colors) {
  let css = stripIndent(`
  /**
   * For a colored border, add the modifying class \`.border--color\`
   * where color is a [color](#Colors-&-gradients).
   *
   * @group
   * @memberof Borders
   * @example
   * <div class='flex-parent'>
   *  <div class='col col--2 p12 mr12 border border--red'>.border--red</div>
   *  <div class='col col--2 p12 mr12 border-l border-r border--dash border--yellow'>.border--yellow</div>
   * </div>
   */`);
  css +=  colors.reduce((result, color) => {
    return result += stripIndent(`
      .border--${color} {
        border-color: ${variables[color]} !important;
      }
    `);
  }, '');
  css +=  '/** @endgroup */';
  return css;
};

variantGenerators.hoverShadow = function (colors) {
  let css = stripIndent(`
  /**
   * Control the shadow of elements on hover.
   *
   * @group
   * @memberof State modifiers
   * @example
   * <div class='w400 hover-shadow-darken25'>.hover-shadow-darken25</div>
   */`);
  css += colors.reduce((result, color) => {
    if (!isSemitransparent(color)) return result;
    const colorValue = variables[color];
    return result += stripIndent(`
      .hover-shadow-${color}:hover {
        box-shadow: 0 0 10px 2px ${colorValue} !important;
      }
      .hover-shadow-${color}-bold:hover {
        box-shadow: 0 0 20px 2px ${colorValue} !important;
      }
    `);
  }, '');
  css +=  '/** @endgroup */';
  return css;
};

variantGenerators.hoverBackground = function (colors) {
  let css = stripIndent(`
  /**
   * Control the background of elements on hover.
   *
   * @group
   * @memberof State modifiers
   * @example
   * <div class='w400 hover-bg-darken25'>.hover-bg-darken25</div>
   */`);
  css += colors.reduce((result, color) => {
    return result += stripIndent(`
      .hover-bg-${color}:hover {
        background-color: ${variables[color]} !important;
      }
    `);
  }, '');
  css +=  '/** @endgroup */';
  return css;
};

variantGenerators.hoverColor = function (colors) {
  let css = stripIndent(`
  /**
   * Control the color of elements on hover.
   *
   * @group
   * @memberof State modifiers
   * @example
   * <div class='w400 hover-color-red'>.hover-color-red</div>
   */`);
  css += colors.reduce((result, color) => {
    return result += stripIndent(`
      .hover-color-${color}:hover {
        color: ${variables[color]} !important;
      }
    `);
  }, '');
  css +=  '/** @endgroup */';
  return css;
};

variantGenerators.hoverBorder = function (colors) {
  let css = stripIndent(`
  /**
   * Control the border color of elements on hover.
   *
   * @group
   * @memberof State modifiers
   * @example
   * <div class='w400 border border--2 border--pink hover-border-blue'>.hover-border-blue</div>
   */`);
  css += colors.reduce((result, color) => {
    return result += stripIndent(`
      .hover-border-${color}:hover {
        border-color: ${variables[color]} !important;
      }
    `);
  }, '');
  css +=  '/** @endgroup */';
  return css;
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
    result += variantGenerators[coloredThing](colors);
  });

  return result;
}

module.exports = buildColorVariants;

if (require.main === module) {
  buildColorVariants().catch((err) => console.error(err.stack));
}
