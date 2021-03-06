import PropTypes from 'prop-types';
import { withLocation } from '@mapbox/batfish/modules/with-location';
import React from 'react';

import { Logo } from './logo';
// eslint-disable-next-line
import navigationData from '../_tmp_assembly/navigation.json';
import pkg from '../package.json';

class Navigation extends React.Component {
  getActivePathname() {
    // Remove the first section of the pathname (`/assembly/foo/` becomes `/foo/`).
    return this.props.location.pathname.replace(/^\/[a-zA-Z0-9-]*/, '');
  }

  render() {
    const { navigationList } = navigationData;
    const activePathname = this.getActivePathname();

    function listNestedMembers(items, isDoc, level) {
      level = level || 0;
      if (!items || items.length === 0) return null;
      return items.map(member => {
        let linkContainerClasses;
        let linkClasses = 'color-blue-on-hover relative mr12 mr0-mm pb3 txt-s';
        linkClasses += ` ml${6 * (level + 1)}-mm`;
        if (member.route === activePathname) {
          linkClasses += ' is-active';
        }
        if (level === 0 && isDoc) {
          linkContainerClasses = 'block mt6';
          linkClasses += ' txt-uppercase color-darken50';
        } else {
          linkContainerClasses = 'inline-block block-mm ';
        }
        const nestedItems = listNestedMembers(member.items, isDoc, level + 1);
        const href = member.route.startsWith('#')
          ? member.route
          : `/assembly${member.route}`;

        return (
          <div key={member.name} className={linkContainerClasses}>
            <a className={linkClasses} href={href}>
              {member.name}
            </a>
            {nestedItems}
          </div>
        );
      });
    }

    const navEls = navigationList.map(r => {
      const hideNestedItems =
        activePathname !== r.route ||
        r.items === undefined ||
        r.items.length === 0;

      const isDoc = r.name === 'Documentation';
      const nestedItems = hideNestedItems ? null : (
        <div className="mb6 ml12 ml0-mm txt-s">
          {listNestedMembers(r.items, isDoc)}
        </div>
      );
      return (
        <div key={r.name}>
          <a
            className={`txt-s txt-bold block color-blue-on-hover mb6 ${
              activePathname === r.route ? 'color-blue' : ''
            }`}
            href={`/assembly${r.route}`}
          >
            {r.name}
          </a>
          {nestedItems}
        </div>
      );
    });

    return (
      <div className="flex-mm flex--column-mm w-full">
        <div className="flex hmin60 mt24 mb18 mx24">
          <a
            href="/assembly/"
            className="flex-child-grow link link--blue block"
          >
            <Logo className="icon w36 h36" />
          </a>
          <div className="txt-s color-darken50">v{pkg.version}</div>
        </div>
        <div className="flex-child-grow-mm overflow-auto scroll-styled pr18 pl24">
          {navEls}
        </div>
        <div className="mt12 mb24 mx24">
          <a
            className="color-blue-on-hover txt-s flex flex--center-cross"
            href="https://github.com/mapbox/assembly/"
          >
            <svg className="icon txt-m">
              <use xlinkHref="#icon-github" />
            </svg>
            <div className="ml6">View on GitHub</div>
          </a>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  navData: PropTypes.shape({
    items: PropTypes.array,
    active: PropTypes.string
  })
};

Navigation = withLocation(Navigation); // eslint-disable-line

export { Navigation };
