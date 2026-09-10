import { createGenerator } from '@unocss/core';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { presetAssembly } = require('../src/preset.js');

const uno = await createGenerator({
  presets: [presetAssembly()]
});

const generated = await uno.generate(
  'px12 flex bg-blue gap12 gridbox gridbox--cols3',
  {
    preflights: false,
    safelist: false
  }
);

process.stdout.write(generated.css);
