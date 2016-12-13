import React from 'react';
import { Navigation } from './navigation';

class Page extends React.Component {
  render() {
    return (
      <div className='docs-container mb60'>
        <Navigation navItems={this.props.navItems} />
        {this.props.children}
      </div>
    );
  }
}

Page.propTypes = {
  children: React.PropTypes.node.isRequired,
  navItems: React.PropTypes.shape({
    main: React.PropTypes.array.isRequired,
    secondary: React.PropTypes.array,
    active: React.PropTypes.string
  }).isRequired
};


export { Page };
