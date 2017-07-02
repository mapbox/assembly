import React from 'react';

class Pills extends React.Component {
  render() {
    return (
      <div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold'>
          Button pills
        </h2>

        <div className='flex-parent mb18'>
          <button className='btn btn--pill btn--pill-hl'>Confirm</button>
          <button className='btn btn--pill btn--pill-hc is-active'>Confirm</button>
          <button className='btn btn--pill btn--pill-hc is-active'>Confirm</button>
          <button className='btn btn--pill btn--pill-hr'>Confirm</button>
        </div>

        <div className='flex-parent mb18'>
          <button className='btn btn--red btn--stroke btn--pill-stroke btn--pill-hl round btn--fill'>Confirm</button>
          <button className='btn btn--red btn--stroke btn--pill-stroke btn--pill-hc round is-active'>Confirm</button>
          <button className='btn btn--red btn--pill-stroke btn--pill-hc round is-active'>Confirm</button>
          <button className='btn btn--red btn--stroke btn--pill-stroke btn--pill-hr round'>Confirm</button>
        </div>

        <div className='mb18 flex-parent-inline flex-parent--column'>
          <button className='btn btn--orange btn--s btn--pill btn--pill-vt'>Confirm</button>
          <button className='btn btn--orange btn--s btn--pill btn--pill-vc'>Confirm</button>
          <button className='btn btn--orange btn--s btn--pill btn--pill-vc'>Confirm</button>
          <button className='btn btn--orange btn--s btn--pill btn--pill-vb is-active'>Confirm</button>
        </div>

        <div className='mb18 ml18 flex-parent-inline flex-parent--column'>
          <button className='btn btn--s btn--pill-stroke btn--pill-vt round'>Confirm</button>
          <button className='btn btn--stroke btn--s btn--pill-stroke btn--pill-vc round'>Confirm</button>
          <button className='btn btn--stroke btn--s btn--pill-stroke btn--pill-vc round'>Confirm</button>
          <button className='btn btn--stroke btn--s btn--pill-stroke btn--pill-vb round is-active'>Confirm</button>
        </div>
      </div>
    );
  }
}

export { Pills };
