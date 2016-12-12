#!/usr/bin/env node

/* eslint-disable */
'use strict';

const React = require('react');
const documentationCss = require('documentation-css');
const { Documentation } = require('./documentation/documentation');
const { Home } = require('./home');
const { Examples } = require('./examples');
const fs = require('fs');
const path = require('path');

/*
 * To add pages to the site, we pass a routes array with
 * three properties to our render script:
 *
 * - name: corresponds to the name of the page in the sidebar
 * - route: where the page should be accessed from the browser.
 * - component: a react component that contains the contents of the page
 *
 * Name and route must be added to the below array. Component is added by the buildRoutes function.
 */
const routes = [
  {
    name: 'Home',
    route: '/'
  }, {
    name: 'Documentation',
    route: '/documentation/'
  }, {
    name: 'Examples',
    route: '/examples/'
  }];

function buildRoutes() {

  let props = {
    navItems: {
      main: routes,
      secondary: null,
      active: null
    }
  };

  const routesWithComponents = routes.map(r => {
    // set current route to active.
    props.navItems.active = r.name;

    // Add component and one-off props for components.
    switch (r.name) {
      case 'Documentation':
        const assemblyCss = path.join(__dirname, '../dist/assembly.css');
        const entryContent = fs.readFileSync(assemblyCss, 'utf8');
        const documentationData = documentationCss.extract([{
          contents: entryContent,
          path: assemblyCss
        }]);

        props.documentationData = documentationData;
        props.navItems.secondary = [];

        function buildSecondaryNav(entry) {
          if (entry.type === 'section') {
            props.navItems.secondary.push({
              name: entry.title,
              route: '#' + entry.title.replace(/\s+/g, '-')
            });
            entry.members.forEach((member) => buildSecondaryNav(member));
          }
        }
        documentationData.forEach((entry) => buildSecondaryNav(entry));

        r.component = <Documentation {...props} />;
        break;
      case 'Home':
        r.component = <Home {...props} />;
        break;
      case 'Examples':
        r.component = <Examples {...props} />;
        break;
      default:
        console.err(r.name + ' has no matching component.');
        break;
    }

    return r;

  });

  return routesWithComponents;

}

module.exports = buildRoutes;
