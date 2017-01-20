import React from 'react';
import remark from 'remark';
import reactRenderer from 'remark-react';
import _ from 'lodash';
import { HtmlExample } from '../html_example';
import { CssSnippet } from '../css_snippet';

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSource: false };
  }

  render() {
    const { props } = this;

    const example = !props.parsedComment.example ? null : (
      <HtmlExample code={props.parsedComment.example.description} copy={false} />
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
        className='mr3 pr3 px3 txt-mono color-blue-dark round bg-blue-faint mb3 inline-block'>
        {selector.trim()}
      </span>;

    const selectorEls = selectors !== undefined && selectors.map(getSelectorEl);
    const collapsedSelectorEls = selectors !== undefined && selectors.slice(0, 15).map(getSelectorEl);

    const expandButton = selectors !== undefined && selectors.length > 15 ? (
      <button
        id={`expandButton-${selectors && selectors[0]}`}
        className='ml3 btn btn--xs btn--blue round'>
        See all
      </button>
    ) : null;

    const css = !props.referencedSource ? null : (
      <div className='mt6'>
        <CssSnippet code={props.referencedSource.toString()} />
      </div>
    );

    return (
      <div className='grid-mxl grid--gut18-mxl border-t border--2 border--gray-faint pt48 pb48'>
        <div className='col col--4-mxl pr18-ml mb6'>
          <div className='none' id={`expanded-${selectors && selectors[0]}`}>
            {selectorEls}
          </div>
          <div className='inline' id={`collapsed-${selectors && selectors[0]}`}>
            {collapsedSelectorEls}
          </div>
          {expandButton}
        </div>
        <div className='col col--8-mxl'>
          <div className='mb24 prose'>
            {remark().use(reactRenderer).process(props.parsedComment.description).contents}
          </div>
          {example}
          {css}
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
