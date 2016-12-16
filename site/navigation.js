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
        <a key={r.name} className='txt-link color-blue block txt-s' href={r.route}>{r.name}</a>
      );
    }

    const navEls = props.navItems.main.map((r) =>
      <div key={r.name}>
        <a className={`block txt-link color-blue ${r.name === props.navItems.active && 'is-active'}`} href={`/assembly${r.route}`}>{r.name}</a>
        <div className='pl10'>{r.name === props.navItems.active ? secondaryEls : ''}</div>
      </div>
    );

    return (<div className='mt40 pl20 pr20 w200 fixed top left'>
      <div className='txt-m txt-bold mb20'>Assembly</div>
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
