'use strict';

const path = require('path');
const child_process = require('child_process');
const browserSync = require('browser-sync');
const timelog = require('./timelog');

const distDir = path.join(__dirname, '../dist');

function handleError(err) {
  throw err;
}

// nodemon handles rebuilding the site, while Browsersync serves and reloads.
// nodemon needs to do the rebuilding because it refreshes the require
// cache, allowing the static generated site to actually change.

const bsServer = browserSync.create();

const nodemonProcess = child_process.spawn('node_modules/.bin/nodemon', [
  path.join(__dirname, './build-site.js')
]);

nodemonProcess.on('error', handleError);
nodemonProcess.stdout.on('data', (data) => {
  console.log(data.toString().trim());
});
nodemonProcess.stderr.on('data', (data) => {
  console.log(data.toString().trim());
});

bsServer.emitter.on('file:reload', () => {
  timelog('Reloading');
});

bsServer.init({
  server: {
    baseDir: distDir,
    routes: {
      '/assembly': distDir
    }
  },
  open: false,
  files: [path.join(distDir, '/**/*')],
  logFileChanges: false,
  reloadDebounce: 300,
  notify: false,
  plugins: [
    {
      module: 'bs-html-injector',
      options: {
        files: [path.join(distDir, '**/*.html')]
      }
    }
  ]
});
