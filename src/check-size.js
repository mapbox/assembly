'use strict';

const path = require('path');
const fs = require('fs');
const child_process = require('child_process');
const prettyBytes = require('pretty-bytes');
const gzipSize = require('gzip-size');

async function checkSize() {
  child_process.execSync(
    'node_modules/.bin/npm-run-all --parallel build:js build:css'
  );
  const cssBuffer = await fs.promises.readFile(
    path.join(__dirname, '../dist/assembly.min.css')
  );
  const jsBuffer = await fs.promises.readFile(
    path.join(__dirname, '../dist/assembly.js')
  );
  const cssSize = prettyBytes(Buffer.byteLength(cssBuffer, 'utf8'));
  const jsSize = prettyBytes(Buffer.byteLength(jsBuffer, 'utf8'));
  const cssGzip = prettyBytes(gzipSize.sync(cssBuffer));
  const jsGzip = prettyBytes(gzipSize.sync(jsBuffer));
  console.log(`CSS: ${cssSize} (minified) => ${cssGzip} (gzipped)`);
  console.log(`SVG: ${jsSize} => ${jsGzip} (gzipped)`);
}

checkSize().catch(err => {
  console.log(err.stack);
  process.exitCode = 1;
});
