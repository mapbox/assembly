import React from 'react';

class Navigation extends React.Component {
  render() {
    const { props } = this;

    function listNestedMembers(items, level) {
      level = level || 0;
      if (!items || items.length === 0) return null;
      return items.map((member) => {
        let linkClasses = 'txt-link color-blue mr12 mb6 mb6-mm inline-block block-mm txt-s';
        if (level !== 0) {
          linkClasses += ` ml${12 * level}-mm`;
        }
        if (member.name === props.navData.active) {
          linkClasses += ' is-active';
        }
        if (level === 0) {
          linkClasses += ' txt-bold';
        }
        const nestedItems = listNestedMembers(member.items, level + 1);
        return (
          <div key={member.name} className='inline-block block-mm'>
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

    const navEls = props.navData.items.map((r) => {
      const showNestedItems = r.name !== props.navData.active
        || r.items === undefined
        || r.items.length === 0;
      const nestedItems = (showNestedItems) ? null : (
        <div className='mt6 mb6 txt-s'>
          {listNestedMembers(r.items)}
        </div>
      );
      return (
        <div key={r.name}>
          <a className={`txt-bold block txt-link color-blue ${r.name === props.navData.active && 'is-active'}`} href={`/assembly${r.route}`}>{r.name}</a>
          {nestedItems}
        </div>
      );
    });

    return (<div>
      <div className='txt-m mb12 txt-bold'>Assembly</div>
      {navEls}
    </div>);
  }
}

Navigation.propTypes = {
  navData: React.PropTypes.shape({
    items: React.PropTypes.array.isRequired,
    active: React.PropTypes.string
  }).isRequired
};

export { Navigation };
