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

function TextareaEl(props) {
  let textareaClasses = 'textarea';
  if (props.border) textareaClasses += ` textarea--border-${props.border}`;
  if (props.color) textareaClasses += ` color-${props.color}`;
  return (
    <div className='mr6 mb6 inline-block'>
       <textarea className={textareaClasses} readOnly={props.readonly} disabled={props.disabled} defaultValue='Hello' />
    </div>
  );
}

class Textareas extends React.Component {
  render() {

    return (
      <div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt72 mb24 txt-l txt-uppercase txt-bold'>
          Textareas
        </h2>

        <div className='mb12 txt-bold color-purple'>Text colors</div>
        <div className='mb24'>
          {colors.map((c) => <TextareaEl key={c} color={c} size={null} />)}
        </div>

        <div className='mb12 txt-bold color-purple'>Border colors</div>
        <div className='mb24'>
          {colors.map((c) => <TextareaEl key={c} border={c} />)}
        </div>

        <div className='mb12 txt-bold color-purple'>Disabled</div>
        <div className='mb24'>
          {colors.map((c) => <TextareaEl key={c} color={c} disabled={true} />)}
        </div>

        <div className='mb12 txt-bold color-purple'>Readonly</div>
        {colors.map((c) => <TextareaEl key={c} color={c} readonly={true} />)}

      </div>
    );
  }
}

export { Textareas };
