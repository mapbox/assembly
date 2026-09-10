'use strict';

const fs = require('fs');
const path = require('path');
const { execFile } = require('child_process');
const { promisify } = require('util');
const postcss = require('postcss');

const execFileAsync = promisify(execFile);

const exampleDir = path.join(__dirname, '../examples/jit');
const buildPath = path.join(exampleDir, 'build.mjs');
const htmlPath = path.join(exampleDir, 'index.html');
const cssPath = path.join(exampleDir, 'assembly.css');

jest.setTimeout(30000);

function classesFromHtml(html) {
  const names = new Set();
  const matches = html.match(/class="([^"]+)"/g) || [];
  matches.forEach(attr => {
    attr
      .slice(7, -1)
      .split(/\s+/)
      .forEach(name => {
        if (name) names.add(name);
      });
  });
  return names;
}

function classSelectors(css) {
  const names = new Set();
  postcss.parse(css).walkRules(rule => {
    rule.selectors.forEach(selector => {
      const found = selector.trim().match(/^\.([a-zA-Z0-9_-]+)/);
      if (found) names.add(found[1]);
    });
  });
  return names;
}

describe('examples/jit', () => {
  test('committed CSS matches a fresh JIT build and omits unused utilities', async () => {
    const { stdout } = await execFileAsync(process.execPath, [
      buildPath,
      '--stdout'
    ]);
    const committed = fs.readFileSync(cssPath, 'utf8');
    expect(stdout).toBe(committed);

    const used = classesFromHtml(fs.readFileSync(htmlPath, 'utf8'));
    const emitted = classSelectors(stdout);

    used.forEach(name => {
      expect(emitted.has(name)).toBe(true);
    });

    [
      'px24',
      'py24',
      'bg-red',
      'gap24',
      'grid',
      'grid--gut12',
      'gridbox--cols3',
      'gridbox--cols12',
      'flex-mm',
      'animation-pulse'
    ].forEach(name => {
      expect(used.has(name)).toBe(false);
      expect(emitted.has(name)).toBe(false);
    });

    expect(stdout.length).toBeLessThan(3000);
    expect(stdout).not.toMatch(/html,\s*body/);
    expect(stdout).not.toMatch(/\.none-print/);
    expect(stdout).not.toMatch(/\.unselectable-mm/);
  });
});
