'use strict';

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const xml2js = require('xml2js');

const svgDir = path.join(__dirname, 'svgs');
const parseString = promisify(xml2js.parseString);

function cleanPaths(pathNodes) {
  pathNodes.forEach(p => {
    if (p.$ && Object.keys(p.$).length) {
      Object.keys(p.$).forEach(k => {
        if (!['d', 'fill-rule', 'clip-rule'].includes(k)) delete p.$[k];
      });
    }
  });
}

function cleanGroups(group) {
  group.forEach(g => {
    if (g.$ && Object.keys(g.$).length) {
      Object.keys(g.$).forEach(k => {
        delete g.$[k];
      });
    }
    if (g.path) cleanPaths(g.path);
    if (g.g) cleanGroups(g.g);
  });
}

function cleanSvg(svg) {
  svg.$.viewBox = '0 0 18 18';
  delete svg.metadata;
  delete svg.defs;
  delete svg['sodipodi:namedview'];
  Object.keys(svg.$).forEach(k => {
    if (!['xmlns', 'viewBox'].includes(k)) delete svg.$[k];
  });
  if (svg.g) cleanGroups(svg.g);
  if (svg.path) cleanPaths(svg.path);
  return new xml2js.Builder({
    rootName: 'svg',
    renderOpts: { pretty: true }
  }).buildObject(svg);
}

async function cleanSvgs() {
  const files = (await fs.promises.readdir(svgDir)).filter(file =>
    file.endsWith('.svg')
  );
  await Promise.all(
    files.map(async fileName => {
      const file = await fs.promises.readFile(
        path.join(svgDir, fileName),
        'utf8'
      );
      const parsed = await parseString(file);
      await fs.promises.writeFile(
        path.join(svgDir, fileName),
        cleanSvg(parsed.svg),
        'utf8'
      );
      console.log(`cleaned ${fileName}`);
    })
  );
}

cleanSvgs().catch(err => {
  console.error(err);
  process.exitCode = 1;
});
