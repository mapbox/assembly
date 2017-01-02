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
  let inputClasses = 'input';
  if (props.size) inputClasses += ` input--${props.size}`;
  if (props.border) inputClasses += ` input--border-${props.border}`;
  if (props.color) inputClasses += ` color-${props.color}`;
  return (
    <div className='mr6 mb6 inline-block'>
      <input
        className={inputClasses}
        placeholder='name'
        readOnly={props.readonly}
        disabled={props.disabled}
        defaultValue='magic'
      />
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

          <div className='mb12'>
            <div className='mr6 mb6 inline-block'>
              <input
                className='input'
                placeholder='date'
                type='date'
              />
            </div>
            <div className='mr6 mb6 inline-block'>
              <input
                className='input'
                placeholder='number'
                type='number'
              />
            </div>
            <div className='mr6 mb6 inline-block'>
              <input
                className='input'
                placeholder='search'
                type='search'
              />
            </div>
            <div className='mr6 mb6 inline-block txt-align-t'>
              <input
                className='input'
                type='color'
              />
            </div>
            <div className='mr6 mb6 inline-block'>
              <input
                className='input'
                placeholder='datetime'
                type='datetime'
              />
            </div>
          </div>

      </div>
    );
  }
}

export { Inputs };
