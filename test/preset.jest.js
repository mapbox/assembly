'use strict';

const path = require('path');
const { execFile } = require('child_process');
const { promisify } = require('util');
const { presetAssembly } = require('../src/preset');
const { MEDIA_VARIANT_CLASSES } = require('../src/preset/media-classes');

const execFileAsync = promisify(execFile);

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
    expect(preset.safelist).toContain('bg-blue');
    MEDIA_VARIANT_CLASSES.forEach(className => {
      expect(preset.safelist).toContain(`${className}-mm`);
    });
  });

  test('JIT generate emits only requested utilities', async () => {
    const { stdout } = await execFileAsync(process.execPath, [
      path.join(__dirname, 'generate-jit.mjs')
    ]);
    expect(stdout).toContain('.px12');
    expect(stdout).toContain('.flex');
    expect(stdout).toContain('.bg-blue');
    expect(stdout).not.toContain('.mt48');
    expect(stdout).not.toContain('.mr-2\\/5');
    expect(stdout).not.toContain('.px24');
    expect(stdout).not.toContain('.flex-mm');
    expect(stdout).not.toContain('.bg-red');
  });
});
