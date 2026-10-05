import { createGenerator } from '@unocss/core';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { presetAssembly } = require('./preset.js');

const options = JSON.parse(process.argv[2]);

const uno = await createGenerator({
  presets: [presetAssembly(Object.assign({}, options, { safelist: true }))]
});

const generated = await uno.generate('', {
  safelist: true,
  preflights: true
});

process.stdout.write(generated.css);
