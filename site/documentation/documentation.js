import React from 'react';
import _ from 'lodash';
import { Entry } from './entry';
import { Heading } from './heading';

class Documentation extends React.Component {

  render() {
    const { props } = this;

    const entryEls = [];
    const navEls = [];
    function addEntryAndMembers(entry, level) {
      if (entry.type === 'section') {
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
          href={'#' + entry.title.replace(/\s+/g, '-')}>
            {entry.title}
          </a>);

        const sortedMembers = _.sortBy(entry.members, 'title');

        sortedMembers.forEach((member) => addEntryAndMembers(member, level + 1));
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

    const sortedEntries = _.sortBy(props.documentationData, 'title');

    sortedEntries.forEach((entry) => addEntryAndMembers(entry, 1));

    return (
      <div>
        {entryEls}
      </div>
    );
  }
}

Documentation.propTypes = {
  documentationData: React.PropTypes.arrayOf(React.PropTypes.shape({
    parsedComment: React.PropTypes.shape({
      description: React.PropTypes.string.isRequired,
    }).isRequired,
    members: React.PropTypes.arrayOf(React.PropTypes.object)
  })).isRequired
};

export { Documentation };
