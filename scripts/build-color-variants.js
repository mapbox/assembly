'use strict';

const postcss = require('postcss');
const pify = require('pify');
const fs = require('fs');
const path = require('path');
const stripIndent = require('strip-indent');
const variables = require('../src/variables');

const outfile = path.join(__dirname, '../dist/color-variants.css');

const defaultConfig = {
  buttons: {
    fill: ['pink', 'red', 'lighten25', 'orange'],
    stroke: ['pink', 'red', 'orange', 'yellow'],
  },
  checkboxes: ['pink', 'red', 'lighten25', 'orange'],
  radios: ['pink', 'red', 'lighten25', 'orange'],
  switches: ['pink', 'red', 'lighten25', 'orange'],
  borders: ['pink', 'red', 'lighten25', 'orange'],
};

function getDarkerVariant(color) {
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

  switch (color.split('-')[1]) {
    case 'faint':
      return variables[`${color}-light`];
    case 'light':
      return variables[color];
    case undefined:
      return variables[`${color}-dark`];
    case 'dark':
      throw new Error(`Dark variants not allowed as base colors: use "${color.split('-')[0]}" instead of "${color}"`);
    default:
      throw new Error(`Unknown color ${color}`);
  }
}

function createAllButtonVariants(buttonConfig) {
  const createButtonFillVariant = (color) => {
    const darker = getDarkerVariant(color);
    const css = stripIndent(`
      .btn.bg-${color}.is-active {
        background-color: ${darker} !important;
      }
    `);
    const rule = postcss.parse(css).nodes[0];
    return rule;
  };

  const createButtonStrokeVariant = (color) => {
    const darker = getDarkerVariant(color);
    const css = stripIndent(`
      .btn--stroke.color-${color}.is-active {
        color: ${darker} !important;
      }
    `);
    const rule = postcss.parse(css).nodes[0];
    return rule;
  };

  const rules = [];
  if (buttonConfig.fill !== undefined) {
    buttonConfig.fill.forEach((color) => {
      rules.push(createButtonFillVariant(color));
    });
  }
  if (buttonConfig.stroke !== undefined) {
    buttonConfig.stroke.forEach((color) => {
      rules.push(createButtonStrokeVariant(color));
    });
  }

  return rules;
}

function createAllCheckboxVariants(checkboxConfig) {
  const createVariant = (color) => {
    const darker = getDarkerVariant(color);
    const css = stripIndent(`
      input:checked + .checkbox--stroke.color-${color},
      .checkbox--stroke.color-${color}.is-active {
        color: ${darker} !important;
      }
    `);
    const rule = postcss.parse(css).nodes[0];
    return rule;
  };

  return checkboxConfig.map(createVariant);
}

function createAllRadioVariants(radioConfig) {
  const createVariant = (color) => {
    const darker = getDarkerVariant(color);
    const css = stripIndent(`
      input:checked + .radio.color-${color},
      .radio.color-${color}.is-active {
        color: ${darker} !important;
      }
    `);
    const rule = postcss.parse(css).nodes[0];
    return rule;
  };

  return radioConfig.map(createVariant);
}

function createAllSwitchVariants(switchConfig) {
  const createVariant = (color) => {
    const darker = getDarkerVariant(color);
    const css = stripIndent(`
      input:checked + .switch--handle-${color}::after,
      .switch--handle-${color}.is-active::after {
        background-color: ${darker} !important;
      }
    `);
    const rule = postcss.parse(css).nodes[0];
    return rule;
  };

  return switchConfig.map(createVariant);
}

function createAllBorderVariants(borderConfig) {
  const createVariant = (color) => {
    const css = stripIndent(`
      .border--${color} {
        border-color: ${variables[color]} !important;
      }
    `);
    const rule = postcss.parse(css).nodes[0];
    return rule;
  };

  return borderConfig.map(createVariant);
}

function createColorVariantCss(config) {
  const root = postcss.root();

  if (config.buttons !== undefined) {
    root.append.apply(root, createAllButtonVariants(config.buttons));
  }

  if (config.checkboxes !== undefined) {
    root.append.apply(root, createAllCheckboxVariants(config.checkboxes));
  }

  if (config.radios !== undefined) {
    root.append.apply(root, createAllRadioVariants(config.radios));
  }

  if (config.switches !== undefined) {
    root.append.apply(root, createAllSwitchVariants(config.switches));
  }

  if (config.borders !== undefined) {
    root.append.apply(root, createAllBorderVariants(config.borders));
  }

  return root.toString();
}

function buildColorVariants(config) {
  config = config || defaultConfig;
  const css = createColorVariantCss(config);
  return pify(fs.writeFile)(outfile, css).then(() => {
    console.log('done');
  });
}

module.exports = buildColorVariants;

if (require.main === module) {
  buildColorVariants().catch((err) => console.error(err.stack));
}
