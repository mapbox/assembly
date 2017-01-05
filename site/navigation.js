import React from 'react';
import { Logo } from './logo';

class Navigation extends React.Component {
  render() {
    const { props } = this;

    function listNestedMembers(items, level) {
      level = level || 0;
      if (!items || items.length === 0) return null;
      return items.map((member) => {
        let linkContainerClasses;
        let linkClasses = 'color-purple-on-hover relative mr12 mr0-mm pb3 txt-s';
        linkClasses += ` ml${6 * (level + 1)}-mm`;
        if (member.name === props.navData.active) {
          linkClasses += ' is-active';
        }
        if (level === 0) {
          linkContainerClasses = 'block mt6 mt0-mm';
          linkClasses += ' txt-bold';
        } else {
          linkContainerClasses = 'inline-block block-mm ';
        }
        const nestedItems = listNestedMembers(member.items, level + 1);
        return (
          <div key={member.name} className={linkContainerClasses}>
            <a
              className={linkClasses}
              href={member.route}
            >
              {member.name}
            </a>
            {nestedItems}
          </div>
        );
      });
    }

    const filteredNavData = props.navData.items.filter((n) => {
      return n.name !== 'Home';
    });
    const navEls = filteredNavData.map((r) => {
      const showNestedItems = r.name !== props.navData.active
        || r.items === undefined
        || r.items.length === 0;
      const nestedItems = (showNestedItems) ? null : (
        <div className='mb6 ml12 ml0-mm txt-s'>
          {listNestedMembers(r.items)}
        </div>
      );
      return (
        <div key={r.name}>
          <a className={`txt-s txt-bold txt-uppercase block color-purple-on-hover mb6 ${r.name === props.navData.active ? 'color-darken50' : ''}`} href={`/assembly${r.route}`}>{r.name}</a>
          {nestedItems}
        </div>
      );
    });

    return (
      <div className='flex-parent-mm flex-parent--column-mm w-full'>
        <a href='/assembly/' className='mt24 mb18 mx24 hmin48 link link--purple block'>
         <Logo className='icon icon--l' />
        </a>
        <div className='flex-child flex-child--grow-mm scroll-auto pr18 pl24'>
          {navEls}
        </div>
        <div className='mt12 mb24 mx24'>
          <a className='color-purple-on-hover txt-s' href='https://github.com/mapbox/assembly/'>
            <svg
              className='icon'
              dangerouslySetInnerHTML={{ __html: '<use xlink:href="#icon-github"></use>' }}
            />
            <span className='ml6 align-middle'>View on GitHub</span>
          </a>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  navData: React.PropTypes.shape({
    items: React.PropTypes.array.isRequired,
    active: React.PropTypes.string
  }).isRequired
};

export { Navigation };
