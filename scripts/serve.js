'use strict';

const express = require('express');
const path = require('path');
const timelog = require('./timelog');
const renderSite = require('./render-site');
const processCss = require('./process-css');

const app = express();

app.use(express.static(path.join(__dirname, '../_site')));
const port = process.env.PORT || 9967;
app.listen(port, () => timelog(`Assembly app running at localhost:${port}`));

processCss()
  .then(() => renderSite())
  .catch((err) => console.error(err));
