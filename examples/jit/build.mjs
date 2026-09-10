import { createGenerator } from '@unocss/core';
import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const { presetAssembly } = require('../../src/preset.js');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssCustomMedia = require('postcss-custom-media');
const postcssDiscardComments = require('postcss-discard-comments');
const variables = require('../../src/variables.json');
const mediaQueries = require('../../src/media-queries.json');

const root = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(root, 'index.html');
const outPath = path.join(root, 'assembly.css');
const BANNER =
  '/* JIT utilities from examples/jit/index.html. No reset or component CSS. Do not edit. */\n';

async function generateJitCss() {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const uno = await createGenerator({
    presets: [presetAssembly()]
  });
  const generated = await uno.generate(html, {
    preflights: false,
    safelist: false
  });
  const result = await postcss([
    postcssCustomProperties({
      preserve: false,
      warnings: false,
      importFrom: {
        customProperties: variables
      }
    }),
    postcssCustomMedia({
      importFrom: { customMedia: mediaQueries }
    }),
    autoprefixer(),
    postcssDiscardComments()
  ]).process(generated.css, { from: undefined });
  return BANNER + result.css;
}

async function main() {
  try {
    const css = await generateJitCss();
    if (process.argv.includes('--stdout')) {
      process.stdout.write(css);
      return;
    }
    fs.writeFileSync(outPath, css);
  } catch (error) {
    process.stderr.write(`${error.stack}\n`);
    process.exitCode = 1;
  }
}

main();
