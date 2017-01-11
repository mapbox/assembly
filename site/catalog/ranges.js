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

function RangesEl(props) {
  let inputClasses = `range range--${props.color} w180`;
  if (props.size) inputClasses += ` range--${props.size}`;
  return (
    <div className='mr6 mb6 inline-block'>
      <div className={inputClasses}>
        <input type='range' disabled={props.disabled} />
      </div>
    </div>
  );
}

class Ranges extends React.Component {
  render() {

    return (
      <div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt72 mb24 txt-l txt-uppercase txt-bold'>
          Ranges
        </h2>

        <div className='mb12 txt-bold color-darken50 txt-uppercase txt-s'>Color variations</div>
        <div className='mb24'>
          {colors.map((c) => <RangesEl key={c} color={c}  />)}
        </div>

        <div className='mb12 txt-bold color-darken50 txt-uppercase txt-s'>Disabled</div>
        <div className='mb24'>
          {colors.map((c) => <RangesEl key={c} color={c} disabled={true} />)}
        </div>

        <div className='mb12 txt-bold color-darken50 txt-uppercase txt-s'>Small</div>
        <div className='mb24'>
          {colors.map((c) => <RangesEl key={c} color={c} size={'s'} />)}
        </div>

        <div className='mb12 flex-parent flex-parent--center-cross'>
          <input className='input w180' />
          <div className='range w180'>
            <input type='range' />
          </div>
        </div>
        <div className='mb12 flex-parent flex-parent--center-cross'>
          <input className='input input--s w180' />
          <div className='range range--s w180'>
            <input type='range' />
          </div>
        </div>

      </div>
    );
  }
}

export { Ranges };
