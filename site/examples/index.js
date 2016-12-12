import React from 'react';
import { Navigation } from '../shared/navigation';

class Examples extends React.Component {
  render() {
    return (<div className='docs-container'>
      <Navigation navItems={this.props.navItems} />
      Home
    </div>);
  }
}

Examples.propTypes = {
  navItems: React.PropTypes.shape({
    main: React.PropTypes.array.isRequired,
    secondary: React.PropTypes.array,
    active: React.PropTypes.string
  }).isRequired
};


export { Examples };
