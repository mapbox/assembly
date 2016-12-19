import React from 'react';
import { Navigation } from './navigation';

class Page extends React.Component {
  render() {
    return (
      <div className='flex-parent-mm flex-parent--center-main-mm'>
        <Navigation navItems={this.props.navItems} />
        <div className='mb24 ml240-mm pl24 pr24 wmax960'>{this.props.children}</div>
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
