'use strict';

const layoutScales = require('../scales.json');
const { toEscapedSelector } = require('./escape');
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

function fractionPercent(numer, denom) {
  const d = Number(denom);
  if (!d) return;
  return (Number(numer) / d) * 100;
}

function wrapMediaFromSelector(rawSelector, css) {
  const media = rawSelector.match(/-m(m|l|xl)$/);
  if (!media) return css;
  return `@media (--${media[1]}-screen) {\n${css}\n}`;
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

function layoutScaleRules() {
  const rules = [];
  const safelist = [];

  layoutScales.gutter.forEach(scale => {
    withMediaClasses(`grid--gut${scale}`).forEach(token =>
      safelist.push(token)
    );
  });
  const gutterScale = new Set(layoutScales.gutter.map(String));
  rules.push([
    /^grid--gut(.+)$/,
    ([, scale], { rawSelector }) => {
      if (!gutterScale.has(scale)) return;
      const sel = toEscapedSelector(rawSelector);
      const val = cssValue(scale);
      const css = [
        `${sel} { margin-left: -${val}; }`,
        `${sel} > .col,`,
        `${sel} > .col-mm,`,
        `${sel} > .col-ml,`,
        `${sel} > .col-mxl { padding-left: ${val}; }`
      ].join('\n');
      return wrapMediaFromSelector(rawSelector, css);
    }
  ]);

  layoutScales.margin.forEach(scale => {
    const value = important(cssValue(scale));
    addStaticScale(rules, safelist, `my${scale}`, {
      'margin-top': value,
      'margin-bottom': value
    });
    addStaticScale(rules, safelist, `mx${scale}`, {
      'margin-left': value,
      'margin-right': value
    });
    addStaticScale(rules, safelist, `mt${scale}`, { 'margin-top': value });
    addStaticScale(rules, safelist, `mr${scale}`, { 'margin-right': value });
    addStaticScale(rules, safelist, `mb${scale}`, { 'margin-bottom': value });
    addStaticScale(rules, safelist, `ml${scale}`, { 'margin-left': value });
  });

  layoutScales.fractions.forEach(scale => {
    const name = fractionName(scale[0]);
    const value = important(`${scale[1]}%`);
    addStaticScale(rules, safelist, `mr-${name}`, { 'margin-right': value });
    addStaticScale(rules, safelist, `ml-${name}`, { 'margin-left': value });
    addStaticScale(rules, safelist, `w-${name}`, { width: value });
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

  layoutScales.gridTrack.forEach(n => {
    addStaticScale(rules, safelist, `gridbox--cols${n}`, {
      'grid-template-columns': important(`repeat(${n}, minmax(0, 1fr))`)
    });
    addStaticScale(rules, safelist, `gridbox--rows${n}`, {
      'grid-template-rows': important(`repeat(${n}, minmax(0, 1fr))`)
    });
    addStaticScale(rules, safelist, `gridbox-child-col${n}`, {
      'grid-column': important(`span ${n}`)
    });
    addStaticScale(rules, safelist, `gridbox-child-row${n}`, {
      'grid-row': important(`span ${n}`)
    });
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

  layoutScales.margin.forEach(scale => {
    const value = cssValue(scale);
    addStaticScale(rules, safelist, `translate-x${scale}`, {
      translate: important(`${value} 0`)
    });
    addStaticScale(rules, safelist, `translate-y${scale}`, {
      translate: important(`0 ${value}`)
    });
  });

  layoutScales.padding.forEach(scale => {
    const value = important(cssValue(scale));
    addStaticScale(rules, safelist, `py${scale}`, {
      'padding-top': value,
      'padding-bottom': value
    });
    addStaticScale(rules, safelist, `px${scale}`, {
      'padding-left': value,
      'padding-right': value
    });
    addStaticScale(rules, safelist, `pt${scale}`, { 'padding-top': value });
    addStaticScale(rules, safelist, `pr${scale}`, { 'padding-right': value });
    addStaticScale(rules, safelist, `pb${scale}`, { 'padding-bottom': value });
    addStaticScale(rules, safelist, `pl${scale}`, { 'padding-left': value });
  });

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
  addDynamicNumeric(rules, 'translate-x', scale => ({
    translate: important(`${cssValue(scale)} 0`)
  }));
  addDynamicNumeric(rules, 'translate-y', scale => ({
    translate: important(`0 ${cssValue(scale)}`)
  }));

  rules.push([
    /^scale(\d+)$/,
    ([, scale]) => ({ scale: important(String(Number(scale) / 100)) })
  ]);

  rules.push([
    /^w-(\d+)\/(\d+)$/,
    ([, numer, denom]) => {
      const pct = fractionPercent(numer, denom);
      if (pct == null) return;
      return { width: important(`${pct}%`) };
    }
  ]);

  rules.push([
    /^(h|hmax)-viewport-(\d+)\/(\d+)$/,
    ([, prefix, numer, denom]) => {
      const pct = fractionPercent(numer, denom);
      if (pct == null) return;
      const value = important(`${pct}vh`);
      if (prefix === 'h') return { height: value };
      return { 'max-height': value };
    }
  ]);

  return { rules, safelist };
}

module.exports = { layoutScaleRules, cssValue, fractionName };
