'use strict';

function mediaVariant() {
  return {
    name: 'assembly-media',
    match(matcher) {
      const found = matcher.match(/^(.*)-m(m|l|xl)$/);
      if (!found) return;
      return {
        matcher: found[1],
        parent: `@media (--${found[2]}-screen)`
      };
    }
  };
}

module.exports = { mediaVariant };
