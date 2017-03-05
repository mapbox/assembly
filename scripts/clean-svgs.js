'use strict';

const fs = require('fs');
const xml2js = require('xml2js');
const parseString = xml2js.parseString;


fs.readdir('./src/svgs/', (err, files) => {
  const svgFiles = files.filter((file) =>
    file.split('.').pop().indexOf('svg') !== -1);

  svgFiles.forEach((fileName) => {
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

  const pathData = [];

  function buildSvgWithPaths(pathData) {
    return ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<svg viewBox="0 0 18 18">' + pathData.map((p) => `<path d="${p}"/>`).join('') +
      '</svg>');
  }

  function collectPaths(path) {
    path.forEach((p) => {
      if (p.$ && p.$.d) {
        pathData.push(p.$.d);
      }
    });
  }

  function traverseGroups(group) {
    group.forEach((g) => {

      if (g.path) {
        collectPaths(g.path);
      }

      if (g.g) {
        traverseGroups(g.g);
      }

    });
  }

  if (svg.g) traverseGroups(svg.g);
  if (svg.path) collectPaths(svg.path);

  fs.writeFile('./src/svgs/' + fileName, buildSvgWithPaths(pathData), 'utf8', (err) => {
    if (err) return console.error(err);
    console.log(`cleaned ${fileName}`);
  });
}
