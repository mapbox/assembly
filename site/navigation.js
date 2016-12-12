import React from 'react';

/*
 * Can't import routes() directly because it would be a
 * circular dependency.
 */
class Navigation extends React.Component {
  render() {
    const { props } = this;

    let secondaryEls;
    if (props.navItems.secondary) {
      secondaryEls = props.navItems.secondary.map((r) =>
        <a key={r.name} className='block txt-small' href={r.route}>{r.name}</a>
      );
    }

    const navEls = props.navItems.main.map((r) =>
      <div key={r.name}>
        <a className={`block ${r.name === props.navItems.active && 'is-active'}`} href={r.route}>{r.name}</a>
        {r.name === props.navItems.active ? secondaryEls : ''}
      </div>
    );

    return (<div className='fixed top left'>
      <div className='txt-medium txt-strong mb20'>Decorator</div>
      {navEls}
    </div>);
  }
}

Navigation.propTypes = {
  navItems: React.PropTypes.shape({
    main: React.PropTypes.array.isRequired,
    secondary: React.PropTypes.array,
    active: React.PropTypes.string
  }).isRequired
};

export { Navigation };
