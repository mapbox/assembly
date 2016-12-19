import React from 'react';
import remark from 'remark';
import reactRenderer from 'remark-react';

class Heading extends React.Component {
  render() {
    const { props } = this;

    const id = props.title.replace(/\s+/g, '-');

    let descriptionEl;
    if (props.description) {
      descriptionEl = <div className='prose'>
        {remark().use(reactRenderer).process(props.description).contents}
      </div>;
    }

    const sectionClass = props.level === 1 ? 'mt24 pb18 border--gray' : 'pt12 pb12 mt12 border--gray-faint';
    const levelClass = props.level === 1 ? 'txt-subhead mb12' : 'txt-xl mb6';

    return (
      <div className={`mb48 border-b border--2 ${sectionClass}`}>
        <div
          id={id}
          className={levelClass}
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
