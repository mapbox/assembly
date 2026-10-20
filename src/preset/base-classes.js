'use strict';

const postcss = require('postcss');

const CLASS_PATTERN = /\.([A-Za-z0-9_-]+)/g;
const NOT_PATTERN = /:not\([^)]*\)/g;

function classPattern(name) {
  return new RegExp(`\\.${name}(?![A-Za-z0-9_-])`, 'g');
}

/**
 * Index base.css rules by class so a variant can re-emit component classes
 * that have no UnoCSS rule. Classes inside `:not()` don't select the element.
 *
 * @returns {Map<string, Array<{ selector: string, entries: Array<[string, string]> }>>}
 */
function indexBaseClasses(css) {
  const index = new Map();

  postcss.parse(css).each(node => {
    if (node.type !== 'rule') return;
    const entries = [];
    node.each(child => {
      if (child.type !== 'decl') return;
      entries.push([
        child.prop,
        child.important ? `${child.value} !important` : child.value
      ]);
    });

    node.selectors.forEach(selector => {
      const names = new Set(
        Array.from(
          selector.replace(NOT_PATTERN, '').matchAll(CLASS_PATTERN),
          match => match[1]
        )
      );
      names.forEach(name => {
        if (!index.has(name)) index.set(name, []);
        index.get(name).push({ selector, entries });
      });
    });
  });

  return index;
}

// Swap `name` for the variant's selector in each of its base.css rules.
function baseClassEntries(index, name, symbols) {
  const rules = index.get(name);
  if (!rules) return;
  const pattern = classPattern(name);
  return rules.map(({ selector, entries }) => [
    [symbols.selector, s => selector.replace(pattern, () => s)],
    ...entries
  ]);
}

module.exports = { indexBaseClasses, baseClassEntries };
