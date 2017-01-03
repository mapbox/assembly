'use strict';

const stripIndent = require('strip-indent');
const defaultVariables = require('../src/variables');

const allColors = [
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

function isSemitransparent(color) {
  return /^(lighten|darken)/.test(color);
}

function isDark(color) {
  return color === 'black' || /-dark$/.test(color);
}

function buildColorVariants(variables, config) {
  variables = Object.assign({}, defaultVariables, variables);
  const colorVariants = (Array.isArray(config))
    ? { default: config }
    : Object.assign({ default: allColors }, config);

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
      const colorValue = variables[color];
      const darkerShade = getDarkerShade(color);
      return result += stripIndent(`
        .btn--${color} {
          background-color: ${colorValue};
        }

        .btn--${color}:hover,
        .btn--${color}.is-active {
          background-color: ${darkerShade};
        }
      `);
    }, '');
  };

  variantGenerators.buttonStroke = function (colors) {
    return colors.reduce((result, color) => {
      if (isDark(color)) return result;
      const colorValue = variables[color];
      const darkerShade = getDarkerShade(color);
      return result += stripIndent(`
        .btn--stroke.btn--${color} {
          background-color: transparent;
          color: ${colorValue};
        }

        .btn--stroke.btn--${color}:hover,
        .btn--stroke.btn--${color}.is-active {
          color: ${darkerShade};
        }
      `);
    }, '');
  };

  variantGenerators.inputTextarea = function (colors) {
    return colors.reduce((result, color) => {
      if (isDark(color)) return result;
      const colorValue = variables[color];
      const darkerShade = getDarkerShade(color);
      return result += stripIndent(`
        .textarea--border-${color},
        .input--border-${color},
        .textarea--border-${color},
        .input--border-${color} {
          border-color: ${colorValue};
        }

        .textarea--border-${color}:hover,
        .input--border-${color}:hover,
        .textarea--border-${color}:focus,
        .input--border-${color}:focus {
          border-color: ${darkerShade};
        }
      `);
    }, '');
  };

  variantGenerators.selectFill = function (colors) {
    return colors.reduce((result, color) => {
      if (isDark(color)) return result;
      const colorValue = variables[color];
      const darkerShade = getDarkerShade(color);
      return result += stripIndent(`
        .select--${color} {
          background-color: ${colorValue};
        }

        .select--${color}:hover {
          background-color: ${darkerShade};
        }
      `);
    }, '');
  };

  variantGenerators.selectStroke = function (colors) {
    return colors.reduce((result, color) => {
      if (isDark(color)) return result;
      const colorValue = variables[color];
      const darkerShade = getDarkerShade(color);
      return result += stripIndent(`
        .select--stroke-${color} {
          color: ${colorValue};
        }
        .select--stroke-${color} + .select-arrow {
          border-top-color: ${colorValue};
        }
        .select--stroke-${color}:hover {
          color: ${darkerShade};
        }
        .select--stroke-${color}:hover + .select-arrow {
          border-top-color: ${darkerShade};
        }
      `);
    }, '');
  };

  variantGenerators.checkbox = function (colors) {
    return colors.reduce((result, color) => {
      if (isDark(color)) return result;
      const colorValue = variables[color];
      const darkerShade = getDarkerShade(color);
      return result += stripIndent(`
        .checkbox--${color} {
          color: ${colorValue};
        }

        .checkbox-container:hover > .checkbox--${color},
        input:checked + .checkbox--${color} {
          color: ${darkerShade};
        }
      `);
    }, '');
  };

  variantGenerators.radio = function (colors) {
    return colors.reduce((result, color) => {
      if (isDark(color)) return result;
      const colorValue = variables[color];
      const darkerShade = getDarkerShade(color);
      return result += stripIndent(`
        .radio--${color} {
          color: ${colorValue};
        }

        .radio-container:hover > .radio--${color},
        input:checked + .radio--${color} {
          color: ${darkerShade};
        }
      `);
    }, '');
  };

  variantGenerators.switch = function (colors) {
    return colors.reduce((result, color) => {
      if (isDark(color)) return result;
      const colorValue = variables[color];
      const darkerShade = getDarkerShade(color);
      // Darken background when hovered and when active
      // Darken dot on hover when inactive only
      return result += stripIndent(`
        .switch--${color} {
          color: ${colorValue};
        }

        .switch--${color}:hover {
          color: ${darkerShade};
        }

        .switch--${color}:hover::after,
        input:checked + .switch--${color} {
          background-color: ${darkerShade};
        }

        input:checked + .switch--dot-${color}::after {
          background-color: ${colorValue};
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
      // Set the background color to regular and text color to white when active.
      // Set the text color of toggle label when active.
      return result += stripIndent(`
        .toggle--${color} {
          color: ${colorValue};
        }

        .toggle--${color}:hover {
          color: ${darkerShade};
        }

        input:checked + .toggle--${color} {
          background: ${colorValue};
          color: #fff;
        }

        input:checked + .toggle--active-${color} {
          color: ${colorValue};
        }
      `);
    }, '');
  };

  variantGenerators.toggleActive = function (colors) {
    return colors.reduce((result, color) => {
      const colorValue = variables[color];

      // Must be below .toggle group in stylesheet
      return result += stripIndent(`
        input:checked + .toggle--active-${color} {
          color: ${colorValue};
        }
      `);
    }, '');
  };

  variantGenerators.range = function (colors) {
    return colors.reduce((result, color) => {
      if (isDark(color)) return result;
      const colorValue = variables[color];
      const darkerShade = getDarkerShade(color);
      // Set the track and thumb color.
      // Set the track and thumb color to dark on hover.
      return result += stripIndent(`
        .range--${color}::-webkit-slider-runnable-track { background: ${colorValue}; }
        .range--${color}::-moz-range-track { background: ${colorValue}; }
        .range--${color}::-ms-fill-lower { background: ${colorValue}; }
        .range--${color}::-ms-fill-upper { background: ${colorValue}; }

        .range--${color}::-webkit-slider-thumb { border-color: ${colorValue}; }
        .range--${color}::-ms-thumb { border-color: ${colorValue}); }
        .range--${color}::-moz-range-thumb { border-color: ${colorValue}; }

        .range--${color}:hover::-webkit-slider-runnable-track { background: ${darkerShade}; }
        .range--${color}:hover::-moz-range-track { background: ${darkerShade}; }
        .range--${color}:hover::-ms-fill-lower { background: ${darkerShade}; }
        .range--${color}:hover::-ms-fill-upper { background: ${darkerShade}; }

        .range--${color}:hover::-webkit-slider-thumb { border-color: ${darkerShade}; }
        .range--${color}:hover::-ms-thumb { border-color: ${darkerShade}; }
        .range--${color}:hover::-moz-range-thumb { border-color: ${darkerShade}; }
      `);
    }, '');
  };

  variantGenerators.color = function (colors) {
    // Manually adding `color-text`
    let css = stripIndent(`
      /**
       * @section Text colors
       * @memberof Colors
       */

      /**
       * Apply a text color.
       *
       * @group
       * @memberof Text colors
       * @example
       * <div class='grid'>`
    );
    colors.forEach((color) => {
      css += `\n *   <div class='col col--3 color-${color}'>color-${color}</div>`;
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
       * @memberof Colors
       */

      /**
       * Apply a background color.
       *
       * @group
       * @memberof Background colors
       * @example
       * <div class='grid'>`
    );
    colors.forEach((color) => {
      css += `\n *   <div class='col col--3 bg-${color} p6'>bg-${color}</div>`;
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
        .link--${color} {
          color: ${variables[color]};
        }

        .link--${color}:hover,
        .link--${color}.is-active {
          color: ${darkerShade};
        }
      `);
    }, '');
  };

  variantGenerators.border = function (colors) {
    let css = stripIndent(`
      /**
       * Apply a [color](#Colors) to a border.
       *
       * @group
       * @memberof Borders
       * @example
       * <div class='border border--red'>border--red</div>
       */`);
    css += colors.reduce((result, color) => {
      return result += stripIndent(`
        .border--${color} {
          border-color: ${variables[color]} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */';
    return css;
  };

  variantGenerators.hoverShadow = function (colors) {
    let css = stripIndent(`
      /**
       * Apply a box shadow on hover and active states.
       *
       * @group
       * @memberof Shadows
       * @example
       * <div class='shadow-darken25-on-hover'>shadow-darken25-on-hover</div>
       * <div class='shadow-darken25-on-active'>shadow-darken25-on-active (not active)</div>
       * <div class='shadow-darken25-on-active is-active'>shadow-darken25-on-active (active)</div>
       */`);
    css += colors.reduce((result, color) => {
      if (!isSemitransparent(color)) return result;
      const colorValue = variables[color];
      return result += stripIndent(`
        .shadow-${color}-on-hover:hover,
        .shadow-${color}-on-active.is-active {
          box-shadow: 0 0 10px 2px ${colorValue} !important;
        }
        .shadow-bold-${color}-on-hover:hover,
        .shadow-bold-${color}-on-active.is-active {
          box-shadow: 0 0 30px 6px ${colorValue} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */';
    return css;
  };

  variantGenerators.hoverBackground = function (colors) {
    let css = stripIndent(`
      /**
       * Apply a background color on hover and active states.
       *
       * @group
       * @memberof Background colors
       * @example
       * <div class='bg-darken25-on-hover'>bg-darken25-on-hover</div>
       * <div class='bg-darken25-on-active'>bg-darken25-on-active (not active)</div>
       * <div class='bg-darken25-on-active is-active'>bg-darken25-on-active (active)</div>
       */`);
    css += colors.reduce((result, color) => {
      return result += stripIndent(`
        .bg-${color}-on-hover:hover,
        .bg-${color}-on-active.is-active {
          background-color: ${variables[color]} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */';
    return css;
  };

  variantGenerators.hoverColor = function (colors) {
    let css = stripIndent(`
      /**
       * Apply a text color on hover and active states.
       *
       * @group
       * @memberof Text colors
       * @example
       * <div class='color-red-on-hover'>color-red-on-hover</div>
       * <div class='color-red-on-active'>color-red-on-active (not active)</div>
       * <div class='color-red-on-active is-active'>color-red-on-active (active)</div>
       */`);
    css += colors.reduce((result, color) => {
      return result += stripIndent(`
        .color-${color}-on-hover:hover,
        .color-${color}-on-active.is-active {
          color: ${variables[color]} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */';
    return css;
  };

  variantGenerators.hoverBorder = function (colors) {
    let css = stripIndent(`
      /**
       * Apply a border color on hover and active states.
       *
       * @group
       * @memberof Borders
       * @example
       * <div class='border border--red-on-hover'>border--red-on-hover</div>
       * <div class='border border--red-on-active'>border--red-on-active (not active)</div>
       * <div class='border border--red-on-active is-active'>border--red-on-active (active)</div>
       */`);
    css += colors.reduce((result, color) => {
      return result += stripIndent(`
        .border--${color}-on-hover:hover,
        .border--${color}-on-active.is-active {
          border-color: ${variables[color]} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */';
    return css;
  };

  let result = '\n/* Color variants */\n';

  Object.keys(variantGenerators).forEach((coloredThing) => {
    const colors = colorVariants[coloredThing] || colorVariants.default;
    if (colors === null || colors === undefined) return;
    result += variantGenerators[coloredThing](colors);
  });

  return result;
}

module.exports = buildColorVariants;

if (require.main === module) {
  buildColorVariants().catch((err) => console.error(err.stack));
}
