'use strict';

const express = require('express');
const path = require('path');
const timelog = require('./timelog');
const renderSite = require('./render-site');
const processCss = require('./process-css');
const copyAssets = require('./copy-assets');

const app = express();

app.use('/assembly', express.static(path.join(__dirname, '../dist')));
const port = process.env.PORT || 9967;

processCss()
  .then(() => {
    return Promise.all([renderSite(), copyAssets()]);
  })
  .then(() => {
    return new Promise((resolve, reject) => {
      app.listen(port, (err) => {
        if (err) return reject(err);
        console.log('==================================================');
        timelog(`Assembly app running at localhost:${port}`);
        console.log('==================================================');
        resolve();
      });
    });
  })
  .catch((err) => console.error(err.stack));
