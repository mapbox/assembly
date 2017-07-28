/*---
injectedData:
  - documentationData
---*/
import PropTypes from 'prop-types';
import React from 'react';
import { Entry } from '../entry';
import { Heading } from '../heading';
import { Page } from '../page';
import orderSections from '../../scripts/order-sections';

export default class Documentation extends React.Component {
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
            {...entry}
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

    orderSections(props.injectedData.documentationData).forEach((entry) => addEntryAndMembers(entry, 1));

    return (
      <Page>
        {entryEls}
      </Page>
    );
  }
}

Documentation.propTypes = {
  injectedData: PropTypes.shape({
    documentationData: PropTypes.arrayOf(PropTypes.shape({
      parsedComment: PropTypes.shape({
        description: PropTypes.string.isRequired,
      }).isRequired,
      members: PropTypes.arrayOf(PropTypes.object)
    })).isRequired
  })
};
