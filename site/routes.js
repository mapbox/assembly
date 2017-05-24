import React from 'react';
import documentationCss from 'documentation-css';
import fs from 'fs';
import path from 'path';
import globby from 'globby';
import { orderSections } from './order-sections';
import { Page } from './page';
import { Documentation } from './documentation/documentation';
import { Home } from './home';
import { Icons } from './icons';
import { Catalog } from './catalog';
import { LayoutScales } from './layout_scales';
import { Examples } from './examples';
import { ExampleInputs } from './examples/inputs';
import { ExampleBadges } from './examples/badges';
import { ExampleLegends } from './examples/legends';
import { ExampleModal } from './examples/modal';
import { ExampleNavigation } from './examples/navigation';
import { ExampleProgressBars } from './examples/progress_bars';
import { ExampleSidebarApps } from './examples/sidebar_apps';
import { ExampleEqualHeightColumns } from './examples/equal_height_columns';
import { ExampleTileLayout } from './examples/tile_layout';
import { ExampleTooltips } from './examples/tooltips';
import { ExampleSpinner } from './examples/spinner';

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
    route: '/',
    component: Home
  },
  {
    name: 'Documentation',
    route: '/documentation/',
    component: Documentation
  },
  {
    name: 'Examples',
    route: '/examples/',
    component: Examples,
    children: [{
      name: 'Badges',
      route: '/examples/badges/',
      component: ExampleBadges
    }, {
      name: 'Inputs',
      route: '/examples/inputs/',
      component: ExampleInputs
    }, {
      name: 'Legends',
      route: '/examples/legends/',
      component: ExampleLegends
    }, {
      name: 'Modal',
      route: '/examples/modal/',
      component: ExampleModal
    }, {
      name: 'Navigation',
      route: '/examples/navigation/',
      component: ExampleNavigation
    }, {
      name: 'Progress bars',
      route: '/examples/progress-bars/',
      component: ExampleProgressBars
    }, {
      name: 'Sidebar apps',
      route: '/examples/sidebar-apps/',
      component: ExampleSidebarApps
    }, {
      name: 'Equal-height columns',
      route: '/examples/equal-height-columns/',
      component: ExampleEqualHeightColumns
    }, {
      name: 'Tile layout',
      route: '/examples/tile-layout/',
      component: ExampleTileLayout
    }, {
      name: 'Tooltips',
      route: '/examples/tooltips/',
      component: ExampleTooltips
    }, {
      name: 'Spinner',
      route: '/examples/spinner/',
      component: ExampleSpinner
    }]
  },
  {
    name: 'Icons',
    route: '/icons/',
    component: Icons
  },
  {
    name: 'Catalog',
    route: '/catalog/',
    component: Catalog
  },
  {
    name: 'Layout Scales',
    route: '/layout-scales/',
    component: LayoutScales
  }
];

function buildRoutes() {
  const routesWithComponents = routes.reduce((memo, r) => {
    const navData = {
      items: routes.map((route) => {
        return Object.assign({}, route, { items: [] });
      }),
      active: r.name
    };

    const props = {};

    // Add component and one-off props for components.
    switch (r.name) {
      case 'Documentation': {
        const cssFilePaths = globby.sync(path.join(__dirname, '../src/*.css'));
        const documentationData = documentationCss.extract(cssFilePaths.map((filePath) => {
          return {
            contents: fs.readFileSync(filePath, 'utf8'),
            path: filePath
          };
        }));

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
      case 'Catalog': {

        const sections = [
          'Typography',
          'Grids',
          'Flexbox',
          'Bleeds',
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
          'Icons',
          'Triangles'
        ];

        // Build out secondary navigation
        const navDataWithChildren = Object.assign({}, navData, {
          items: navData.items.map((nav) => {
            if (nav.name === r.name) {
              nav.items = sections.map((item) => {
                return {
                  name: item,
                  route: '#' + item,
                  items: []
                };
              });
            }
            return nav;
          })
        });

        r.component = (
          <Page navData={navDataWithChildren}>
            <r.component {...props} />
          </Page>
        );
        break;
      }
      default:
        if (r.children) props.children = r.children;
        r.component = (
          <Page navData={navData}>
            <r.component {...props} />
          </Page>
        );
        break;
    }

    if (r.children && r.children.length) {
      r.children.map((child) => {

        const navDataWithChildren = Object.assign({}, navData, {
          items: navData.items.map((nav) => {
            if (nav.name === r.name) {
              nav.items = r.children.map((d) => {
                const item = Object.assign({}, d, { items: [] });
                return item;
              });

              nav.active = child.name;
            }
            return nav;
          })
        });

        child.component = (
          <Page navData={navDataWithChildren}>
            <child.component {...props} />
          </Page>
        );

        memo.push(child);
        return child;
      });
    }

    memo.push(r);
    return memo;
  }, []);

  return routesWithComponents;
}

export { buildRoutes };
