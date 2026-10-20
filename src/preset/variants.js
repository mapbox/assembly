'use strict';

const { indexBaseClasses, baseClassEntries } = require('./base-classes');

const BREAKPOINT_ORDER = { m: 1, l: 2, xl: 3 };
// Larger than any breakpoint sum so every dark block follows the light ones.
const DARK_ORDER = 10;
const DARK_QUERY = '(prefers-color-scheme: dark)';
const DARK_PREFIX = 'dark:';
const BASE_CLASS_PREFIX = '$base:';

// Stacked variants narrow an earlier media query instead of replacing it.
// A lone breakpoint leaves `parentOrder` unset so the prebuilt stylesheet
// keeps UnoCSS's default media order.
function mergeMediaQuery(query, order, { standaloneOrder }) {
  return (input, next) => {
    if (!input.parent) {
      return next(
        Object.assign({}, input, {
          parent: `@media ${query}`,
          parentOrder: standaloneOrder ? order : input.parentOrder
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
          BREAKPOINT_ORDER[found[2]],
          { standaloneOrder: false }
        )
      };
    }
  };
}

// The `$base:` matcher lets `darkBaseClassRule` handle classes from base.css.
function darkVariant() {
  const handle = mergeMediaQuery(DARK_QUERY, DARK_ORDER, {
    standaloneOrder: true
  });
  return {
    name: 'assembly-dark',
    match(matcher) {
      if (!matcher.startsWith(DARK_PREFIX)) return;
      const name = matcher.slice(DARK_PREFIX.length);
      return [
        { matcher: name, handle, dark: true },
        { matcher: BASE_CLASS_PREFIX + name, handle, dark: true }
      ];
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
