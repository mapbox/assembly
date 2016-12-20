import React from 'react';
import { Navigation } from './navigation';

class Page extends React.Component {
  render() {
    return (
      <div>
        <div className='pt48 viewport-full-mm scroll-auto pl24 pr18 w240-mm fixed-mm top left'>
          <Navigation navData={this.props.navData} />
        </div>
        <div className='mb24 ml240-mm pl24 pr24 wmax960'>{this.props.children}</div>
      </div>
    );
  }
}

Page.propTypes = {
  children: React.PropTypes.node.isRequired,
  navData: React.PropTypes.object.isRequired
};


export { Page };
