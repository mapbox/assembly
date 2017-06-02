import React from 'react';

const colors = [
  null,
  'gray',
  'pink',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'lighten25',
  'lighten50',
  'lighten75',
  'darken25',
  'darken50',
  'darken75',
  'black',
  'white'
];

function LinkEl(props) {
  let linkClasses = 'link col col--4 inline mb6';
  if (props.color) linkClasses += ` link--${props.color}`;
  return (
    <div className='grid'>
      <div className={linkClasses}>Click me!</div>
      <div className={`txt-underline-on-hover ${linkClasses}`}>Click me!</div>
      <div className={`link is-active ${linkClasses}`}>Active</div>
    </div>
  );
}

class Links extends React.Component {
  render() {

    return (
      <div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold'>
          Links
        </h2>

        <div className='mb12'>
          <div className='grid'>
            <div className='col col--4 mb12 txt-bold color-darken50 txt-uppercase txt-s'>Standard</div>
            <div className='col col--4 mb12 txt-bold color-darken50 txt-uppercase txt-s'>Underline on hover</div>
            <div className='col col--4 mb12 txt-bold color-darken50 txt-uppercase txt-s'>Active</div>
          </div>
          {colors.map((c) => <LinkEl key={c} color={c} size={null} />)}
        </div>

      </div>
    );
  }
}

export { Links };
