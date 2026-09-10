'use strict';

const fs = require('fs');
const { mediaVariant } = require('./preset/variants');
const { layoutScaleRules } = require('./preset/layout-scales');
const { colorRules } = require('./preset/colors');
const { utilityRules } = require('./preset/utilities');
const {
  MEDIA_VARIANT_CLASSES,
  withMediaClasses
} = require('./preset/media-classes');
const { baseCss } = require('./preset/base');

function mediaSafelist(utilityTokens) {
  const known = new Set(utilityTokens);
  const missing = MEDIA_VARIANT_CLASSES.filter(name => !known.has(name));
  if (missing.length > 0) {
    throw new Error(
      `The following media-variant classes were not found: ${missing.join(
        ', '
      )}`
    );
  }
  const tokens = [];
  MEDIA_VARIANT_CLASSES.forEach(name => {
    withMediaClasses(name).forEach(token => tokens.push(token));
  });
  return tokens;
}

/**
 * UnoCSS preset that emits Assembly's class names and design tokens.
 *
 * @param {Object} [options]
 * @param {Object} [options.variables] - Variable overrides (same as buildUserAssets).
 * @param {Object|Array} [options.colorVariants] - Color variant config.
 * @param {Array<string>} [options.files] - Extra stylesheets appended after Assembly.
 * @param {boolean} [options.safelist=false] - When true, emit every Assembly
 *   utility (used by the prebuilt stylesheet). Omit this for JIT / on-demand builds.
 * @returns {Object} UnoCSS preset
 */
function presetAssembly(options) {
  const opts = options || {};
  const utilities = utilityRules();
  const scales = layoutScaleRules();
  const colors = colorRules(opts.colorVariants);
  const extraFiles = opts.files || [];
  const includeSafelist = opts.safelist === true;

  const safelist = includeSafelist
    ? utilities.tokens
        .concat(mediaSafelist(utilities.tokens))
        .concat(scales.safelist)
        .concat(colors.safelist)
    : [];

  return {
    name: 'preset-assembly',
    separators: ':',
    layers: {
      preflights: -100,
      default: 0,
      colors: 10,
      user: 20
    },
    variants: [mediaVariant()],
    rules: utilities.rules.concat(scales.rules).concat(colors.rules),
    preflights: [
      {
        layer: 'preflights',
        getCSS: () => baseCss()
      },
      {
        layer: 'colors',
        getCSS: () => colors.preflight
      }
    ].concat(
      extraFiles.map(file => ({
        layer: 'user',
        getCSS: () => fs.readFileSync(file, 'utf8')
      }))
    ),
    safelist
  };
}

module.exports = { presetAssembly };
