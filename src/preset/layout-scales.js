'use strict';

const layoutScales = require('../scales.json');
const { withMediaClasses } = require('./media-classes');

function cssValue(v) {
  if (v === '-full') return '100%';
  if (v === '-auto') return 'auto';
  if (v === '-none') return 'none';
  if (typeof v === 'string' && v.indexOf('neg') !== -1) {
    return `-${v.replace('-neg', '')}px`;
  }
  if (v === 0 || v === '0') return '0';
  return `${v}px`;
}

function important(value) {
  return `${value} !important`;
}

function fractionName(raw) {
  return raw.replace(/\\/g, '');
}

function rotateDeg(scale) {
  if (String(scale).indexOf('neg') !== -1) {
    return `-${String(scale).replace('-neg', '')}deg`;
  }
  return `${scale}deg`;
}

const NUMERIC_SUFFIX = '(-neg\\d+|\\d+)';

function addStaticScale(rules, safelist, className, decls) {
  rules.push([className, decls]);
  withMediaClasses(className).forEach(token => safelist.push(token));
}

function addDynamicNumeric(rules, prefix, declsFromScale) {
  rules.push([
    new RegExp(`^${prefix}${NUMERIC_SUFFIX}$`),
    ([, scale]) => declsFromScale(scale)
  ]);
}

const SPACING_SIDES = [
  ['y', ['top', 'bottom']],
  ['x', ['left', 'right']],
  ['t', ['top']],
  ['r', ['right']],
  ['b', ['bottom']],
  ['l', ['left']]
];

// Sides are the outer loop so a single-side class always comes after, and
// overrides, an axis class regardless of size (e.g. `px12 pl6`).
function addSpacingScales(rules, safelist, prefix, property, scales) {
  SPACING_SIDES.forEach(([side, edges]) => {
    scales.forEach(scale => {
      const value = important(cssValue(scale));
      const decls = {};
      edges.forEach(edge => {
        decls[`${property}-${edge}`] = value;
      });
      addStaticScale(rules, safelist, `${prefix}${side}${scale}`, decls);
    });
  });
}

function layoutScaleRules() {
  const rules = [];
  const safelist = [];

  layoutScales.gutter.forEach(scale => {
    addStaticScale(rules, safelist, `grid--gut${scale}`, {
      'column-gap': cssValue(scale)
    });
  });

  addSpacingScales(rules, safelist, 'm', 'margin', layoutScales.margin);

  layoutScales.fractions.forEach(scale => {
    const name = fractionName(scale[0]);
    const value = important(`${scale[1]}%`);
    const span = Math.round((scale[1] * 12) / 100);
    addStaticScale(rules, safelist, `mr-${name}`, { 'margin-right': value });
    addStaticScale(rules, safelist, `ml-${name}`, {
      'margin-left': value,
      'grid-column-start': important(String(span + 1))
    });
    addStaticScale(rules, safelist, `w-${name}`, {
      width: value,
      'grid-column-end': important(`span ${span}`)
    });
    addStaticScale(rules, safelist, `h-viewport-${name}`, {
      height: important(`${scale[1]}vh`)
    });
    addStaticScale(rules, safelist, `hmax-viewport-${name}`, {
      'max-height': important(`${scale[1]}vh`)
    });
  });

  layoutScales.gap.forEach(scale => {
    const value = important(cssValue(scale));
    addStaticScale(rules, safelist, `gap${scale}`, { gap: value });
    addStaticScale(rules, safelist, `gapx${scale}`, { 'column-gap': value });
    addStaticScale(rules, safelist, `gapy${scale}`, { 'row-gap': value });
  });

  addStaticScale(rules, safelist, 'aspect-auto', {
    'aspect-ratio': important('auto')
  });
  layoutScales.aspectRatio.forEach(scale => {
    const name = fractionName(scale[0]);
    addStaticScale(rules, safelist, `aspect-${name}`, {
      'aspect-ratio': important(scale[1])
    });
  });

  layoutScales.rotate.forEach(scale => {
    addStaticScale(rules, safelist, `rotate${scale}`, {
      rotate: important(rotateDeg(scale))
    });
  });

  layoutScales.scale.forEach(scale => {
    addStaticScale(rules, safelist, `scale${scale}`, {
      scale: important(String(scale / 100))
    });
  });

  addSpacingScales(rules, safelist, 'p', 'padding', layoutScales.padding);

  layoutScales.width.forEach(scale => {
    addStaticScale(rules, safelist, `w${scale}`, {
      width: important(cssValue(scale))
    });
  });

  layoutScales.maxWidth.forEach(scale => {
    addStaticScale(rules, safelist, `wmax${scale}`, {
      'max-width': important(cssValue(scale))
    });
  });

  layoutScales.minWidth.forEach(scale => {
    addStaticScale(rules, safelist, `wmin${scale}`, {
      'min-width': important(cssValue(scale))
    });
  });

  layoutScales.height.forEach(scale => {
    addStaticScale(rules, safelist, `h${scale}`, {
      height: important(cssValue(scale))
    });
  });

  layoutScales.maxHeight.forEach(scale => {
    addStaticScale(rules, safelist, `hmax${scale}`, {
      'max-height': important(cssValue(scale))
    });
  });

  layoutScales.minHeight.forEach(scale => {
    addStaticScale(rules, safelist, `hmin${scale}`, {
      'min-height': important(cssValue(scale))
    });
  });

  addStaticScale(rules, safelist, 'h-viewport-full', {
    height: important('100vh')
  });
  addStaticScale(rules, safelist, 'hmax-viewport-full', {
    'max-height': important('100vh')
  });

  addDynamicNumeric(rules, 'rotate', scale => ({
    rotate: important(rotateDeg(scale))
  }));

  rules.push([
    /^scale(\d+)$/,
    ([, scale]) => ({ scale: important(String(Number(scale) / 100)) })
  ]);

  return { rules, safelist };
}

module.exports = { layoutScaleRules };
