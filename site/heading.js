import PropTypes from 'prop-types';
import React from 'react';
import { remark } from 'remark';
import reactRenderer from 'remark-react';
import { HtmlExample } from './html_example';

class Heading extends React.Component {
  render() {
    const { props } = this;

    const id = props.title.replace(/\s+/g, '-');

    let descriptionEl;
    if (props.parsedComment.description) {
      descriptionEl = (
        <div className="prose">
          {
            remark()
              .use(reactRenderer)
              .processSync(props.parsedComment.description).contents
          }
        </div>
      );
    }

    const sectionClass =
      props.level === 1 ? 'pb18 border--gray' : 'pb12 mt12 border--gray-faint';
    const levelClass = props.level === 1 ? 'txt-h2 mb18 pt24' : 'pt12 txt-l';

    const example = !props.parsedComment.example ? null : (
      <HtmlExample
        code={props.parsedComment.example.description}
        copy={false}
      />
    );

    return (
      <div className={`${sectionClass}`}>
        <div id={id} className={levelClass}>
          <a className="block txt-bold" href={`#${id}`}>
            {props.title}
          </a>
        </div>
        {descriptionEl}
        {example}
      </div>
    );
  }
}

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
  title: PropTypes.string.isRequired,
  parsedComment: PropTypes.shape({
    description: PropTypes.string
  }).isRequired
};

export { Heading };
