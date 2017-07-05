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

class Radios extends React.Component {
  render() {

    const radios = colors.map((color, i) => {
      let radioClass = 'radio mr6';
      let id = 'radio';
      if (color !== null) {
        radioClass += ` radio--${color}`;
        id += `-${color}`;
      }

      return (
        <div key={i} className='mb12'>
          <label className='radio-container mr12'>
            <input id={id} name='radios' value={id} type='radio' />
            <div className={radioClass}></div>
            Radio
          </label>
          <label className='radio-container'>
            <input checked disabled id={id} name={id} value={id} type='radio' />
            <div className={radioClass}></div>
            Radio
          </label>
        </div>
      );
    });

    return (
      <div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold'>
          Radios
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

export { Radios };
