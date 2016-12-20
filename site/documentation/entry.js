import React from 'react';
import remark from 'remark';
import _ from 'lodash';
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

    // Remove pseudo-elements
    if (selectors !== undefined) {
      selectors = _.uniq(selectors.map((selector) => selector.split(':')[0]));
    }

    if (selectors) {
      selectors = selectors
        .map((s) => {
          return s.split(',');
        }).reduce((a, b) => {
          return a.concat(b);
        });
    }

    const selectorEls = selectors !== undefined && selectors.map((m) =>
      <span
        key={m}
        id={`#${m.trim().replace(/\s+/g, '-').replace(/\./g, '')}`}
        className='mr3 p3 round bg-blue color-white txt-mono txt-xs inline-block'>
        {m.trim()}
      </span>);

    const collapsedSelectorEls = selectors !== undefined && selectors.slice(0,4).map((m) =>
      <span
        key={m}
        id={`#${m.trim().replace(/\s+/g, '-').replace(/\./g, '')}`}
        className='mr3 p3 round bg-blue color-white txt-mono txt-xs inline-block'>
        {m.trim()}
      </span>);

    return (
      <div className='border-t border--2 border--gray-faint pt48 pb48 flex-parent'>
        <div className='col col--4 pr12'>
          {collapsedSelectorEls}
        </div>
        <div className='col col--8'>
          <div className={`${selectors && 'mt3'} mb48 color-gray prose`}>
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
