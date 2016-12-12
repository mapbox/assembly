import React from 'react';

const variations = [
  { color: null },
  { color: 'gray' },
  { color: 'pink' },
  { color: 'red' },
  { color: 'orange' },
  { color: 'yellow' },
  { color: 'green' },
  { color: 'teal' },
  { color: 'blue' },
  { color: 'purple' }
];

class CheckboxesRadios extends React.Component {
  render() {
    const checkmark = (
      <svg
       className='icn'
       dangerouslySetInnerHTML={{ __html: '<use xlink:href="#icon-check"></use>' }}
     >
     </svg>
   );

    const checkboxes = variations.map((item, i) => {
      let checkboxFillClass = 'checkbox';
      let checkboxStrokeClass = 'checkbox checkbox--stroke';
      if (item.color !== null) {
        checkboxFillClass += ` bg-${item.color}`;
        checkboxStrokeClass += ` color-${item.color}`;
      }

      return (
        <div key={i} className='mb10'>
          <div className='inline-block mr30'>
            <label className='checkbox-container'>
              <input type='checkbox' />
              <div className={checkboxFillClass}>
                {checkmark}
              </div>
              Filled
            </label>
          </div>
          <div className='inline-block mr30'>
            <label className='checkbox-container'>
              <input type='checkbox' />
              <div className={checkboxStrokeClass}>
                {checkmark}
              </div>
              Unfilled
            </label>
          </div>
          <div className='inline-block'>
            <div className={checkboxFillClass}>
              {checkmark}
            </div>
          </div>
          <div className='inline-block'>
            <div className={`${checkboxFillClass} is-active`}>
              {checkmark}
            </div>
          </div>
          <div className='inline-block'>
            <div className={checkboxStrokeClass}>
              {checkmark}
            </div>
          </div>
          <div className='inline-block'>
            <div className={`${checkboxStrokeClass} is-active`}>
              {checkmark}
            </div>
          </div>
        </div>
      );
    });

    const radios = variations.map((item, i) => {
      let radioClass = 'radio';
      let id = 'radio';
      if (item.color !== null) {
        radioClass += ` color-${item.color}`;
        id += `-${item.color}`;
      }

      return (
        <div key={i} className='mb10'>
          <div className='inline-block mr30'>
            <label className='radio-container'>
              <input id={id} name='radios' value={id} type='radio' />
              <div className={radioClass}></div>
              Radio
            </label>
          </div>
          <div className='inline-block mr10'>
            <div className={radioClass}></div>
          </div>
          <div className='inline-block mr10'>
            <div className={`${radioClass} is-active`}></div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <h2 className='subheadline mb20 mt20'>
          Checkboxes
        </h2>
        <div className='mb10'>
          <input id='checkbox-unstyled' type='checkbox' />
          <label for='checkbox-unstyled'>Unstyled</label>
        </div>

        {checkboxes}

        <h2 className='subheadline mb20 mt20'>
          Checkboxes
        </h2>
        <div className='mb10'>
          <input id='radio-unstyled' type='radio' />
          <label for='radio-unstyled'>Radio</label>
        </div>
        {radios}

      </div>
    );
  }
}

export { CheckboxesRadios };
