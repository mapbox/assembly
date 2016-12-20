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
    <div className='mr6 inline-block'>
      <label className='switch-container'>
       <input disabled={props.disabled} type='checkbox' value='magic' />
        <div className={switchClass} />
      </label>
    </div>
  );
}

class Switches extends React.Component {
  render() {

    return (
      <div>
        <h1 className='txt-headline mb18'>
          Switches
        </h1>

        {colors.map((handle, i) =>
          <div key={i} className='mb12'>
            {colors.map((c) => <SwitchEl key={c} color={c} handleColor={handle} size={null} />)}
          </div>)}

        <div className='mt24'>
          {colors.map((handle, i) =>
            <div key={i} className='mb12'>
              {colors.map((c) => <SwitchEl key={c} color={c} disabled={true} handleColor={handle} size={null} />)}
            </div>)}
        </div>

      </div>
    );
  }
}

export { Switches };
