'use strict';

const documentationCss = require('documentation-css');
const fs = require('fs');
const pify = require('pify');
const path = require('path');
const mkdirp = require('mkdirp');
const globby = require('globby');
const orderSections = require('./order-sections');
const timelog = require('./timelog');

/*
 * To add pages to the site, we pass a routes array with
 * two properties to our render script:
 *
 * - name: corresponds to the name of the page in the sidebar
 * - route: where the page should be accessed from the browser.
 */
const routes = [
  {
    name: 'Home',
    route: '/'
  },
  {
    name: 'Documentation',
    route: '/documentation/',
    items: []
  },
  {
    name: 'Examples',
    route: '/examples/',
    items: [
      {
        name: 'Badges',
        route: '/examples/badges/'
      },
      {
        name: 'Inputs',
        route: '/examples/inputs/'
      },
      {
        name: 'Legends',
        route: '/examples/legends/'
      },
      {
        name: 'Modal',
        route: '/examples/modal/'
      },
      {
        name: 'Navigation',
        route: '/examples/navigation/'
      },
      {
        name: 'Progress bars',
        route: '/examples/progress-bars/'
      },
      {
        name: 'Sidebar apps',
        route: '/examples/sidebar-apps/'
      },
      {
        name: 'Equal-height columns',
        route: '/examples/equal-height-columns/'
      },
      {
        name: 'Tile layout',
        route: '/examples/tile-layout/'
      },
      {
        name: 'Tooltips',
        route: '/examples/tooltips/'
      },
      {
        name: 'Spinner',
        route: '/examples/spinner/'
      }
    ]
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

function createNavigationTree() {
  return routes.reduce((memo, r) => {
    const props = {};

    // Add component and one-off props for components.
    switch (r.name) {
      case 'Documentation': {
        const cssFilePaths = globby.sync(path.join(__dirname, '../src/*.css'));
        const documentationData = documentationCss
          .extract(
            cssFilePaths.map(filePath => {
              return {
                contents: fs.readFileSync(filePath, 'utf8'),
                path: filePath
              };
            })
          )
          .map(function stripUnusedKeys(obj) {
            delete obj.node;

            // Remove all parsedComment.tags except where the tag's title is `selectors`.
            if (obj.parsedComment && obj.parsedComment.tags) {
              obj.parsedComment.tags = obj.parsedComment.tags.filter(tag => {
                return tag.title === 'selectors';
              });
            }

            // Remove parsedComment.source.column
            if (obj.parsedComment && obj.parsedComment.source) {
              delete obj.parsedComment.source.column;

              // Convert absolute paths to just the filename.
              if (obj.parsedComment.source.filename) {
                obj.parsedComment.source.filename = path.basename(
                  obj.parsedComment.source.filename
                );
              }
            }

            // Remove everything except referencedSource.selector.
            if (obj.referencedSource) {
              delete obj.referencedSource.raws;
              delete obj.referencedSource.type;
              delete obj.referencedSource.nodes;
              delete obj.referencedSource.source;
              delete obj.referencedSource.lastEach;
              delete obj.referencedSource.indexes;
            }

            // Remove unused keys from all nested `members`.
            if (obj.members) {
              obj.members = obj.members.map(stripUnusedKeys);
            }

            return obj;
          });

        // Recursively & hierarchically add all entry members to the navigation
        const addEntryToNav = (entry, parent) => {
          if (entry.type !== 'section') return;
          parent = parent || r;
          const memberNavDataItem = {
            name: entry.title,
            route: '#' + entry.title.replace(/\s+/g, '-'),
            items: []
          };
          parent.items.push(memberNavDataItem);
          entry.members.forEach(member =>
            addEntryToNav(member, memberNavDataItem)
          );
        };

        orderSections(documentationData).forEach(entry => addEntryToNav(entry));

        props.documentationData = documentationData;

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
        r.items = sections.map(item => {
          return {
            name: item,
            route: '#' + item,
            items: []
          };
        });

        break;
      }
    }

    r.props = props;
    memo.push(r);
    return memo;
  }, []);
}

function buildNavigationJSON(options) {
  if (options == null) {
    options = {};
  }

  if (!options.quiet) timelog('Building navigation JSON');
  const outdir = options.outdir || path.join(__dirname, '../_tmp_assembly');
  const outfile = options.outfile || 'navigation.json';

  const navigationList = createNavigationTree();

  return pify(mkdirp)(outdir)
    .then(() => {
      return pify(fs.writeFile)(
        path.join(outdir, outfile),
        JSON.stringify({ navigationList }),
        'utf8'
      );
    })
    .then(() => timelog('Done building navigation JSON'));
}

module.exports = buildNavigationJSON;

if (require.main === module) {
  buildNavigationJSON().catch(err => console.error(err.stack));
}
