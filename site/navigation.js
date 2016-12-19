import React from 'react';

class Navigation extends React.Component {
  render() {
    const { props } = this;

    let secondaryEls;
    if (props.navItems.secondary) {
      secondaryEls = <div className='border-l border--2 border--gray-faint mt6 mb6 pl12'>{props.navItems.secondary.map((r) =>
        <a key={r.name} className='inline-block mr6 mr0-mm block-mm txt-link color-blue txt-s' href={r.route}>{r.name}</a>)}
      </div>;
    }

    const navEls = props.navItems.main.map((r) =>
      <div key={r.name}>
        <a className={`block txt-link color-blue ${r.name === props.navItems.active && 'is-active'}`} href={`/assembly${r.route}`}>{r.name}</a>
        {r.name === props.navItems.active ? secondaryEls : ''}
      </div>
    );

    return (<div className='pt48 viewport-full-mm scroll-auto pl24 pr18 w240-mm fixed-mm top left'>
      <div className='txt-m mb12'>Assembly</div>
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
