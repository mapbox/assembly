import { createGenerator } from '@unocss/core';
import { createRequire } from 'module';
import fs from 'fs';

const require = createRequire(import.meta.url);
const { presetAssembly } = require('./preset.js');

const optionsPath = process.argv[2];
const options = JSON.parse(fs.readFileSync(optionsPath, 'utf8'));

const uno = await createGenerator({
  presets: [presetAssembly(Object.assign({}, options, { safelist: true }))]
});

const generated = await uno.generate('', {
  safelist: true,
  preflights: true
});

process.stdout.write(generated.css);
