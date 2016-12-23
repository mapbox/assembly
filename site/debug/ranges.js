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
  const inputClasses = `range range--${props.size || ''} range--${props.color}`;
  return (
    <div className='mr6 mb6 inline-block'>
       <input type='range' className={inputClasses} readOnly={props.readonly} disabled={props.disabled} defaultValue='magic'/>
    </div>
  );
}

class Ranges extends React.Component {
  render() {

    return (
      <div>
        <h1 className='txt-headline mb18'>
          Ranges
        </h1>

          <div className='mb12'>
            {colors.map((c) => <RangesEl key={c} color={c}  />)}
          </div>

          <div className='mb12'>
            {colors.map((c) => <RangesEl key={c} color={c} disabled={true} />)}
          </div>

          <div className='mb12'>
            {colors.map((c) => <RangesEl key={c} color={c} size={'s'} />)}
          </div>

          <div className='mb12'>
            {colors.map((c) => <RangesEl key={c} color={c} size={'s'} disabled={true} />)}
          </div>

      </div>
    );
  }
}

export { Ranges };
