import React from 'react';
import { Navigation } from './navigation';

class Page extends React.Component {
  render() {
    return (
      <div>
        <Navigation navItems={this.props.navItems} />
        <div className='mb40 ml200 limiter'>{this.props.children}</div>
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
