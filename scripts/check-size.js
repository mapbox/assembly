'use strict';

const path = require('path');
const fs = require('fs');
const pify = require('pify');
const child_process = require('child_process');
const prettyBytes = require('pretty-bytes');
const gzipSize = require('gzip-size');

child_process.execSync('node_modules/.bin/npm-run-all --parallel build:svg build:css');

const readCss = pify(fs.readFile)(path.join(__dirname, '../dist/assembly.min.css'));
const readSvg = pify(fs.readFile)(path.join(__dirname, '../dist/assembly-svg.js'));

Promise.all([readCss, readSvg]).then((data) => {
  const cssBuffer = data[0];
  const svgBuffer = data[1];
  const cssSize = prettyBytes(Buffer.byteLength(cssBuffer, 'utf8'));
  const svgSize = prettyBytes(Buffer.byteLength(svgBuffer, 'utf8'));
  const cssGzipSize = prettyBytes(gzipSize.sync(cssBuffer));
  const svgGzipSize = prettyBytes(gzipSize.sync(svgBuffer));

  console.log(`CSS: ${cssSize} (minified) => ${cssGzipSize} (gzipped)`);
  console.log(`SVG: ${svgSize} => ${svgGzipSize} (gzipped)`);
});
