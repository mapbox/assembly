'use strict';

function invalidElement(o) {
  const keys = Object.keys(o);
  let invalid = false;

  keys.some((key) => {
    invalid = key.match(/^(rect|circle|ellipse|line|polyline|polygon|style)$/) && key;
    return invalid;
  });
  return invalid;
}

function collectPaths(path, pathData) {
  path.forEach((p) => {
    if (p.$ && p.$.d) {
      pathData.push(p.$.d);
    }
  });
}

function collectPathsFromGroup(group, pathData) {

  group.forEach((g) => {

    // Back out if invalid elements exists.
    if (invalidElement(g)) throw new Error(`SVG has invalid element: ${invalidElement(g)}. Run svg tests for more details.`);

    if (g.path) {
      collectPaths(g.path, pathData);
    }

    if (g.g) {
      collectPathsFromGroup(g.g, pathData);
    }

  });
}

module.exports = {
  collectPaths: collectPaths,
  collectPathsFromGroup: collectPathsFromGroup,
  invalidElement: invalidElement
};
