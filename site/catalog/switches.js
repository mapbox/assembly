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
  let switchClass = 'switch';
  if (props.handleColor) switchClass += ` switch--dot-${props.handleColor}`;
  if (props.color) switchClass += ` switch--${props.color}`;
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
        <h2 className='border-b border--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold'>
          Switches
        </h2>

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
