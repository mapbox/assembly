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
  'purple'
];

class Checkboxes extends React.Component {
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
        checkboxClass += ` checkbox--${color}`;
      }

      return (
        <div key={i} className='mb12'>
          <label className='checkbox-container mr12'>
            <input type='checkbox' />
            <div className={checkboxClass}>
              {checkmark}
            </div>
            Check me
          </label>
          <label className='checkbox-container'>
            <input checked disabled type='checkbox' />
            <div className={checkboxClass}>
              {checkmark}
            </div>
            Check me
          </label>
        </div>
      );
    });

    return (
      <div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold'>
          Checkboxes
        </h2>

        <div className='mb12'>
          <input id='checkbox-unstyled' type='checkbox' />
          <label for='checkbox-unstyled'>Unstyled</label>
        </div>

        {checkboxes}

      </div>
    );
  }
}

export { Checkboxes };
