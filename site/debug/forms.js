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
        </div>

        <div>
          <h2 className='txt-subhead mb18 mt18'>
            Selects
          </h2>

          {colors.map((color) => {
            let selectClass = 'select';
            let selectStrokeClass = 'select select--stroke';
            if (color !== null) {
              selectClass += ` bg-${color}`;
              selectStrokeClass += ` color-${color}`;
            }
            return (
              <div key={color} className='mb12'>
                <div className='inline-block mr12'>
                  <div className={selectClass}>
                    <select>
                      <option>firstoption</option>
                      <option>two</option>
                      <option>three</option>
                    </select>
                  </div>
                </div>
                <div className='inline-block mr12'>
                  <div className={selectStrokeClass}>
                    <select>
                      <option>firstoption</option>
                      <option>two</option>
                      <option>three</option>
                    </select>
                  </div>
                </div>
                <div className='inline-block mr12'>
                  <div className={`${selectClass} select--s`}>
                    <select>
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
