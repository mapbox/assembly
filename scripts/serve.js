'use strict';

const express = require('express');
const path = require('path');
const timelog = require('./timelog');
const renderSite = require('./render-site');
const processCss = require('./process-css');
const copyAssets = require('./copy-assets');

const app = express();

app.use(express.static(path.join(__dirname, '../build')));
const port = process.env.PORT || 9967;
app.listen(port, () => timelog(`Assembly app running at localhost:${port}`));

processCss()
  .then(() => {
    return Promise.all([renderSite(), copyAssets()]);
  })
  .catch((err) => console.error(err));
