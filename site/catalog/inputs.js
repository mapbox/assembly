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
  'white'
];

function InputEl(props) {
  let inputClasses = 'input w240';
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
        <h2 className='border-b border--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold'>
          Text inputs
        </h2>

        <div className='mb12 txt-bold color-darken50 txt-uppercase txt-s'>Border colors</div>
        <div className='mb24'>
          {colors.map((c) => <InputEl key={c} border={c} />)}
        </div>

        <div className='mb12 txt-bold color-darken50 txt-uppercase txt-s'>Disabled</div>
        <div className='mb24'>
          {colors.map((c) => <InputEl key={c} color={c} border={c} disabled={true} />)}
        </div>

        <div className='mb12 txt-bold color-darken50 txt-uppercase txt-s'>Readonly</div>
        <div className='mb24'>
          {colors.map((c) => <InputEl key={c} color={c} border={c} readonly={true} />)}
        </div>

        <div className='mb12 txt-bold txt-d '>Additional input types</div>
        <div className='mb24'>
          <div className='mr6 mb6 inline-block'>
            <input
              className='input w240'
              placeholder='date'
              type='date'
            />
          </div>
          <div className='mr6 mb6 inline-block'>
            <input
              className='input w240'
              placeholder='number'
              type='number'
            />
          </div>
          <div className='mr6 mb6 inline-block'>
            <input
              className='input w240'
              placeholder='search'
              type='search'
            />
          </div>
          <div className='mr6 mb6 inline-block align-t'>
            <input
              className='input w240'
              type='color'
            />
          </div>
          <div className='mr6 mb6 inline-block'>
            <input
              className='input w240'
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
