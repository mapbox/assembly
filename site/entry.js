import PropTypes from 'prop-types';
import React from 'react';
import remark from 'remark';
import reactRenderer from 'remark-react';
import _ from 'lodash';
import { HtmlExample } from './html_example';
import pkg from '../package.json';

class Entry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { props } = this;

    const example = !props.parsedComment.example ? null : (
      <HtmlExample
        code={props.parsedComment.example.description}
        copy={false}
      />
    );

    let selectors;
    const selectorsTag = props.parsedComment.tags.find(
      tag => tag.title === 'selectors'
    );
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
        const ruleSelectors = ruleSelector.split(',').map(selector => {
          if (/:disabled/.test(selector)) return selector;
          return selector
            .split(':')[0]
            .trim()
            .replace(/on-active\.is-active/, 'on-active');
        });
        return fullList.concat(ruleSelectors);
      }, []);

      selectors = _.uniq(selectors);

      // hide prose selectors from documentation, but special case `.prose` and `.prose--dark` cases
      if (selectors.length > 1) {
        selectors = selectors.filter(
          s =>
            s !== '.prose' && s !== '.prose--dark' && s.indexOf('.prose') === -1
        );
      }
    }

    const selectorElClasses = `mr3 py3 color-blue-deep round bg-blue-faint mb3 inline-block ${
      selectors.length > 1 ? 'txt-s px3' : 'px6'
    }`;

    const getSelectorEl = selector => (
      <span
        key={selector}
        id={`${selector
          .trim()
          .replace(/\s+/g, '-')
          .replace(/\./g, '')}`}
        className={selectorElClasses}
      >
        {selector.trim()}
      </span>
    );

    const selectorEls = selectors !== undefined && selectors.map(getSelectorEl);

    const sourceUrl = `https://github.com/mapbox/assembly/blob/${
      pkg.version
    }/src/${props.parsedComment.source.filename}#L${
      props.parsedComment.source.line
    }`;

    return (
      <div className="border-t border-t--2 border--gray-faint">
        <div className="grid-mxl grid--gut18-mxl pt36 pb60">
          <div className="col w-1/3-mxl pr18-ml mb6">
            <div className="txt-mono hmax240 overflow-auto scroll-styled">
              {selectorEls}
            </div>
            <div className="mt12">
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="txt-s link inline-block link--gray"
              >
                <svg className="align-t inline-block mr6 mt3 icon w15 h15">
                  <use xlinkHref="#icon-code" />
                </svg>
                {props.parsedComment.source.filename}:{' '}
                {props.parsedComment.source.line}
              </a>
            </div>
          </div>
          <div className="col w-2/3-mxl">
            <div className="mb24 prose">
              {
                remark()
                  .use(reactRenderer)
                  .processSync(props.parsedComment.description).contents
              }
            </div>
            {example}
          </div>
        </div>
      </div>
    );
  }
}

Entry.propTypes = {
  type: PropTypes.oneOf(['group', 'member']).isRequired,
  parsedComment: PropTypes.shape({
    description: PropTypes.string.isRequired,
    example: PropTypes.shape({
      description: PropTypes.string.isRequired
    })
  }).isRequired,
  referencedSource: PropTypes.shape({
    toString: PropTypes.func.isRequired
  })
};

export { Entry };
