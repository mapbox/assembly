#!/usr/bin/env node
'use strict';

const React = require('react');
const documentationCss = require('documentation-css');
const { Contents } = require('./documentation/lib/contents');
const { Home } = require('./home');
const { Examples } = require('./examples');
const fs = require('fs');
const path = require('path');

/*
 * To add pages to the site, add an entry to the routes array with
 * three properties:
 *
 * - name: corresponds to the name of the page in the sidebar
 * - component: a react component that contains the contents of the page
 * - route: where the page should be accessed from the browser.
 */
function routes() {
  const assemblyCss = path.join(__dirname, '../dist/assembly.css');
  // It's a little silly to load the css file every time this is used...
  const entryContent = fs.readFileSync(assemblyCss, 'utf8');
  return [{
    name: 'Home',
    component: <Home />,
    route: ''
  }, {
    name: 'Documentation',
    component: <Contents
      entries={documentationCss.extract([{
        contents: entryContent,
        path: assemblyCss
      }])} />,
    route: 'documentation/'
  }, {
    name: 'Examples',
    component: <Examples />,
    route: 'examples/'
  }];
}

module.exports = routes;
