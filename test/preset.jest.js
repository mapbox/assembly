'use strict';

const postcss = require('postcss');
const { presetAssembly } = require('../src/preset');
const { MEDIA_VARIANT_CLASSES } = require('../src/preset/media-classes');

async function generateJit(markup) {
  const { createGenerator } = await import('@unocss/core');
  const uno = await createGenerator({ presets: [presetAssembly()] });
  const { css } = await uno.generate(markup, { preflights: false });
  return css;
}

const DARK = '(prefers-color-scheme: dark)';

function rulesInOrder(css) {
  const rules = [];
  postcss.parse(css).walkRules(rule => {
    const media =
      rule.parent.type === 'atrule' && rule.parent.name === 'media'
        ? rule.parent.params
        : null;
    rule.selectors.forEach(selector => rules.push({ selector, media }));
  });
  return rules;
}

function mediaFor(css, selector) {
  return rulesInOrder(css)
    .filter(rule => rule.selector === selector)
    .map(rule => rule.media);
}

function indexOf(css, selector) {
  return rulesInOrder(css).findIndex(rule => rule.selector === selector);
}

describe('presetAssembly', () => {
  test('omits the full safelist in JIT mode', () => {
    const preset = presetAssembly();
    expect(preset.name).toBe('preset-assembly');
    expect(preset.separators).toBe(':');
    expect(preset.variants).toHaveLength(2);
    expect(preset.rules.length).toBeGreaterThan(100);
    expect(preset.safelist).toEqual([]);
  });

  test('includes a complete safelist for static builds', () => {
    const preset = presetAssembly({ safelist: true });
    expect(preset.safelist).toContain('flex');
    expect(preset.safelist).toContain('flex-mm');
    expect(preset.safelist).toContain('px12');
    expect(preset.safelist).toContain('px12-mxl');
    expect(preset.safelist).toContain('w-1/2');
    expect(preset.safelist).toContain('grid--gut12-ml');
    expect(preset.safelist).toContain('bg-blue');
    MEDIA_VARIANT_CLASSES.forEach(className => {
      expect(preset.safelist).toContain(`${className}-mm`);
    });
  });

  test('JIT generate emits only requested utilities', async () => {
    const css = await generateJit('px12 flex bg-blue mt48 mr-2/5');
    expect(css).toContain('.px12');
    expect(css).toContain('.flex');
    expect(css).toContain('.bg-blue');
    expect(css).not.toContain('.mt48');
    expect(css).not.toContain('.mr-2\\/5');
    expect(css).not.toContain('.px24');
    expect(css).not.toContain('.flex-mm');
    expect(css).not.toContain('.bg-red');
  });

  test('media variants wrap color utilities', async () => {
    const css = await generateJit('bg-blue-mm btn--red-ml grid--gut12-mxl');
    expect(css).toMatch(
      /@media \(--m-screen\)\{\n\.bg-blue-mm\{background-color:var\(--blue\) !important;\}/
    );
    expect(css).toContain(
      '.btn--stroke.btn--red-ml:hover, .btn--stroke.btn--red-ml.is-active'
    );
    expect(css).toContain('.grid--gut12-mxl > .col');
    expect(css).not.toMatch(/\.bg-blue\{/);
    expect(css).not.toMatch(/\.btn--red[{:.,\s]/);
  });
});

describe('dark: variant', () => {
  test('wraps every state of a utility in the dark media query', async () => {
    const css = await generateJit('dark:btn--green');
    expect(rulesInOrder(css)).toEqual(
      [
        '.btn--stroke.dark\\:btn--green',
        '.btn--stroke.dark\\:btn--green:hover',
        '.btn--stroke.dark\\:btn--green.is-active',
        '.dark\\:btn--green',
        '.dark\\:btn--green:hover',
        '.dark\\:btn--green.is-active'
      ].map(selector => ({ selector, media: DARK }))
    );
  });

  test('reaches component classes defined in base.css', async () => {
    const css = await generateJit(
      'dark:loading dark:scroll-styled--dark dark:table--dark dark:prose--dark'
    );
    expect(mediaFor(css, '.dark\\:loading')).toEqual([DARK]);
    expect(
      mediaFor(
        css,
        '.dark\\:scroll-styled--dark::-webkit-scrollbar-thumb:hover'
      )
    ).toEqual([DARK]);
    expect(mediaFor(css, '.dark\\:table--dark th + td')).toEqual([DARK]);
    expect(mediaFor(css, '.dark\\:prose--dark a:not(.unprose)')).toEqual([
      DARK
    ]);
    expect(css).toContain('animation:assembly-loading');
  });

  test('emits both halves of a class defined in base.css and as a rule', async () => {
    const css = await generateJit('dark:loading--dark');
    const props = new Set();
    postcss.parse(css).walkRules(rule => {
      if (!rule.selectors.includes('.dark\\:loading--dark')) return;
      expect(rule.parent.params).toBe(DARK);
      rule.walkDecls(decl => props.add(decl.prop));
    });
    expect(props).toContain('border-radius');
    expect(props).toContain('border-left-color');
  });

  test('stacks with breakpoint suffixes', async () => {
    const css = await generateJit('dark:btn--green-mm dark:bg-gray-dark-ml');
    expect(mediaFor(css, '.dark\\:btn--green-mm')).toEqual([
      `(--m-screen) and ${DARK}`
    ]);
    expect(mediaFor(css, '.dark\\:bg-gray-dark-ml')).toEqual([
      `(--l-screen) and ${DARK}`
    ]);
  });

  test('follows light and breakpoint rules so it wins the cascade', async () => {
    const css = await generateJit(
      'bg-blue dark:bg-green block-mm dark:none dark:block-mm dark:block-ml'
    );
    expect(indexOf(css, '.dark\\:bg-green')).toBeGreaterThan(
      indexOf(css, '.bg-blue')
    );
    expect(indexOf(css, '.dark\\:none')).toBeGreaterThan(
      indexOf(css, '.block-mm')
    );
    expect(indexOf(css, '.dark\\:block-mm')).toBeGreaterThan(
      indexOf(css, '.dark\\:none')
    );
    expect(indexOf(css, '.dark\\:block-ml')).toBeGreaterThan(
      indexOf(css, '.dark\\:block-mm')
    );
  });

  test('ignores classes that base.css only names inside :not()', async () => {
    const css = await generateJit(
      'dark:unprose dark:btn--stroke dark:btn--pill-stroke'
    );
    expect(css).not.toContain(':not(.dark\\:');
  });

  test('leaves plain classes and the internal base.css matcher alone', async () => {
    const css = await generateJit('loading block-mm $base:loading');
    expect(css).not.toContain('loading');
    expect(mediaFor(css, '.block-mm')).toEqual(['(--m-screen)']);
  });
});
