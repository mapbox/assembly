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
    notFoundPath: path.join(__dirname, './site/pages/404.js'),
    pagesDirectory: path.join(__dirname, './site/pages'),
    siteBasePath: '/assembly/',
    webpackConfigStaticTransform: (webpackConfig) => {
      // We need to ignore the following two files becasue their contents are executed immediately,
      // and they rely on DOM APIs, so the static site renderer chokes on them otherwise.
      webpackConfig.module.rules.unshift({
        test: /copy\.js$|expander\.js$/,
        loader: 'ignore-loader'
      });

      return webpackConfig;
    },
    vendorModules: ['highlight.js']
  };
};
