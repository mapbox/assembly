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

function ToggleEl(props) {
  const toggleClass = `toggle toggle--${props.color}`;
  return (
    <div className='toggle-group mr18'>
      <label className='toggle-container'>
        <input name={`animal-${props.color}`} value='cow' type='radio' />
        <div className={toggleClass}>
        cow
        </div>
      </label>
      <label className='toggle-container'>
        <input name={`animal-${props.color}`} value='horse' type='radio' />
        <div className={toggleClass}>
        horse
        </div>
      </label>
      <label className='toggle-container'>
        <input name={`animal-${props.color}`} value='pig' type='radio' />
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

        {colors.map((c) => <ToggleEl key={c} color={c} />)}

        <div className='mt18 mb18'>

        <div className='toggle-group txt-s mr18'>
          <label className='toggle-container'>
            <input name='animalx' value='cow' type='radio' />
            <div className='toggle toggle--s-label'>
            small cow
            </div>
          </label>
          <label className='toggle-container'>
            <input name='animalx' value='horse' type='radio' />
            <div className='toggle toggle--s-label'>
            small horse
            </div>
          </label>
          <label className='toggle-container'>
            <input name='animalx' value='pig' type='radio' />
            <div className='toggle toggle--s-label'>
            small pig
            </div>
          </label>
        </div>

        </div>

        <div className='mt18 mb18'>
          An inline toggle.
          <div className='toggle-group bg-yellow mr12 ml12 pad6'>
            <label className='toggle-container'>
              <input name='animal2' value='globe' type='radio' />
              <div className='toggle'>
              <svg
                 className='icon'
                 dangerouslySetInnerHTML={{ __html: '<use xlink:href="#icon-globe"></use>' }}
               >
             </svg>
              </div>
            </label>
            <label className='toggle-container'>
              <input name='animal2' value='check' type='radio' />
              <div className='toggle'>
              <svg
                 className='icon'
                 dangerouslySetInnerHTML={{ __html: '<use xlink:href="#icon-check"></use>' }}
               >
             </svg>
              </div>
            </label>
            <label className='toggle-container'>
              <input name='animal2' value='clipboard' type='radio' />
              <div className='toggle'>
              <svg
                 className='icon'
                 dangerouslySetInnerHTML={{ __html: '<use xlink:href="#icon-clipboard"></use>' }}
               >
             </svg>
              </div>
            </label>
          </div>
          Donec ullamcorper nulla non metus auctor fringilla.
        </div>

        <div className='toggle-group flex-parent--column border border--blue border--2 mr18'>
          <label className='toggle-container'>
            <input name='animal4' value='sheep' type='radio' />
            <div className='toggle'>
            stylish vertical sheep
            </div>
          </label>
          <label className='toggle-container'>
            <input name='animal4' value='dog' type='radio' />
            <div className='toggle'>
            stylish vertical dog
            </div>
          </label>
          <label className='toggle-container'>
            <input name='animal4' value='cat' type='radio' />
            <div className='toggle'>
            stylish vertical cat
            </div>
          </label>
        </div>

        <div className='toggle-group border border--blue border--2 mr18'>
          <label className='toggle-container col col--4'>
            <input name='animal5' value='cow' type='radio' />
            <div className='toggle'>
            a
            </div>
          </label>
          <label className='toggle-container col col--4'>
            <input name='animal5' value='horse' type='radio' />
            <div className='toggle'>
            thisoneisbroken
            </div>
          </label>
          <label className='toggle-container col col--4'>
            <input name='animal5' value='pig' type='radio' />
            <div className='toggle'>
            pig
            </div>
          </label>
        </div>

        <div className='toggle-group bg-gray-light mr18'>
          <label className='toggle-container'>
            <input name='animal6' value='cow' type='radio' />
            <div className='toggle'>
            background cow
            </div>
          </label>
          <label className='toggle-container'>
            <input name='animal6' value='horse' type='radio' />
            <div className='toggle'>
            background horse
            </div>
          </label>
          <label className='toggle-container'>
            <input name='animal6' value='pig' type='radio' />
            <div className='toggle'>
            background pig
            </div>
          </label>
        </div>

        <div className='toggle-group'>
          <div className='toggle is-active'>
          simple cow
          </div>
          <div className='toggle'>
          simple horse
          </div>
          <div className='toggle'>
          simple pig
          </div>
        </div>

      </div>
    );
  }
}

export { Toggles };
