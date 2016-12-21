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


class Forms extends React.Component {
  render() {
    return (
      <div>
        <h1 className='txt-headline mb18'>
          Forms
        </h1>

        <div>
          <fieldset>
            <legend className='txt-bold'>Animals</legend>
            <div className='mt6'>
              <label className='radio-container'>
                <input name='animal' value='cow' type='radio' />
                <div className='radio mr6' />
                cow
              </label>
            </div>
            <div className='mt6'>
              <label className='radio-container'>
                <input name='animal' value='horse' type='radio' />
                <div className='radio mr6' />
                horse
              </label>
            </div>
            <div className='mt6'>
              <label className='radio-container'>
                <input name='animal' value='pig' type='radio' />
                <div className='radio mr6' />
                pig
              </label>
            </div>
          </fieldset>
          <fieldset className='mt48'>
            <legend className='txt-bold'>Animals</legend>
            <div className='mt6'>
              <label className='checkbox-container'>
                <input type='checkbox' value='cow' />
                <div className='checkbox mr6'>
                  <svg
                    className='icon'
                    dangerouslySetInnerHTML={{ __html: '<use xlink:href="#icon-check"></use>' }}
                  />
                </div>
                cow
              </label>
            </div>
            <div className='mt6'>
              <label className='checkbox-container'>
                <input type='checkbox' value='horse' />
                <div className='checkbox mr6'>
                  <svg
                    className='icon'
                    dangerouslySetInnerHTML={{ __html: '<use xlink:href="#icon-check"></use>' }}
                  />
                </div>
                horse
              </label>
            </div>
            <div className='mt6'>
              <label className='checkbox-container'>
                <input type='checkbox' value='pig' />
                <div className='checkbox mr6'>
                  <svg
                    className='icon'
                    dangerouslySetInnerHTML={{ __html: '<use xlink:href="#icon-check"></use>' }}
                  />
                </div>
                pig
              </label>
            </div>
          </fieldset>
          <fieldset className='mt24'>
            <legend className='txt-bold'>Range</legend>
            <div className='mt6'>
              <label className='range-container'>
                Range <input className='range w96' name='range' min='0' max='100' type='range' />
              </label>
            </div>
            <div className='mt6'>
              <label className='range-container'>
                Range Small <input className='range range--s w96' name='range' min='0' max='100' type='range' />
              </label>
            </div>
            <div className='mt6 p6 bg-gray-dark color-white'>
              <label className='range-container'>
                Range dark <input className='range range--dark w96' name='range' min='0' max='100' type='range' />
              </label>
            </div>
            <div className='mt6 p6 bg-red-dark color-white'>
              <label className='range-container'>
                Range dark <input className='range range--dark w96' name='range' min='0' max='100' type='range' />
              </label>
            </div>
            <div className='mt6'>
              <label className='range-container'>
                 Range color example <input className='range range--purple w96' name='range' min='0' max='100' type='range' />
              </label>
            </div>
          </fieldset>
        </div>

        <div>
          <h2 className='txt-subhead mb18 mt18'>
            Selects
          </h2>

          {colors.map((color) => {
            let selectClass = 'select';
            let selectStrokeContainerClass = 'select-container select-container--stroke';
            const selectStrokeClass = 'select';
            const selectContainerClass = 'select-container';
            if (color !== null) {
              selectClass += ` bg-${color}`;
              selectStrokeContainerClass += ` color-${color}`;
            }
            return (
              <div key={color} className='mb12'>
                <div className='inline-block mr12'>
                  <div className={selectContainerClass}>
                    <select className={selectClass}>
                      <option>firstoption</option>
                      <option>two</option>
                      <option>three</option>
                    </select>
                  </div>
                </div>
                <div className='inline-block mr12'>
                  <div className={selectContainerClass}>
                    <select className={selectClass} disabled>
                      <option>firstoption</option>
                      <option>two</option>
                      <option>three</option>
                    </select>
                  </div>
                </div>
                <div className='inline-block mr12'>
                  <div className={selectStrokeContainerClass}>
                    <select className={selectStrokeClass}>
                      <option>firstoption</option>
                      <option>two</option>
                      <option>three</option>
                    </select>
                  </div>
                </div>
                <div className='inline-block mr12'>
                  <div className={selectContainerClass}>
                    <select className={`${selectClass} select--s`}>
                      <option>firstoption</option>
                      <option>two</option>
                      <option>three</option>
                    </select>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    );
  }
}

export { Forms };
