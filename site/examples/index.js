import React from 'react';

class Examples extends React.Component {
  render() {

    function renderChildrenAsNav(child, i) {
      return (
        <div key={i}>
          <a
            className='block link'
            href={child.route}
          >{child.name}</a>
        </div>
      );
    }

    return (
      <div>
        <div className='my24'>
          <h1 className='txt-subhead txt-bold my24'>Examples</h1>
          <p>Composing with classes demonstrates the real flexibility in Assembly. The pages below feature a variety of snippets that cover common components to layout interfaces. They are designed for reusability and adjust elegantly for smaller screens.</p>
        </div>
        {this.props.children.map(renderChildrenAsNav)}
      </div>
    );
  }
}

export { Examples };
