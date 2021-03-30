import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import { Navigation } from './navigation';
import {
  prefixUrl,
  prefixUrlAbsolute
} from '@mapbox/batfish/modules/prefix-url';
import 'highlight.js';

class Page extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Assembly.css</title>
          <meta name="viewport" content="initial-scale=1.0 maximum-scale=1.0" />
          <link
            href={prefixUrl('favicon.ico')}
            rel="icon"
            type="image/x-icon"
          />
          <link rel="canonical" href={prefixUrlAbsolute(this.props.path)} />
        </Helmet>
        <div className="overflow-auto viewport-full-mm w180-mm fixed-mm top left flex-parent-mm flex-parent--stretch-cross-mm">
          <Navigation />
        </div>
        <div className="ml180-mm limiter w-auto pl60-mm pr60-mm mb60 mt24">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  // Should start and end with a slash.
  path: PropTypes.string.isRequired
};

export { Page };
