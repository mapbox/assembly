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

const lightenColors = [
  'lighten5',
  'lighten10',
  'lighten25',
  'lighten50',
  'lighten75'
];

const darkenColors = [
  'darken5',
  'darken10',
  'darken25',
  'darken50',
  'darken75'
];

function SemitransparentButtonExample(props) {
  let modifiers = '';
  if (props.stroke) modifiers += ' btn--stroke';
  if (props.color && props.stroke) modifiers += ` color-${props.color}`;
  if (props.color && !props.stroke) modifiers += ` bg-${props.color}`;
  return (
    <div className='inline-block mr12'>
      <button disabled={props.disabled} className={`btn ${modifiers} mr18`}>{props.color}</button>
    </div>
  );
}

class Buttons extends React.Component {
  render() {
    const buttonEls = colors.map((color, i) => {
      let buttonFillClass = 'btn';
      let buttonStrokeClass = 'btn btn--stroke';
      if (color !== null) {
        buttonFillClass += ` bg-${color}`;
        buttonStrokeClass += ` color-${color}`;
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
            <button className={buttonStrokeClass}>Stroke</button>
          </div>
          <div className='inline-block mr18'>
            <button disabled className={buttonStrokeClass}>Stroke</button>
          </div>
          <div className='inline-block mr18'>
            <button className={`${buttonFillClass} round`}>Less round</button>
          </div>
          <div className='inline-block mr18'>
            <button disabled className={`${buttonFillClass} round`}>Less round</button>
          </div>

        </div>
      );
    });

    const lightenEls = lightenColors.map((color, i) => {
      return <SemitransparentButtonExample key={i} color={color} />;
    });
    const lightenElsDisabled = lightenColors.map((color, i) => {
      return <SemitransparentButtonExample key={i} disabled={true} color={color} />;
    });
    const lightenStrokeEls = lightenColors.map((color, i) => {
      return <SemitransparentButtonExample key={i} stroke={true} color={color} />;
    });
    const lightenStrokeElsDisabled = lightenColors.map((color, i) => {
      return <SemitransparentButtonExample key={i} disabled={true} stroke={true} color={color} />;
    });
    const darkenEls = darkenColors.map((color, i) => {
      return <SemitransparentButtonExample key={i} color={color} />;
    });
    const darkenElsDisabled = darkenColors.map((color, i) => {
      return <SemitransparentButtonExample key={i} disabled={true} color={color} />;
    });
    const darkenStrokeEls = darkenColors.map((color, i) => {
      return <SemitransparentButtonExample key={i} stroke={true} color={color} />;
    });
    const darkenStrokeElsDisabled = darkenColors.map((color, i) => {
      return <SemitransparentButtonExample key={i} disabled={true} stroke={true} color={color} />;
    });

    return (
      <div>
        <h1 className='txt-headline mb18'>
          Buttons
        </h1>

        {buttonEls}

        <div className='mt18 p12 bg-blue'>
          <div className='mb12'>
            {lightenEls}
          </div>
          <div className='mb12'>
            {lightenElsDisabled}
          </div>
          <div className='mb12'>
            {lightenStrokeEls}
          </div>
          <div className='mb12'>
            {lightenStrokeElsDisabled}
          </div>
          <div className='mb12'>
            {darkenEls}
          </div>
          <div className='mb12'>
            {darkenElsDisabled}
          </div>
          <div className='mb12'>
            {darkenStrokeEls}
          </div>
          <div>
            {darkenStrokeElsDisabled}
          </div>
        </div>
      </div>
    );
  }
}

export { Buttons };
