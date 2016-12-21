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
  if (props.size) textareaClasses += ` textarea--${props.size}`;
  if (props.border) textareaClasses += ` textarea--border-${props.border}`;
  if (props.color) textareaClasses += ` color-${props.color}`;
  return (
    <div className='mr6 mb6 inline-block'>
       <textarea className={textareaClasses} readOnly={props.readonly} disabled={props.disabled} value='magic'>Hello.</textarea>
    </div>
  );
}

class TextAreas extends React.Component {
  render() {

    return (
      <div>
        <h1 className='txt-headline mb18'>
          Textareas
        </h1>

          <div className='mb12'>
            {colors.map((c) => <TextareaEl key={c} color={c} size={null} />)}
          </div>

          <div className='mb12'>
            {colors.map((c) => <TextareaEl key={c} border={c} />)}
          </div>

          <div className='mb12'>
            {colors.map((c) => <TextareaEl key={c} color={c} size={'s'} />)}
          </div>

          <div className='mb12'>
            {colors.map((c) => <TextareaEl key={c} color={c} size={'s'} disabled={true} />)}
          </div>

          <div className='mb12'>
            {colors.map((c) => <TextareaEl key={c} color={c} size={'s'} readonly={true} />)}
          </div>

      </div>
    );
  }
}

export { TextAreas };
