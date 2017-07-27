'use strict';

const path = require('path');
const navigationStructure = require('./_tmp_assembly/navigation.json');

module.exports = () => {
  return {
    dataSelectors: {
      examplesSubNavigationList: () => {
        return navigationStructure
          .navigationList
          .find((routeConfig) => routeConfig.name === 'Examples')
          .items;
      },
      documentationData: () => {
        return navigationStructure
          .navigationList
          .find((routeConfig) => routeConfig.name === 'Documentation' )
          .props
          .documentationData;
      }
    },
    fileLoaderExtensions: (extensions) => extensions.concat(['svg']),
    inlineJs: [{ filename: path.join(__dirname, './dist/assembly.js') }],
    pagesDirectory: path.join(__dirname, './site/pages'),
    siteBasePath: '/assembly/',
    vendorModules: ['highlight.js']
  };
};
