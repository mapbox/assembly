'use strict';

const fs = require('fs');
const xml2js = require('xml2js');

const parseString = xml2js.parseString;

fs.readdir('./src/svgs/', (err, files) => {
  const svgFiles = files.filter(
    file => file.split('.').pop().indexOf('svg') !== -1
  );

  svgFiles.forEach(fileName => {
    fs.readFile('./src/svgs/' + fileName, 'utf8', (err, file) => {
      if (err) return console.error(err);
      parseString(file, (err, parsed) => {
        if (err) return console.error(err);
        cleanSvg(parsed.svg, fileName);
      });
    });
  });
});

function cleanSvg(svg, fileName) {
  svg.$.viewBox = '0 0 18 18';
  delete svg.metadata;
  delete svg.defs;
  delete svg['sodipodi:namedview'];

  // Remove all properties but viewbox from svg.
  Object.keys(svg.$).forEach(k => {
    if (k !== 'viewBox') delete svg.$[k];
  });

  function cleanPaths(path) {
    path.forEach(p => {
      // Remove all properties but d from paths.
      if (p.$ && Object.keys(p.$).length) {
        Object.keys(p.$).forEach(k => {
          if (k !== 'd') delete p.$[k];
        });
      }
    });
  }

  function cleanGroups(group) {
    group.forEach(g => {
      if (g.$ && Object.keys(g.$).length) {
        // Remove all properties from groups
        Object.keys(g.$).forEach(k => {
          delete g.$[k];
        });
      }

      if (g.path) {
        cleanPaths(g.path);
      }

      if (g.g) {
        cleanGroups(g.g);
      }
    });
  }

  if (svg.g) cleanGroups(svg.g);
  if (svg.path) cleanPaths(svg.path);

  const builder = new xml2js.Builder({
    rootName: 'svg',
    renderOpts: { pretty: true }
  });
  const xml = builder.buildObject(svg);

  fs.writeFile('./src/svgs/' + fileName, xml, 'utf8', err => {
    if (err) return console.error(err);
    console.log(`cleaned ${fileName}`);
  });
}
