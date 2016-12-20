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
  'darken5',
  'darken10',
  'darken25',
  'darken50',
  'darken75',
  'black'
];

const lightenColors = [
  'lighten5',
  'lighten10',
  'lighten25',
  'lighten50',
  'lighten75',
  'white'
];

function ToggleEl(props) {
  const toggleClass = `toggle toggle--${props.color}`;
  const toggleGroupClass = `mr18 toggle-group ${props.small ? 'toggle-group--s txt-s' : ''} ${props.stroke ? 'toggle-group--stroke color-' + props.color : ''}`;
  return (
    <div className={toggleGroupClass}>
      <label className='toggle-container'>
        <input disabled={props.disabled} name={`animal-${props.color}-${props.stroke}-${props.small}-${props.disabled}`} value='cow' type='radio' />
        <div className={toggleClass}>
        cow
        </div>
      </label>
      <label className='toggle-container'>
        <input checked disabled={props.disabled} name={`animal-${props.color}-${props.stroke}-${props.small}-${props.disabled}`} value='horse' type='radio' />
        <div className={toggleClass}>
        horse
        </div>
      </label>
      <label className='toggle-container'>
        <input disabled={props.disabled} name={`animal-${props.color}-${props.stroke}-${props.small}-${props.disabled}`} value='pig' type='radio' />
        <div className={toggleClass}>
        pig
        </div>
      </label>
    </div>
  );
}

class Toggles extends React.Component {
  render() {

    return (
      <div>
        <h1 className='txt-headline mb18'>
          Toggles
        </h1>

        <div className='mb12'>
        {colors.map((c) => <ToggleEl key={c} color={c} />)}
        </div>

        <div className='mb12'>
        {colors.map((c) => <ToggleEl key={c} color={c} disabled={true} />)}
        </div>

        <div className='mb12'>
        {colors.map((c) => <ToggleEl key={c} color={c} stroke={true} />)}
        </div>

        <div className='mb12'>
        {colors.map((c) => <ToggleEl key={c} color={c} small={true} />)}
        </div>

        <div className='mb12'>
        {colors.map((c) => <ToggleEl key={c} color={c} small={true} stroke={true} />)}
        </div>

        <div className='bg-blue p12 mt12'>
        {lightenColors.map((c) => <ToggleEl key={c} color={c} />)}
        {lightenColors.map((c) => <ToggleEl key={c} color={c} disabled={true} />)}
        </div>

      </div>
    );
  }
}

export { Toggles };
