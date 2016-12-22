import React from 'react';

const colors = [
  null,
  'gray-faint',
  'gray-light',
  'gray',
  'pink',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'purple',
  'lighten5',
  'lighten10',
  'lighten25',
  'lighten50',
  'lighten75',
  'darken5',
  'darken10',
  'darken25',
  'darken50',
  'darken75',
  'black',
  'white'
];

function LinkEl(props) {
  let linkClasses = 'txt-link inline mr12 mb6';
  if (props.color) linkClasses += ` txt-link--${props.color}`;
  return (
    <div>
      <div className={linkClasses}>Click me!</div>
      <div className={`txt-underline ${linkClasses}`}>Click me!</div>
      <div className={`is-active ${linkClasses}`}>Active</div>
    </div>
  );
}

class Links extends React.Component {
  render() {

    return (
      <div>
        <h1 className='txt-headline mb18'>
          Links
        </h1>

        <div className='mb12'>
          {colors.map((c) => <LinkEl key={c} color={c} size={null} />)}
        </div>

      </div>
    );
  }
}

export { Links };
