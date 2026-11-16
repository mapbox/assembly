import { createRequire } from 'module';
import fs from 'fs';

const require = createRequire(import.meta.url);
const { presetAssembly } = require('../../../src/preset.js');
const postcss = require('postcss');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssCustomMedia = require('postcss-custom-media');
const variables = require('../../../src/variables.json');
const mediaQueries = require('../../../src/media-queries.json');

const DARK_CLASS = /\bdark:[\w/.-]+/g;

// The site loads the prebuilt stylesheet, which has no `dark:` classes, so
// generate the ones the documentation examples use.
export default {
  watch: ['../../documentation/*.md'],
  async load(files) {
    // VitePress bundles data loaders to CommonJS, and @unocss/core is ESM-only.
    const { createGenerator } = await import('@unocss/core');
    const classes = new Set(
      files.flatMap(
        file => fs.readFileSync(file, 'utf8').match(DARK_CLASS) || []
      )
    );
    const uno = await createGenerator({ presets: [presetAssembly()] });
    const { css } = await uno.generate(Array.from(classes).join(' '), {
      preflights: false
    });
    const result = await postcss([
      postcssCustomProperties({
        preserve: false,
        warnings: false,
        importFrom: { customProperties: variables }
      }),
      postcssCustomMedia({ importFrom: { customMedia: mediaQueries } })
    ]).process(css, { from: undefined });
    return result.css;
  }
};
