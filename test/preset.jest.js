'use strict';

const { presetAssembly } = require('../src/preset');
const { MEDIA_VARIANT_CLASSES } = require('../src/preset/media-classes');

async function generateJit(markup) {
  const { createGenerator } = await import('@unocss/core');
  const uno = await createGenerator({ presets: [presetAssembly()] });
  const { css } = await uno.generate(markup, { preflights: false });
  return css;
}

describe('presetAssembly', () => {
  test('omits the full safelist in JIT mode', () => {
    const preset = presetAssembly();
    expect(preset.name).toBe('preset-assembly');
    expect(preset.separators).toBe(':');
    expect(preset.variants).toHaveLength(1);
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
    expect(preset.safelist).toContain('gap12');
    expect(preset.safelist).toContain('gap12-mm');
    expect(preset.safelist).toContain('grid');
    expect(preset.safelist).toContain('grid-mm');
    expect(preset.safelist.some(token => token.includes('gridbox'))).toBe(
      false
    );
    expect(preset.safelist).toContain('aspect-16/9');
    expect(preset.safelist).toContain('aspect-16/9-ml');
    expect(preset.safelist).toContain('object-cover');
    expect(preset.safelist).toContain('flex--space-evenly-main');
    expect(preset.safelist).toContain('rotate90');
    expect(preset.safelist).toContain('scale50');
    expect(preset.safelist).toContain('translate-x12-mm');
    expect(preset.safelist).toContain('bg-blue');
    MEDIA_VARIANT_CLASSES.forEach(className => {
      expect(preset.safelist).toContain(`${className}-mm`);
    });
  });

  test('JIT generate emits only requested utilities', async () => {
    const css = await generateJit(
      'px12 flex bg-blue gap12 grid rotate30 translate-x48 mt48 mr-2/5'
    );
    expect(css).toContain('.px12');
    expect(css).toContain('.flex');
    expect(css).toContain('.bg-blue');
    expect(css).toContain('.gap12');
    expect(css).toContain(
      '.grid{display:grid !important;grid-template-columns:repeat(12, minmax(0, 1fr)) !important;}'
    );
    expect(css).toContain('.grid > .col, .grid > .col-mm');
    expect(css).toContain('.rotate30');
    expect(css).toContain('rotate:30deg');
    expect(css).toContain('.translate-x48');
    expect(css).toContain('translate:48px 0');
    expect(css).not.toContain('.mt48');
    expect(css).not.toContain('.mr-2\\/5');
    expect(css).not.toContain('.px24');
    expect(css).not.toContain('.flex-mm');
    expect(css).not.toContain('.bg-red');
    expect(css).not.toContain('.gap24');
    expect(css).not.toContain('.grid--gut');
  });

  test('media variants wrap color utilities', async () => {
    const css = await generateJit(
      'grid--gut12-mxl grid-ml px6-mm btn--red-ml bg-blue-mm'
    );
    expect(css.indexOf('.px6-mm')).toBeLessThan(css.indexOf('.grid-ml'));
    expect(css.indexOf('.grid-ml')).toBeLessThan(
      css.indexOf('.grid--gut12-mxl')
    );
    expect(css).toMatch(
      /@media \(--m-screen\)\{\n\.bg-blue-mm\{background-color:var\(--blue\) !important;\}/
    );
    expect(css).toContain(
      '.btn--stroke.btn--red-ml:hover, .btn--stroke.btn--red-ml.is-active'
    );
    expect(css).toMatch(
      /@media \(--l-screen\)\{\n\.grid-ml\{[^}]*\}\n\.grid-ml > \.col,/
    );
    expect(css).toMatch(
      /@media \(--xl-screen\)\{\n\.grid--gut12-mxl\{column-gap:12px;\}/
    );
    expect(css).not.toMatch(/\.bg-blue\{/);
    expect(css).not.toMatch(/\.btn--red[{:.,\s]/);
  });
});
