import React from 'react';

const colors = [
  null,
  'gray',
  'pink',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'purple'
];

class CheckboxesRadios extends React.Component {
  render() {
    const checkmark = (
      <svg
       className='icon'
       dangerouslySetInnerHTML={{ __html: '<use xlink:href="#icon-check"></use>' }}
     >
     </svg>
   );

    const checkboxes = colors.map((color, i) => {
      let checkboxClass = 'checkbox mr6';
      if (color !== null) {
        checkboxClass += ` color-${color}`;
      }

      return (
        <div key={i} className='mb12'>
          <label className='checkbox-container mr6'>
            <input type='checkbox' />
            <div className={checkboxClass}>
              {checkmark}
            </div>
            Check me
          </label>
        </div>
      );
    });

    const radios = colors.map((color, i) => {
      let radioClass = 'radio mr6';
      let id = 'radio';
      if (color !== null) {
        radioClass += ` color-${color}`;
        id += `-${color}`;
      }

      return (
        <div key={i} className='mb12'>
          <label className='radio-container mr6'>
            <input id={id} name='radios' value={id} type='radio' />
            <div className={radioClass}></div>
            Radio
          </label>
        </div>
      );
    });

    return (
      <div>
        <h1 className='txt-headline mb18'>
          Checkboxes & Radios
        </h1>

        <h2 className='subheadline mb18 mt18'>
          Checkboxes
        </h2>
        <div className='mb12'>
          <input id='checkbox-unstyled' type='checkbox' />
          <label for='checkbox-unstyled'>Unstyled</label>
        </div>

        {checkboxes}

        <h2 className='subheadline mb18 mt18'>
          Checkboxes
        </h2>
        <div className='mb12'>
          <input id='radio-unstyled' type='radio' />
          <label for='radio-unstyled'>Radio</label>
        </div>
        {radios}

      </div>
    );
  }
}

export { CheckboxesRadios };
