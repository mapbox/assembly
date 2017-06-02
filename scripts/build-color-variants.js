'use strict';

const fs = require('fs');
const path = require('path');
const pify = require('pify');
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

function isNotSuitableForForms(color) {
  // Do not create form elements from values that are too light or too dark,
  // for accessibility and to save space.
  return color === 'black' || /^(darken5|darken10|lighten5|lighten10)$/.test(color) || /(-dark|-light|-faint)$/.test(color);
}

function isNotSuitableForButtons(color) {
  // Filled Buttons should be allowed to have subtle backgrounds within reason.
  return color === 'black' || /(-faint|-dark)$/.test(color);
}

function buildColorVariants(variables, config) {
  variables = Object.assign({}, defaultVariables, variables);
  const colorVariants = (Array.isArray(config))
    ? { default: config }
    : Object.assign({ default: allColors }, config);

  function getDarkerShade(color) {
    if (color === 'white') return 'lighten75';
    if (color === 'transparent') return 'darken5';
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
        return `${colorBase}-dark`;
      case 'dark':
        throw new Error(`Dark variants not allowed as base colors: use "${colorBase}" instead of "${color}"`);
      default:
        throw new Error(`Unknown color ${color}`);
    }
  }

  const variantGenerators = {};

  variantGenerators.buttonFill = function (colors) {
    return colors.reduce((result, color) => {
      if (isNotSuitableForButtons(color)) return result;
      const darkerShade = getDarkerShade(color);
      return result += stripIndent(`
        .btn--${color} {
          background-color: var(--${color});
        }

        .btn--${color}:hover,
        .btn--${color}.is-active {
          background-color: var(--${darkerShade});
        }
      `);
    }, '');
  };

  variantGenerators.buttonStroke = function (colors) {
    return colors.reduce((result, color) => {
      if (isNotSuitableForForms(color)) return result;
      const darkerShade = getDarkerShade(color);
      return result += stripIndent(`
        .btn--stroke.btn--${color} {
          background-color: transparent;
          color: var(--${color});
        }

        .btn--stroke.btn--${color}:hover,
        .btn--stroke.btn--${color}.is-active {
          color: var(--${darkerShade});
        }
      `);
    }, '');
  };

  variantGenerators.selectFill = function (colors) {
    return colors.reduce((result, color) => {
      if (isNotSuitableForButtons(color)) return result;
      const darkerShade = getDarkerShade(color);
      return result += stripIndent(`
        .select--${color} {
          background-color: var(--${color});
        }

        .select--${color}:hover {
          background-color: var(--${darkerShade});
        }
      `);
    }, '');
  };

  variantGenerators.selectStroke = function (colors) {
    return colors.reduce((result, color) => {
      if (isNotSuitableForForms(color)) return result;
      const darkerShade = getDarkerShade(color);
      return result += stripIndent(`
        .select--stroke-${color} {
          color: var(--${color});
        }
        .select--stroke-${color} + .select-arrow {
          border-top-color: var(--${color});
        }
        .select--stroke-${color}:hover {
          color: var(--${darkerShade});
        }
        .select--stroke-${color}:hover + .select-arrow {
          border-top-color: var(--${darkerShade});
        }
      `);
    }, '');
  };

  variantGenerators.inputTextarea = function (colors) {
    return colors.reduce((result, color) => {
      if (isNotSuitableForForms(color)) return result;
      const darkerShade = getDarkerShade(color);
      return result += stripIndent(`
        .textarea--border-${color},
        .input--border-${color},
        .textarea--border-${color},
        .input--border-${color} {
          border-color: var(--${color});
        }

        .textarea--border-${color}:focus,
        .input--border-${color}:focus {
          border-color: var(--${darkerShade});
        }
      `);
    }, '');
  };

  variantGenerators.checkbox = function (colors) {
    return colors.reduce((result, color) => {
      if (isNotSuitableForForms(color)) return result;
      const darkerShade = getDarkerShade(color);
      return result += stripIndent(`
        .checkbox--${color} {
          color: var(--${color});
        }

        .checkbox-container:hover > .checkbox--${color},
        input:checked + .checkbox--${color} {
          color: var(--${darkerShade});
        }
      `);
    }, '');
  };

  variantGenerators.radio = function (colors) {
    return colors.reduce((result, color) => {
      if (isNotSuitableForForms(color)) return result;
      const darkerShade = getDarkerShade(color);
      return result += stripIndent(`
        .radio--${color} {
          color: var(--${color});
        }

        .radio-container:hover > .radio--${color},
        input:checked + .radio--${color} {
          color: var(--${darkerShade});
        }
      `);
    }, '');
  };

  variantGenerators.toggle = function (colors) {
    return colors.reduce((result, color) => {
      if (isNotSuitableForForms(color)) return result;
      const darkerShade = getDarkerShade(color);
      // Set the text color to regular when inactive.
      // Set the text color to dark when inactive on hover.
      // Set the background color to regular and text color to white when active.
      // Set the text color of toggle label when active.
      return result += stripIndent(`
        .toggle--${color} {
          color: var(--${color});
        }

        .toggle--${color}:hover {
          color: var(--${darkerShade});
        }

        input:checked + .toggle--${color} {
          background: var(--${color});
        }
      `);
    }, '');
  };

  variantGenerators.toggleActive = function (colors) {
    return colors.reduce((result, color) => {
      if (isNotSuitableForForms(color)) return result;
      // Must be below .toggle group in stylesheet
      return result += stripIndent(`
        input:checked + .toggle--active-${color} {
          color: var(--${color});
        }
      `);
    }, '');
  };

  variantGenerators.switch = function (colors) {
    return colors.reduce((result, color) => {
      if (isNotSuitableForForms(color)) return result;
      const darkerShade = getDarkerShade(color);
      // Darken background when hovered and when active
      // Darken dot on hover when inactive only
      return result += stripIndent(`
        .switch--${color} {
          color: var(--${color});
        }

        .switch--${color}:hover {
          color: var(--${darkerShade});
        }

        .switch--${color}:hover::after,
        input:checked + .switch--${color} {
          background-color: var(--${darkerShade});
        }

        input:checked + .switch--dot-${color}::after {
          background-color: var(--${color});
        }
      `);
    }, '');
  };

  variantGenerators.range = function (colors) {
    return colors.reduce((result, color) => {
      if (isNotSuitableForForms(color)) return result;
      const darkerShade = getDarkerShade(color);

      // Set the thumb color.
      return result += stripIndent(`
        .range--${color} > input { color: var(--${color}); }
        .range--${color}:hover > input { color: var(--${darkerShade}); }
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
          color: var(--${color}) !important;
        }
      `);
    }, '');
    css += stripIndent(`
      .color-text {
        color: var(--text-color) !important;
      }
    `);
    return css += '\n/** @endgroup */\n';
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
          background-color: var(--${color}) !important;
        }
      `);
    }, '');
    return css += '\n/** @endgroup */\n';
  };

  variantGenerators.link = function (colors) {
    return colors.reduce((result, color) => {
      if (isNotSuitableForForms(color)) return result;
      const darkerShade = getDarkerShade(color);
      return result += stripIndent(`
        .link--${color} {
          color: var(--${color});
        }

        .link--${color}:hover,
        .link--${color}.is-active {
          color: var(--${darkerShade});
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
          border-color: var(--${color}) !important;
        }
      `);
    }, '');
    css += '\n/** @endgroup */\n';
    return css;
  };

  variantGenerators.shadow = function (colors) {
    let css = stripIndent(`
      /**
       * Apply a box shadow.
       *
       * @group
       * @memberof Shadows
       * @example
       * <div class='shadow-darken25'>shadow-darken25</div>
       */`);
    css += colors.reduce((result, color) => {
      if (!isSemitransparent(color)) return result;
      return result += stripIndent(`
        .shadow-${color} {
          box-shadow: 0 0 10px 2px var(--${color}) !important;
        }
      `);
    }, '');
    css += '\n/** @endgroup */\n';

    css += stripIndent(`
      /**
       * Apply a larger box shadow.
       *
       * @group
       * @memberof Shadows
       * @example
       * <div class='mt6 shadow-darken25-bold'>shadow-darken25-bold</div>
       */`);
    css += colors.reduce((result, color) => {
      if (!isSemitransparent(color)) return result;
      return result += stripIndent(`
        .shadow-${color}-bold {
          box-shadow: 0 0 30px 6px var(--${color}) !important;
        }
      `);
    }, '');
    css += '\n/** @endgroup */\n';

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
      return result += stripIndent(`
        .shadow-${color}-on-hover:hover,
        .shadow-${color}-on-active.is-active,
        .shadow-${color}-on-active.is-active:hover {
          box-shadow: 0 0 10px 2px var(--${color}) !important;
        }
        .shadow-${color}-bold-on-hover:hover,
        .shadow-${color}-bold-on-active.is-active,
        .shadow-${color}-bold-on-active.is-active:hover {
          box-shadow: 0 0 30px 6px var(--${color}) !important;
        }
      `);
    }, '');
    css += '\n/** @endgroup */\n';
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
        .bg-${color}-on-active.is-active,
        .bg-${color}-on-active.is-active:hover {
          background-color: var(--${color}) !important;
        }
      `);
    }, '');
    css += '\n/** @endgroup */\n';
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
        .color-${color}-on-active.is-active,
        .color-${color}-on-active.is-active:hover {
          color: var(--${color}) !important;
        }
      `);
    }, '');
    css += '\n/** @endgroup */\n';
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
        .border--${color}-on-active.is-active,
        .border--${color}-on-active.is-active:hover {
          border-color: var(--${color}) !important;
        }
      `);
    }, '');
    css += '\n/** @endgroup */\n';
    return css;
  };

  let result = '\n/* Color variants */\n';

  Object.keys(variantGenerators).forEach((coloredThing) => {
    const colors = colorVariants[coloredThing] || colorVariants.default;
    if (colors === null || colors === undefined) return;
    result += variantGenerators[coloredThing](colors);
  });

  // Trim trailing whitespace
  result = result.replace(/[ ]+$/gm, '');

  // Prepare the file
  const fileHeader = stripIndent(`
    /* DO NOT MODIFY THIS FILE DIRECTLY!
    It is generated by scripts/build-color-variants.js, so any direct
    changes will be overridden on the next build. Instead, modify
    scripts/build-color-variants.js to produce the output you want */
  `).trim();
  const fileContent = fileHeader + '\n' + result;

  return fileContent;
}

module.exports = buildColorVariants;

// If this file is used as a script, we'll create the default color-variants.css file
// for documentation purposes
if (require.main === module) {
  Promise.resolve()
    .then(buildColorVariants)
    .then((css) => {
      return pify(fs.writeFile)(path.join(__dirname, '../src/color-variants.css'), css);
    })
    .catch((error) => console.error(error.stack));
}
