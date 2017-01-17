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
          <p>Composing with the atomic classes that make up the core of Assembly demonnstrates the real flexibility in the framework. The links below feature a variety of snippets that cover common component and layout interfaces. They are designed with flexibility and adjust elegantly for smaller screens.</p>
        </div>
        {this.props.children.map(renderChildrenAsNav)}
      </div>
    );
  }
}

export { Examples };
