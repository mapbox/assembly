'use strict';

const child_process = require('child_process');
const path = require('path');

function handleError(err) {
  throw err;
}

const nodemonProcess = child_process.spawn('node_modules/.bin/nodemon', [
  '--on-change-only',
  path.join(__dirname, './build-user-assets.js')
]);

nodemonProcess.on('error', handleError);
nodemonProcess.stdout.on('data', data => {
  console.log(data.toString().trim());
});
nodemonProcess.stderr.on('data', data => {
  console.log(data.toString().trim());
});
