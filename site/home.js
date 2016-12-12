import React from 'react';
import { Navigation } from './shared/navigation';

class Home extends React.Component {
  render() {
    return (<div className='limiter'>
      <Navigation navItems={this.props.navItems} />
      Home page.
    </div>);
  }
}

Home.propTypes = {
  navItems: React.PropTypes.shape({
    main: React.PropTypes.array.isRequired,
    secondary: React.PropTypes.array,
    active: React.PropTypes.string
  }).isRequired
};

export { Home };
