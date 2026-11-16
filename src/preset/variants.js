'use strict';

const { indexBaseClasses, baseClassEntries } = require('./base-classes');

const BREAKPOINT_ORDER = { m: 1, l: 2, xl: 3 };
// Larger than any breakpoint sum so every dark block follows the light ones.
const DARK_ORDER = 10;
const DARK_QUERY = '(prefers-color-scheme: dark)';
const LIGHT_QUERY = '(prefers-color-scheme: light)';
const ESCAPED_DARK_CLASS = /\.dark\\:(?:\\.|[A-Za-z0-9_-])+/g;
const DARK_PREFIX = 'dark:';
const BASE_CLASS_PREFIX = '$base:';

// Stacked variants narrow an earlier media query instead of replacing it.
function mergeMediaQuery(query, order) {
  return (input, next) => {
    if (!input.parent) {
      return next(
        Object.assign({}, input, {
          parent: `@media ${query}`,
          parentOrder: order
        })
      );
    }
    return next(
      Object.assign({}, input, {
        parent: input.parent.replace(/^@media /, `@media ${query} and `),
        parentOrder: (input.parentOrder || 0) + order
      })
    );
  };
}

function mediaVariant() {
  return {
    name: 'assembly-media',
    match(matcher) {
      const found = matcher.match(/^(.*)-m(m|l|xl)$/);
      if (!found) return;
      return {
        matcher: found[1],
        handle: mergeMediaQuery(
          `(--${found[2]}-screen)`,
          BREAKPOINT_ORDER[found[2]]
        )
      };
    }
  };
}

// `:where()` scopes to the theme attribute without adding specificity, so dark
// rules still win by source order. It follows the class token rather than the
// whole selector so it reaches every selector in a list and stays ahead of
// pseudo-elements. Forced dark sits under the light query so the two blocks
// never both apply.
const THEME_SCOPES = [
  [DARK_QUERY, ":root:not([data-theme='light'])"],
  [LIGHT_QUERY, ":root[data-theme='dark']"]
].map(([query, root]) => ({
  selector: s =>
    s.replace(
      ESCAPED_DARK_CLASS,
      match => `${match}:where(${root} *, ${root})`
    ),
  handle: mergeMediaQuery(query, DARK_ORDER),
  dark: true
}));

// The `$base:` matcher lets `darkBaseClassRule` handle classes from base.css.
function darkVariant() {
  return {
    name: 'assembly-dark',
    match(matcher) {
      if (!matcher.startsWith(DARK_PREFIX)) return;
      const name = matcher.slice(DARK_PREFIX.length);
      return [name, BASE_CLASS_PREFIX + name].flatMap(target =>
        THEME_SCOPES.map(scope => Object.assign({ matcher: target }, scope))
      );
    }
  };
}

function darkBaseClassRule(baseCss) {
  const index = indexBaseClasses(baseCss);
  return [
    /^\$base:(.+)$/,
    ([, name], { symbols, variantHandlers }) => {
      if (!variantHandlers.some(handler => handler.dark)) return;
      return baseClassEntries(index, name, symbols);
    },
    { layer: 'preflights' }
  ];
}

module.exports = { mediaVariant, darkVariant, darkBaseClassRule };
