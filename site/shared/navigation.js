import React from 'react';

/*
 * Can't import routes() directly because it would be a
 * circular dependency.
 */
const routes = [{
  name: 'Home',
  route: ''
}, {
  name: 'Documentation',
  route: 'documentation/'
}, {
  name: 'Examples',
  route: 'examples/'
}];

class Navigation extends React.Component {
  render() {
    const NavEls = routes.map(r =>
      // TODO: Add a prop that sticks subnav for documentation in here.
      <a key={r.name} className='block' href={r.route}>{r.name}</a>
    );

    return (<div className='fixed top left'>
      {NavEls}
    </div>);
  }
}

export { Navigation };
