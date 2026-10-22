'use strict';

const MEDIA_ORDER = { m: 1, l: 2, xl: 3 };

function mediaVariant() {
  return {
    name: 'assembly-media',
    match(matcher) {
      const found = matcher.match(/^(.*)-m(m|l|xl)$/);
      if (!found) return;
      return {
        matcher: found[1],
        parent: [`@media (--${found[2]}-screen)`, MEDIA_ORDER[found[2]]]
      };
    }
  };
}

module.exports = { mediaVariant };
