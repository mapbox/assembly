import React from 'react';

const colors = [
  null,
  'gray-faint',
  'gray-light',
  'gray',
  'gray-dark',
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

function SwitchEl(props) {
  const switchClass = `switch ${props.handleColor ? 'switch--dot-' + props.handleColor : ''} color-${props.color}`;
  return (
    <div className='mr5 inline-block'>
      <label className='switch-container'>
       <input type='checkbox' value='magic' />
        <div className={switchClass} />
      </label>
    </div>
  );
}

class Switches extends React.Component {
  render() {

    return (
      <div>
        <h1 className='txt-headline mb20'>
          Switches
        </h1>

        {colors.map((handle) =>
          <div className='mb10'>
            {colors.map((c) => <SwitchEl color={c} handleColor={handle} size={null} />)}
          </div>)}

      </div>
    );
  }
}

export { Switches };
