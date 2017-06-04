import React from 'react';
import { Navigation } from './navigation';

class Page extends React.Component {
  render() {
    return (
      <div>
        <div className='scroll-auto viewport-full-mm w180-mm fixed-mm top left flex-parent-mm flex-parent--stretch-cross-mm'>
          <Navigation navData={this.props.navData} />
        </div>
        <div className='ml180-mm limiter w-auto pl60-mm pr60-mm mb60 mt24'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  children: React.PropTypes.node.isRequired,
  navData: React.PropTypes.object.isRequired
};


export { Page };
