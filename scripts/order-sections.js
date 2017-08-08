'use strict';

const _ = require('lodash');

function orderSections(entries) {
  function getSection(title) {
    const sectionEntry = entries.find(entry => {
      if (!entry.title) return false;
      return entry.title.toLowerCase() === title.toLowerCase();
    });

    if (sectionEntry === undefined) {
      throw new Error(`Could not find entry with title "${title}"`);
    }

    if (sectionEntry.members) {
      sectionEntry.members = _.sortBy(sectionEntry.members, 'title');
    }

    return sectionEntry;
  }

  // We need to add to this list when we
  // add new primary sections
  const sections = [
    getSection('typography'),
    getSection('layout'),
    getSection('theming'),
    getSection('Colors'),
    getSection('icons'),
    getSection('buttons'),
    getSection('links'),
    getSection('forms'),
    getSection('tables'),
    getSection('animations'),
    getSection('triangles'),
    getSection('miscellaneous')
  ];

  return sections;
}

module.exports = orderSections;
