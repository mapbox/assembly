#!/usr/bin/env node

const React = require('react');
const documentationCss = require('documentation-css');
const { Page } = require('./page');
const { Documentation } = require('./documentation/documentation');
const { Home } = require('./home');
const { Icons } = require('./icons');
const { Examples } = require('./examples');
const { Debug } = require('./debug');
const fs = require('fs');
const path = require('path');
const { orderSections } = require('./order-sections');

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
  }, {
    name: 'Icons',
    route: '/icons/'
  }, {
    name: 'Debug',
    route: '/debug/'
  }];

function buildRoutes() {


  const routesWithComponents = routes.map((r) => {
    const navData = {
      items: [],
      // set current route to active.
      active: r.name
    };

    routes.forEach((r) => {
      const navDataItem = Object.assign({}, r, { items: [] });
      navData.items.push(navDataItem);
    });

    const props = {};

    // Add component and one-off props for components.
    switch (r.name) {
      case 'Documentation': {
        const assemblyCss = path.join(__dirname, '../dist/assembly.css');
        let entryContent;
        try {
          entryContent = fs.readFileSync(assemblyCss, 'utf8');
        } catch (err) {
          throw new Error('assembly.css must be built');
        }

        const documentationData = documentationCss.extract([{
          contents: entryContent,
          path: assemblyCss
        }]);

        props.documentationData = documentationData;

        // Recursively & hierarchically add all entry members to the navigation
        const addEntryToNav = (entry, parent) => {
          if (entry.type !== 'section') return;
          parent = parent || navData.items.find((member) => member.name === r.name);
          const memberNavDataItem = {
            name: entry.title,
            route: '#' + entry.title.replace(/\s+/g, '-'),
            items: []
          };
          parent.items.push(memberNavDataItem);
          entry.members.forEach((member) => addEntryToNav(member, memberNavDataItem));
        };

        orderSections(documentationData).forEach((entry) => addEntryToNav(entry));

        r.component = (
          <Page navData={navData}>
            <Documentation {...props} />
          </Page>
        );
        break;
      }
      case 'Home':
        r.component = (
          <Page navData={navData}>
            <Home {...props} />
          </Page>
        );
        break;
      case 'Examples':
        r.component = (
          <Page navData={navData}>
            <Examples {...props} />
          </Page>
        );
        break;
      case 'Icons':
        r.component = (
          <Page navData={navData}>
            <Icons {...props} />
          </Page>
        );
        break;
      case 'Debug':
        r.component = (
          <Page navData={navData}>
            <Debug {...props} />
          </Page>
        );
        break;
      default:
        console.error(r.name + ' has no matching component.');
        break;
    }

    return r;

  });

  return routesWithComponents;

}

module.exports = buildRoutes;
