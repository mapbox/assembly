import React from 'react';
import remark from 'remark';
import reactRenderer from 'remark-react';

class Heading extends React.Component {
  render() {
    const { props } = this;

    const id = props.title.replace(/\s+/g, '-');

    let descriptionEl;
    if (props.description) {
      descriptionEl = <div className='docs-description'>
        {remark().use(reactRenderer).process(props.description).contents}
      </div>;
    }

    return (
      <div className='docs-heading-container'>
        <div
          id={id}
          className={`docs-heading-title-${props.level}`}
        >
          <a href={`#${id}`}>
            {props.title}
          </a>
        </div>
        {descriptionEl}
      </div>
    );
  }
}

Heading.propTypes = {
  level: React.PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string
};

export { Heading };
