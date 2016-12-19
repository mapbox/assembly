#!/usr/bin/env node
'use strict';

const fs = require('fs');
const test = require('tape');
const xml2js = require('xml2js');

const parseString = xml2js.parseString;

test('valid svgs ', (t) => {

  fs.readdir('./src/svgs/', (err, files) => {
    const svgFiles = files.filter((file) =>
      file.split('.').pop().indexOf('svg') !== -1);

    svgFiles.forEach((fileName, j) => {

      fs.readFile('./src/svgs/' + fileName, 'utf8', (err, file) => {
        if (err) t.fail(err);
        parseString(file, (err, parsed) => {
          if (err) t.fail(err);
          validateSvg(parsed.svg, fileName);
        });
      });
      if (j + 1 === svgFiles.length) {
        t.end();
      }
    });
  });

  function validateSvg(svg, fileName) {
    const errors = [];
    const pixelUnitRegex = /^-?([0-9])+( ?px)?$/;

    function invalidElement(o) {
      const keys = Object.keys(o);
      let invalid = false;

      keys.some((key) => {
        invalid = key.match(/^(rectangle|circle|ellipse|line|polyline|polygon|style)$/) && key;
        return invalid;
      });
      return invalid;
    }

    function checkPaths(pathArray) {
      pathArray.forEach((path) => {
        if (path.$ && path.$.transform) errors.push('transformed paths');
      });
    }

    function traverseGroups(groupArray) {
      groupArray.forEach((group) => {
        if (group.$ && group.$.transform) errors.push('transformed groups');
        if (invalidElement(group)) errors.push(' has ' + invalidElement(group));
        if (group.path) {
          checkPaths(group.path);
        }
        if (group.g) {
          traverseGroups(group.g);
        }
      });
    }

    if (svg.$.width || svg.$.height) errors.push('must not have height or width properties');

    if (!svg.$.viewBox) {
      errors.push('must use viewBox sizing');
    } else {
      if (parseFloat(svg.$.viewBox.split(' ')[2]) !== 18 ||
        parseFloat(svg.$.viewBox.split(' ')[3]) !== 18) errors.push('invalid viewBox');
      if (svg.$.viewBox.split(' ').some((v) => !v.toString().match(pixelUnitRegex))) {
        errors.push('viewBox must use pixel units');
      }
    }

    if (invalidElement(svg)) errors.push('has ' + invalidElement(svg));
    if (svg.g) traverseGroups(svg.g);
    if (svg.path) checkPaths(svg.path);

    t.notOk(errors.length, `${fileName} (${errors.length})${(errors.length ? ':' : '')} ${errors.join(', ')}`);

  }

});
