import React from 'react';
import documentationCss from 'documentation-css';
import { Page } from './page';
import { Documentation } from './documentation/documentation';
import { Home } from './home';
import { Icons } from './icons';
import { Catalog } from './catalog';
import { LayoutScales } from './layout_scales';
import fs from 'fs';
import path from 'path';
import { orderSections } from './order-sections';

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
  },
  {
    name: 'Documentation',
    route: '/documentation/'
  },
  {
    name: 'Icons',
    route: '/icons/'
  },
  {
    name: 'Catalog',
    route: '/catalog/'
  },
  {
    name: 'Layout Scales',
    route: '/layout-scales/'
  }
];

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
      case 'Icons':
        r.component = (
          <Page navData={navData}>
            <Icons {...props} />
          </Page>
        );
        break;
      case 'Layout Scales':
        r.component = (
          <Page navData={navData}>
            <LayoutScales {...props} />
          </Page>
        );
        break;
      case 'Catalog': {

        const sections = [
          'Typography',
          'Grids',
          'Tables',
          'Lists',
          'Links',
          'Buttons',
          'Pills',
          'Inputs',
          'Textareas',
          'Selects',
          'Ranges',
          'Toggles',
          'Switches',
          'Checkboxes',
          'Radios',
          'Triangles',
          'Miscellaneous'
        ];

        const entries = [];

        sections.forEach((s) => {
          entries.push({
            name: s,
            route: '#' + s,
            items: []
          });
        });

        const variationNav = navData.items.find((item) => item.name === 'Catalog');
        variationNav.items = entries;

        r.component = (
          <Page navData={navData}>
            <Catalog {...props} />
          </Page>
        );
        break;
      }
      default:
        console.error(r.name + ' has no matching component.');
        break;
    }

    return r;

  });

  return routesWithComponents;
}

export { buildRoutes };
