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

function ToggleEl(props) {
  const toggleClass = `toggle toggle--active-${props.activeColor} toggle--${props.color}`;
  const toggleGroupClass = `mb12 mr12 toggle-group ${props.small ? 'toggle-group--s txt-s' : ''}`;
  return (
    <div className={toggleGroupClass}>
      <label className='toggle-container'>
        <input disabled={props.disabled} name={`animal-${props.color}-${props.stroke}-${props.small}-${props.disabled}-${props.activeColor}`} value='cow' type='radio' />
        <div className={toggleClass}>
        cow
        </div>
      </label>
      <label className='toggle-container'>
        <input defaultChecked disabled={props.disabled} name={`animal-${props.color}-${props.stroke}-${props.small}-${props.disabled}-${props.activeColor}`} value='horse' type='radio' />
        <div className={toggleClass}>
        horse
        </div>
      </label>
      <label className='toggle-container'>
        <input disabled={props.disabled} name={`animal-${props.color}-${props.stroke}-${props.small}-${props.disabled}-${props.activeColor}`} value='pig' type='radio' />
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
        <h2 className='border-b border--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold'>
          Toggles
        </h2>

        <div className='mb12 txt-bold color-darken50 txt-uppercase txt-s'>Color and active text color variations</div>
        <div className='mb24'>
          {colors.map((o) => <div key={o} className='mb12'>
            {colors.map((c) => <ToggleEl key={c} color={c} activeColor={o} />)}
          </div>)}
        </div>

        <div className='mb12 txt-bold color-darken50 txt-uppercase txt-s'>Disabled</div>
        <div className='mb24'>
        {colors.map((c) => <ToggleEl key={c} color={c} disabled={true} />)}
        </div>

        <div className='mb12 txt-bold color-darken50 txt-uppercase txt-s'>Small</div>
        <div className='mb24'>
        {colors.map((c) => <ToggleEl key={c} color={c} small={true} />)}
        </div>

        <div className='mb12 txt-bold color-darken50 txt-uppercase txt-s'>Light variations</div>
        <div className='bg-gray round px12 py12y mt12'>
        {lightenColors.map((c) => <ToggleEl key={c} color={c} />)}
        </div>

        <div className='mt24 mb12 txt-bold color-darken50 txt-uppercase txt-s'>Disabled and light</div>
        <div className='bg-gray round px12 py12y mt12'>
        {lightenColors.map((c) => <ToggleEl key={c} color={c} disabled={true} />)}
        </div>

      </div>
    );
  }
}

export { Toggles };
