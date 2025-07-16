'use strict';
const crypto = require('crypto');
// MD4 algorithm is not available anymore in NodeJS 17+ (because of lib SSL 3).
// https://stackoverflow.com/a/72219174/1447466
// config.output.hashFunction = 'md5'
// is supposed to disables MD4, but it doesn't work correctly until
// https://github.com/webpack/webpack/pull/14306
try {
  crypto.createHash('md4');
} catch (e) {
  let printed = false;
  const print = alg => {
    if (alg !== 'md4') return;
    if (printed) return;
    printed = true;
    console.warn('MD4 is unsupported, replacing it with MD5');
  };
  const createHash = crypto.createHash;
  crypto.createHash = (alg, ...params) => {
    print(alg);
    return createHash(alg === 'md4' ? 'md5' : alg, ...params);
  };
}
