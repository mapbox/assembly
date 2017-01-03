import React from 'react';
import remark from 'remark';
import reactRenderer from 'remark-react';
import _ from 'lodash';
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

      // Break combined comma-separated selectors into multiple elements,
      // remove all pseudo-elements except `:disabled`,
      // remove `is-active` when it is combined with a `*-on-active` class.
      selectors = selectors.reduce((fullList, ruleSelector) => {
        const ruleSelectors = ruleSelector.split(',').map((selector) => {
          if (/:disabled/.test(selector)) return selector;
          return selector.split(':')[0]
            .trim()
            .replace(/on-active\.is-active/, 'on-active');
        });
        return fullList.concat(ruleSelectors);
      }, []);

      selectors = _.uniq(selectors);

      // hide prose selectors from documentation, but special case `.prose` and `.prose--dark` cases
      if (selectors.length > 1) {
        selectors = selectors.filter((s) => s !== '.prose' && s !== '.prose--dark' && s.indexOf('.prose') === -1);
      }
    }

    const getSelectorEl = (selector) =>
      <span
        key={selector}
        id={`${selector.trim().replace(/\s+/g, '-').replace(/\./g, '')}`}
        className='mr6 pr3 round txt-mono color-purple inline-block'>
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
        <div className='txt-m col col--12 col--4-ml pr12-ml mb6'>
          <div className='none' id={`expanded-${selectors && selectors[0]}`}>
            {selectorEls}
          </div>
          <div className='inline' id={`collapsed-${selectors && selectors[0]}`}>
            {collapsedSelectorEls}
          </div>
          {expandButton}

          <div style={{ fontSize: '13px', lineHeight: '20px' }} className='mt12 mb18 alpha75 txt-s'>
            {remark().use(reactRenderer).process(props.parsedComment.description).contents}
          </div>
        </div>
        <div className='col col--12 col--8-ml'>
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
