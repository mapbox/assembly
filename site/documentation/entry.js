import React from 'react';
import remark from 'remark';
import reactRenderer from 'remark-react';
import { HtmlExample } from '../html_example';

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSource: false };
  }

  render() {
    const { props } = this;

    const example = !props.parsedComment.example ? null : (
      <HtmlExample code={props.parsedComment.example.description} />
    );

    let selectors;
    const selectorsTag = props.parsedComment.tags.find((tag) => tag.title === 'selectors');
    if (selectorsTag !== undefined) {
      selectors = selectorsTag.description.split(/\s*,\s*/);
    } else if (props.referencedSource) {
      selectors = [props.referencedSource.selector];
    } else {
      selectors = props.members;
    }

    if (selectors !== undefined) {

      // Break combined comma-separated selectors into multiple elements
      selectors = selectors
        .map((s) => {
          return s.split(',');
        }).reduce((a, b) => {
          return a.concat(b);
        });

      // Remove some pseudo-elements
      selectors = selectors.filter((selector) => !(
        selector.includes(':after') ||
        selector.includes(':checked') ||
        (selector.includes(':hover') && !selector.includes('.hover')) ||
        (selector.includes(':focus') && !selector.includes('.focus')) ||
        (selector.includes(':active') && !selector.includes('.active'))));

      // hide prose selectors from documentation, but special case `.prose` and `.prose--dark` cases
      if (selectors.length > 1) {
        selectors = selectors.filter((s) => s !== '.prose' && s !== '.prose--dark' && s.indexOf('.prose') === -1);
      }
    }

    const getSelectorEl = (selector) =>
      <span
        key={selector}
        id={`${selector.trim().replace(/\s+/g, '-').replace(/\./g, '')}`}
        className='mr3 p3 round bg-blue color-white txt-mono txt-xs inline-block'>
        {selector.trim()}
      </span>;

    const selectorEls = selectors !== undefined && selectors.map(getSelectorEl);
    const collapsedSelectorEls = selectors !== undefined && selectors.slice(0, 15).map(getSelectorEl);

    const expandButton = selectors !== undefined && selectors.length > 15 ? (
      <button
        id={`expandButton-${selectors && selectors[0]}`}
        className='ml3 color-darken50 round btn txt-s btn--xs btn--darken10'>
        See all
      </button>
    ) : null;

    return (
      <div className='border-t border--2 border--gray-faint pt48 pb48 flex-parent flex-parent--wrap'>
        <div className='col col--12 col--4-ml pr12-ml mb6'>
          <div className='none' id={`expanded-${selectors && selectors[0]}`}>
            {selectorEls}
          </div>
          <div className='inline' id={`collapsed-${selectors && selectors[0]}`}>
            {collapsedSelectorEls}
          </div>
            {expandButton}
        </div>
        <div className='col col--12 col--8-ml'>
          <div className='mb48 prose'>
            {remark().use(reactRenderer).process(props.parsedComment.description).contents}
          </div>
          {example}
        </div>
      </div>
    );
  }
}

Entry.propTypes = {
  type: React.PropTypes.oneOf(['group', 'member']).isRequired,
  parsedComment: React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    example: React.PropTypes.shape({
      description: React.PropTypes.string.isRequired
    })
  }).isRequired,
  referencedSource: React.PropTypes.shape({
    toString: React.PropTypes.func.isRequired,
  })
};

export { Entry };
