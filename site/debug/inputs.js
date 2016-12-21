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

function InputEl(props) {
  const inputClasses = `input input--${props.size || ''} border--${props.border} color-${props.color}`;
  return (
    <div className='mr6 mb6 inline-block'>
       <input className={inputClasses} placeholder='name' readOnly={props.readonly} disabled={props.disabled} value='magic' />
    </div>
  );
}

class Inputs extends React.Component {
  render() {

    return (
      <div>
        <h1 className='txt-headline mb18'>
          Text inputs
        </h1>

          <div className='mb12'>
            {colors.map((c) => <InputEl key={c} color={c} size={null} />)}
          </div>

          <div className='mb12'>
            {colors.map((c) => <InputEl key={c} border={c} />)}
          </div>

          <div className='mb12'>
            {colors.map((c) => <InputEl key={c} color={c} size={'s'} />)}
          </div>

          <div className='mb12'>
            {colors.map((c) => <InputEl key={c} color={c} border={c} disabled={true} />)}
          </div>

          <div className='mb12'>
            {colors.map((c) => <InputEl key={c} color={c} border={c} readonly={true} />)}
          </div>

      </div>
    );
  }
}

export { Inputs };
