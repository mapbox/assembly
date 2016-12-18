import React from 'react';

class Grid extends React.Component {
  render() {
    return (
      <div>
        <h1 className='txt-headline mb18'>
          Grid
        </h1>

        <div className='mt18 bg-gray-faint p12'>
          <div className='grid'>
            <div className='col col--1'>
              <div className='txt-s border border--blue p6'>1</div>
            </div>
            <div className='col col--11'>
              <div className='txt-s border border--blue p6'>11</div>
            </div>
          </div>
        </div>

        <div className='mt18 bg-gray-faint p12'>
          <div className='grid grid--gut6'>
            <div className='col col--2'>
              <div className='txt-s border border--blue p6'>2</div>
            </div>
            <div className='col col--10'>
              <div className='txt-s border border--blue p6'>10</div>
            </div>
          </div>
        </div>

        <div className='mt18 bg-gray-faint p12'>
          <div className='grid grid--gut12'>
            <div className='col col--3'>
              <div className='txt-s border border--blue p6'>3</div>
            </div>
            <div className='col col--9'>
              <div className='txt-s border border--blue p6'>9</div>
            </div>
          </div>
        </div>

        <div className='mt18 bg-gray-faint p12'>
          <div className='grid grid--gut24'>
            <div className='col col--4'>
              <div className='txt-s border border--blue p6'>4</div>
            </div>
            <div className='col col--8'>
              <div className='txt-s border border--blue p6'>8</div>
            </div>
          </div>
        </div>

        <div className='mt18 bg-gray-faint p12'>
          <div className='grid grid--gut48'>
            <div className='col col--5'>
              <div className='txt-s border border--blue p6'>5</div>
            </div>
            <div className='col col--7'>
              <div className='txt-s border border--blue p6'>7</div>
            </div>
          </div>
        </div>

        <div className='mt18 bg-gray-faint p12'>
          <div className='grid grid--gut96'>
            <div className='col col--6'>
              <div className='txt-s border border--blue p6'>6</div>
            </div>
            <div className='col col--3'>
              <div className='txt-s border border--blue p6'>3</div>
            </div>
            <div className='col col--3'>
              <div className='txt-s border border--blue p6'>3</div>
            </div>
          </div>
        </div>

        <div className='mt18 bg-gray-faint p12'>
          <div className='grid grid--gut12'>
            <div className='col col--3'>
              <div className='txt-s border border--blue p6'>3</div>
            </div>
            <div className='col col--4'>
              <div className='txt-s border border--blue p6'>4</div>
            </div>
            <div className='col col--5'>
              <div className='txt-s border border--blue p6'>5</div>
            </div>
            <div className='col col--6'>
              <div className='txt-s border border--blue p6'>6</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Grid };
