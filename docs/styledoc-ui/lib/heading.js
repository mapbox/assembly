import React from 'react';

class Heading extends React.Component {
  render() {
    const { props } = this;

    const id = props.text.replace(/\s+/g, '-');

    return (
      <div
        id={id}
        className={`styledoc-heading-${props.level}`}
      >
        <a href={`#${id}`}>
          {props.text}
        </a>
      </div>
    );
  }
}

Heading.propTypes = {
  level: React.PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
  text: React.PropTypes.string.isRequired
};

export { Heading };
