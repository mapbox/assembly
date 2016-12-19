import React from 'react';
import { Navigation } from './navigation';

class Page extends React.Component {
  render() {
    return (
      <div className='flex-parent-mm flex-parent--center-main-mm'>
        <Navigation navData={this.props.navData} />
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
