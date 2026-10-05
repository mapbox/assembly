'use strict';

const path = require('path');
const fs = require('fs');
const pify = require('pify');
const child_process = require('child_process');
const prettyBytes = require('pretty-bytes');
const gzipSize = require('gzip-size');

child_process.execSync(
  'node_modules/.bin/npm-run-all --parallel build:js build:css'
);

const readCss = pify(fs.readFile)(
  path.join(__dirname, '../dist/assembly.min.css')
);
const readJs = pify(fs.readFile)(path.join(__dirname, '../dist/assembly.js'));

Promise.all([readCss, readJs]).then(data => {
  const cssBuffer = data[0];
  const jsBuffer = data[1];
  const cssSize = prettyBytes(Buffer.byteLength(cssBuffer, 'utf8'));
  const jsSize = prettyBytes(Buffer.byteLength(jsBuffer, 'utf8'));
  const cssGzipSize = prettyBytes(gzipSize.sync(cssBuffer));
  const jsGzipSize = prettyBytes(gzipSize.sync(jsBuffer));

  console.log(`CSS: ${cssSize} (minified) => ${cssGzipSize} (gzipped)`);
  console.log(`SVG: ${jsSize} => ${jsGzipSize} (gzipped)`);
});
