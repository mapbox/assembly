const exampleLinks = [
  { name: 'Badges', href: '/examples/badges' },
  { name: 'Inputs', href: '/examples/inputs' },
  { name: 'Legends', href: '/examples/legends' },
  { name: 'Modal', href: '/examples/modal' },
  { name: 'Navigation', href: '/examples/navigation' },
  { name: 'Progress bars', href: '/examples/progress-bars' },
  { name: 'Sidebar apps', href: '/examples/sidebar-apps' },
  { name: 'Equal-height columns', href: '/examples/equal-height-columns' },
  { name: 'Tooltips', href: '/examples/tooltips' },
  { name: 'Spinner', href: '/examples/spinner' }
];

const catalogLinks = [
  { name: 'Typography', id: 'Typography' },
  { name: 'Grids', id: 'Grids' },
  { name: 'Flexbox', id: 'Flexbox' },
  { name: 'Bleeds', id: 'Bleeds' },
  { name: 'Tables', id: 'Tables' },
  { name: 'Lists', id: 'Lists' },
  { name: 'Links', id: 'Links' },
  { name: 'Buttons', id: 'Buttons' },
  { name: 'Pills', id: 'Pills' },
  { name: 'Inputs', id: 'Inputs' },
  { name: 'Textareas', id: 'Textareas' },
  { name: 'Selects', id: 'Selects' },
  { name: 'Ranges', id: 'Ranges' },
  { name: 'Toggles', id: 'Toggles' },
  { name: 'Switches', id: 'Switches' },
  { name: 'Checkboxes', id: 'Checkboxes' },
  { name: 'Radios', id: 'Radios' },
  { name: 'Triangles', id: 'Triangles' }
];

function docLink(name) {
  return {
    name,
    href: `/documentation/#${name
      .toLowerCase()
      .replace(/&/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')}`
  };
}

function docSection(name, headings = []) {
  return Object.assign(docLink(name), { items: headings.map(docLink) });
}

const nav = [
  {
    name: 'Home',
    href: '/',
    items: [
      { name: 'Getting started', href: '/#getting-started' },
      { name: 'Philosophy', href: '/#philosophy' },
      { name: 'Overview', href: '/#overview' },
      { name: 'Javascript API', href: '/#javascript-api' }
    ]
  },
  {
    name: 'Documentation',
    href: '/documentation/',
    isDoc: true,
    items: [
      docSection('Typography', ['Type basics', 'Type utils', 'Prose']),
      docSection('Layout', [
        'Grid',
        'Display',
        'Positioning',
        'Margins',
        'Padding',
        'Gap',
        'Sizing',
        'Flexbox',
        'Gridbox',
        'Aspect ratio',
        'Object fit',
        'Transforms',
        'Layout utils'
      ]),
      docSection('Theming', [
        'Borders',
        'Border radius',
        'Shadows',
        'Cursors',
        'Opacity'
      ]),
      docSection('Colors', ['Text colors', 'Background colors']),
      docSection('Icons'),
      docSection('Buttons'),
      docSection('Links'),
      docSection('Forms', [
        'Inputs & textareas',
        'Selects',
        'Ranges',
        'Checkboxes',
        'Radio buttons',
        'Switches',
        'Toggle group'
      ]),
      docSection('Tables'),
      docSection('Animations'),
      docSection('Triangles'),
      docSection('Miscellaneous')
    ]
  },
  {
    name: 'Examples',
    href: '/examples/',
    items: exampleLinks
  },
  { name: 'Icons', href: '/icons' },
  {
    name: 'Catalog',
    href: '/catalog',
    items: catalogLinks.map(section => ({
      name: section.name,
      href: `/catalog#${section.id}`
    }))
  },
  { name: 'Layout Scales', href: '/layout-scales' }
];

export { nav, exampleLinks };
