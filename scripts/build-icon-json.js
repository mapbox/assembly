'use strict';

const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const pify = require('pify');
const timelog = require('./timelog');

function buildIconJSON(options) {
  if (options == null) {
    options = {};
  }

  if (!options.quiet) timelog('Building icon JSON');

  const outdir = options.outdir || path.join(__dirname, '../_tmp_assembly');
  const outfile = options.outfile || 'icons.json';
  const icons = fs
    .readdirSync(path.join(__dirname, '../src/svgs'))
    .filter(filename => filename.endsWith('.svg'))
    .map(filename => path.basename(filename, '.svg'));

  return pify(mkdirp)(outdir)
    .then(() => {
      return pify(fs.writeFile)(
        path.join(outdir, outfile),
        JSON.stringify({ icons }),
        'utf8'
      );
    })
    .then(() => timelog('Done building icon JSON'));
}

module.exports = buildIconJSON;

if (require.main === module) {
  buildIconJSON().catch(err => console.error(err.stack));
}
