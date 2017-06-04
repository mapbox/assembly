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
  'darken10',
  'darken25',
  'darken50',
  'darken75'
];


class Selects extends React.Component {
  render() {
    return (
      <div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold'>
          Selects
        </h2>

        {colors.map((color) => {
          let selectClass = 'select';
          let selectStrokeClass = 'select select--stroke';
          const selectContainerClass = 'select-container';
          if (color !== null) {
            selectClass += ` select--${color}`;
            selectStrokeClass += ` select--stroke-${color}`;
          }
          return (
            <div key={color} className='mb12'>
              <div className='inline-block mr12'>
                <div className={selectContainerClass}>
                  <select className={selectClass}>
                    <option>firstoption</option>
                    <option disabled>two</option>
                    <option>three</option>
                  </select>
                  <div className='select-arrow'></div>
                </div>
              </div>
              <div className='inline-block mr12'>
                <div className={selectContainerClass}>
                  <select className={selectClass} disabled>
                    <option>firstoption</option>
                    <option>two</option>
                    <option>three</option>
                  </select>
                  <div className='select-arrow'></div>
                </div>
              </div>
              <div className='inline-block mr12'>
                <div className={selectContainerClass}>
                  <select className={`${selectClass} select--s`}>
                    <option>firstoption</option>
                    <option>two</option>
                    <option>three</option>
                  </select>
                  <div className='select-arrow'></div>
                </div>
              </div>
              {!/^(darken10|lighten10)$/.test(color) ? <span>
                <div className={selectContainerClass}>
                  <select className={selectStrokeClass}>
                    <option>firstoption</option>
                    <option>two</option>
                    <option>three</option>
                  </select>
                  <div className='select-arrow'></div>
                </div>
                </span> : ''}
            </div>
          );
        })}
      </div>
    );
  }
}

export { Selects };
