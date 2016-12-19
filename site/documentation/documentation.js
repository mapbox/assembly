import React from 'react';
import { Entry } from './entry';
import { Heading } from './heading';
import { orderSections } from '../order-sections';

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

    orderSections(props.documentationData).forEach((entry) => addEntryAndMembers(entry, 1));

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
