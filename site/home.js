import React from 'react';
import { Navigation } from './shared/navigation';

class Home extends React.Component {
  render() {
    return (<div className='docs-container'>
      <Navigation />
      Home page.
    </div>);
  }
}

export { Home };
