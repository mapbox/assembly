import React from 'react';
import { Entry } from './entry';
import { Heading } from './heading';
import { hljsStyle } from './hljs-style';
import { themeStyle } from './theme-style';
import { addStyle } from './add-style';

class Contents extends React.Component {
  componentWillMount() {
    addStyle(this.props.hljsStyle + '\n' + this.props.themeStyle);
  }

  render() {
    const { props } = this;

    const entryEls = [];
    const navEls = [];
    function addEntryAndMembers(entry, level) {
      if (entry.type === 'section') {
        console.log(entry);
        entryEls.push(
          <Heading
            key={entryEls.length + 1}
            level={level}
            title={entry.title}
            description={entry.parsedComment.description}
          />
        );

        navEls.push(<a
          key={entryEls.length + 1}
          className='docs-nav-item'
          href={'#' + entry.title.replace(/\s+/g, '-')}>
            {entry.title}
          </a>);

        entry.members.forEach((member) => addEntryAndMembers(member, level + 1));
      } else {
        entryEls.push(
          <Entry
            key={entryEls.length + 1}
            level={level}
            {...entry}
          />
        );
      }
    }

    console.log(props.entries);
    props.entries.map((entry) => addEntryAndMembers(entry, 1));

    return (
      <div>
        <div className='docs-sidebar'>
          <div className='docs-logo'>Decorator</div>
          <div className='docs-nav'>{navEls}</div>
        </div>
        <div className='docs-container'>
          {entryEls}
        </div>
      </div>
    );
  }
}

Contents.propTypes = {
  entries: React.PropTypes.arrayOf(React.PropTypes.shape({
    parsedComment: React.PropTypes.shape({
      description: React.PropTypes.string.isRequired,
    }).isRequired,
    members: React.PropTypes.arrayOf(React.PropTypes.object)
  })).isRequired,
  hljsStyle: React.PropTypes.string.isRequired
};

Contents.defaultProps = {
  hljsStyle,
  themeStyle
};

export { Contents };
