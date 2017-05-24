import React from 'react';
import remark from 'remark';
import path from 'path';
import reactRenderer from 'remark-react';
import _ from 'lodash';
import { HtmlExample } from '../html_example';
import pkg from '../../package.json';

class Entry extends React.Component {
  constructor(props) {
    super(props);
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
      <button data-button-expand
        className='ml3 btn btn--xs btn--blue round'>
        See all
      </button>
    ) : null;

    const sourceUrl = `https://github.com/mapbox/assembly/blob/${pkg.version}/src/${path.basename(props.parsedComment.source.filename)}#L${props.parsedComment.source.line}`;

    return (
      <div className='grid-mxl grid--gut18-mxl border-t border--2 border--gray-faint pt48 pb48'>
        <div className='col col--4-mxl pr18-ml mb6'>
          <div className='none'>
            {selectorEls}
          </div>
          <div>
            {collapsedSelectorEls}
          </div>
          {expandButton}
          <div className='mt12'>
            <a
              href={sourceUrl}
              target='_blank'
              className='txt-s link inline-block link--gray'
            >
              <svg className='align-t inline-block mr6 mt3 icon icon--s'><use xlinkHref='#icon-code'/></svg>
              {path.basename(props.parsedComment.source.filename)}: {props.parsedComment.source.line}
            </a>
          </div>
        </div>
        <div className='col col--8-mxl'>
          <div className='mb24 prose'>
            {remark().use(reactRenderer).processSync(props.parsedComment.description).contents}
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
