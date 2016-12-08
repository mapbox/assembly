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
    function addEntryAndMembers(entry, level) {
      if (entry.type === 'section') {
        entryEls.push(
          <Heading
            key={entryEls.length + 1}
            level={level}
            text={entry.parsedComment.description}
          />
        );
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
    props.entries.map((entry) => addEntryAndMembers(entry, 1));

    return (
      <div style={{ padding: '0 40px' }}>
        {entryEls}
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
