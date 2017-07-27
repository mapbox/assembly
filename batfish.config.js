'use strict';

const path = require('path');
/* eslint-disable node/no-missing-require */
const navigationStructure = require('./_tmp_assembly/navigation.json');
/* eslint-enable node/no-missing-require */

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
    webpackStaticIgnore: [/expander\.js$|copy\.js$/],
    vendorModules: ['highlight.js']
  };
};
