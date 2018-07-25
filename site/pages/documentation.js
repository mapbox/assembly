import React from 'react';
import documentationData from '@mapbox/batfish/data/documentation-data'; // eslint-disable-line
import { Entry } from '../entry';
import { Heading } from '../heading';
import { Page } from '../page';
import orderSections from '../../scripts/order-sections';

export default class Documentation extends React.Component {
  render() {
    const entryEls = [];
    const navEls = [];
    function addEntryAndMembers(entry, level) {
      if (entry.type === 'section') {
        entryEls.push(
          <Heading key={entryEls.length + 1} level={level} {...entry} />
        );

        navEls.push(
          <a
            key={entryEls.length + 1}
            href={'#' + entry.title.replace(/\s+/g, '-')}
          >
            {entry.title}
          </a>
        );

        entry.members.forEach(member => addEntryAndMembers(member, level + 1));
      } else {
        entryEls.push(
          <Entry key={entryEls.length + 1} level={level} {...entry} />
        );
      }
    }

    orderSections(documentationData).forEach(entry =>
      addEntryAndMembers(entry, 1)
    );

    return <Page>{entryEls}</Page>;
  }
}
