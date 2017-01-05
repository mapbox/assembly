import React from 'react';
import { Logo } from './logo';

class Navigation extends React.Component {
  render() {
    const { props } = this;

    function listNestedMembers(items, isDoc, level) {
      level = level || 0;
      if (!items || items.length === 0) return null;
      return items.map((member) => {
        let linkContainerClasses, style;
        let linkClasses = 'color-blue-on-hover relative mr12 mr0-mm pb3 txt-s';
        linkClasses += ` ml${6 * (level + 1)}-mm`;
        if (member.name === props.navData.active) {
          linkClasses += ' is-active';
        }
        if (level === 0 && isDoc) {
          linkContainerClasses = 'block mt6';
          linkClasses += ' txt-uppercase color-darken50';
          style = { 'letterSpacing': '1px' };
        } else {
          linkContainerClasses = 'inline-block block-mm ';
        }
        const nestedItems = listNestedMembers(member.items, isDoc, level + 1);
        return (
          <div key={member.name} className={linkContainerClasses}>
            <a
              style={style}
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
      const isDoc = r.name === 'Documentation';
      const nestedItems = (showNestedItems) ? null : (
        <div className='mb6 ml12 ml0-mm txt-s'>
          {listNestedMembers(r.items, isDoc)}
        </div>
      );
      return (
        <div key={r.name}>
          <a className={`txt-s txt-bold block color-blue-on-hover mb6 ${r.name === props.navData.active ? 'color-blue' : ''}`} href={`/assembly${r.route}`}>{r.name}</a>
          {nestedItems}
        </div>
      );
    });

    return (
      <div className='flex-parent-mm flex-parent--column-mm w-full'>
        <a href='/assembly/' className='mt24 mb18 mx24 link link--blue block'>
         <Logo className='icon icon--l' />
        </a>
        <div className='flex-child flex-child--grow-mm scroll-auto pr18 pl24'>
          {navEls}
        </div>
        <div className='mt12 mb24 mx24'>
          <a className='color-blue-on-hover txt-s' href='https://github.com/mapbox/assembly/'>
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
