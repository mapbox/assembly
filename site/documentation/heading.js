import React from 'react';
import remark from 'remark';
import reactRenderer from 'remark-react';

class Heading extends React.Component {
  render() {
    const { props } = this;

    const id = props.title.replace(/\s+/g, '-');

    let descriptionEl;
    if (props.description) {
      descriptionEl = <div className='docs-description prose'>
        {remark().use(reactRenderer).process(props.description).contents}
      </div>;
    }

    const sectionClass = props.level === 1 ? 'bg-blue-faint pl24 pr24 pb24 mb48 mt48 round' : 'mt24';
    const levelClass = props.level === 1 ? 'txt-subhead mb6' : 'txt-xl mb6';

    return (
      <div className={sectionClass}>
        <div
          id={id}
          className={`${levelClass}`}
        >
          <a className='block pt24' href={`#${id}`}>
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
