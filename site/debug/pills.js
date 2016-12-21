import React from 'react';

class Pills extends React.Component {
  render() {
    return (
      <div>
        <h1 className='txt-headline mb18'>
          Pills
        </h1>

        <div>
          <div className='p12 flex-parent--inline'>
            <button className='btn btn--pill btn--pill-hl'>Confirm</button>
            <button className='btn btn--pill btn--pill-hc is-active'>Confirm</button>
            <button className='btn btn--pill btn--pill-hr'>Confirm</button>
          </div>

          <div className='p12 flex-parent--inline'>
            <button className='btn btn--red btn--stroke btn--pill btn--pill-hl round'>Confirm</button>
            <button className='btn btn--red btn--stroke btn--pill btn--pill-hc round'>Confirm</button>
            <button className='btn btn--red btn--stroke btn--pill btn--pill-hc round'>Confirm</button>
            <button className='btn btn--red btn--stroke btn--pill btn--pill-hr round'>Confirm</button>
          </div>
        </div>

        <div>
          <div className='p12 flex-parent--inline flex-parent--column'>
            <button className='btn btn--orange btn--s btn--pill btn--pill-vt'>Confirm</button>
            <button className='btn btn--orange btn--s btn--pill btn--pill-vc'>Confirm</button>
            <button className='btn btn--orange btn--s btn--pill btn--pill-vb is-active'>Confirm</button>
          </div>

          <div className='p12 flex-parent--inline flex-parent--column'>
            <button className='btn btn--stroke btn--s btn--pill btn--pill-vt round'>Confirm</button>
            <button className='btn btn--stroke btn--s btn--pill btn--pill-vc round'>Confirm</button>
            <button className='btn btn--stroke btn--s btn--pill btn--pill-vc round'>Confirm</button>
            <button className='btn btn--stroke btn--s btn--pill btn--pill-vb round is-active'>Confirm</button>
          </div>
        </div>
      </div>
    );
  }
}

export { Pills };
