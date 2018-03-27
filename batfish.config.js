'use strict';

const path = require('path');
/* eslint-disable node/no-missing-require */
const navigationStructure = require('./_tmp_assembly/navigation.json');
/* eslint-enable node/no-missing-require */

module.exports = () => {
  return {
    siteBasePath: '/assembly/',
    siteOrigin: 'https://www.mapbox.com',
    stylesheets: [
      path.join(__dirname, './site/css/hljs.css'),
      path.join(__dirname, './dist/assembly.css')
    ],
    dataSelectors: {
      examplesSubNavigationList: () => {
        return navigationStructure.navigationList.find(
          routeConfig => routeConfig.name === 'Examples'
        ).items;
      },
      documentationData: () => {
        return navigationStructure.navigationList.find(
          routeConfig => routeConfig.name === 'Documentation'
        ).props.documentationData;
      }
    },
    fileLoaderExtensions: extensions => extensions.concat(['svg']),
    pagesDirectory: path.join(__dirname, './site/pages'),
    webpackStaticIgnore: [/expander\.js$/, /copy\.js$/],
    vendorModules: ['highlight.js'],
    applicationWrapperPath: path.join(
      __dirname,
      './site/application_wrapper.js'
    ),
    staticHtmlInlineDeferCss: false
  };
};
