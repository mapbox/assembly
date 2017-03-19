'use strict';

const fs = require('fs');
const xml2js = require('xml2js');
const parseString = xml2js.parseString;
const collectPaths = require('./svg-utils').collectPaths;
const collectPathsFromGroup = require('./svg-utils').collectPathsFromGroup;
const invalidElement = require('./svg-utils').invalidElement;

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
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 18">' + pathData.map((p) => `<path d="${p}"/>`).join('') +
      '</svg>');
  }

  if (invalidElement(svg)) throw new Error(`${fileName} has ${invalidElement(svg)}`);
  if (svg.g) collectPathsFromGroup(svg.g, pathData);
  if (svg.path) collectPaths(svg.path, pathData);

  if (!pathData) throw new Error(`${fileName} has no paths.`);

  fs.writeFile('./src/svgs/' + fileName, buildSvgWithPaths(pathData), 'utf8', (err) => {
    if (err) return console.error(err);
    console.log(`cleaned ${fileName}`);
  });
}
