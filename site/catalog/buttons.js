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
  'darken5',
  'darken10',
  'darken25',
  'darken50',
  'darken75'
];

const lightenColors = [
  'lighten5',
  'lighten10',
  'lighten25',
  'lighten50',
  'lighten75',
  'white'
];

const getButtonEls = (color, i) => {
  let buttonFillClass = 'btn';
  let buttonStrokeClass = 'btn btn--stroke';
  if (color !== null) {
    buttonFillClass += ` btn--${color}`;
    buttonStrokeClass += ` btn--${color}`;
  }

  return (
    <div key={i} className='mb12'>
      <div className='inline-block mr18'>
        <button className={buttonFillClass}>Fill</button>
      </div>
      <div className='inline-block mr18'>
        <button disabled className={buttonFillClass}>Fill</button>
      </div>
      <div className='inline-block mr18'>
        <button className={`${buttonFillClass} round`}>Less round</button>
      </div>
      <div className='inline-block mr18'>
        <button disabled className={`${buttonFillClass} round`}>Less round</button>
      </div>
      {!/^(darken5|darken10|darken25|lighten5|lighten10|lighten25)$/.test(color) ? <span>
        <div className='inline-block mr18'>
          <button className={buttonStrokeClass}>Stroke</button>
        </div>
        <div className='inline-block mr18'>
          <button disabled className={buttonStrokeClass}>Stroke</button>
        </div>
      </span> : ''}

    </div>
  );
};

class Buttons extends React.Component {
  render() {
    const buttonEls = colors.map(getButtonEls);
    const lightenButtonEls = lightenColors.map(getButtonEls);

    return (
      <div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold'>
          Buttons
        </h2>

        {buttonEls}

        <div className='mt18 py12 bg-gray round'>
          {lightenButtonEls}
        </div>
      </div>
    );
  }
}

export { Buttons };
