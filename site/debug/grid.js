import React from 'react';

class Grid extends React.Component {
  render() {
    return (
      <div>
        <h1 className='txt-headline mb20'>
          Grid
        </h1>

        <div className='mt20 bg-gray-faint p10'>
          <div className='grd'>
            <div className='col col--1'>
              <div className='txt-s border border--blue p5'>1</div>
            </div>
            <div className='col col--11'>
              <div className='txt-s border border--blue p5'>11</div>
            </div>
          </div>
        </div>

        <div className='mt20 bg-gray-faint p10'>
          <div className='grd grd--gut5'>
            <div className='col col--2'>
              <div className='txt-s border border--blue p5'>2</div>
            </div>
            <div className='col col--10'>
              <div className='txt-s border border--blue p5'>10</div>
            </div>
          </div>
        </div>

        <div className='mt20 bg-gray-faint p10'>
          <div className='grd grd--gut10'>
            <div className='col col--3'>
              <div className='txt-s border border--blue p5'>3</div>
            </div>
            <div className='col col--9'>
              <div className='txt-s border border--blue p5'>9</div>
            </div>
          </div>
        </div>

        <div className='mt20 bg-gray-faint p10'>
          <div className='grd grd--gut20'>
            <div className='col col--4'>
              <div className='txt-s border border--blue p5'>4</div>
            </div>
            <div className='col col--8'>
              <div className='txt-s border border--blue p5'>8</div>
            </div>
          </div>
        </div>

        <div className='mt20 bg-gray-faint p10'>
          <div className='grd grd--gut40'>
            <div className='col col--5'>
              <div className='txt-s border border--blue p5'>5</div>
            </div>
            <div className='col col--7'>
              <div className='txt-s border border--blue p5'>7</div>
            </div>
          </div>
        </div>

        <div className='mt20 bg-gray-faint p10'>
          <div className='grd grd--gut80'>
            <div className='col col--6'>
              <div className='txt-s border border--blue p5'>6</div>
            </div>
            <div className='col col--3'>
              <div className='txt-s border border--blue p5'>3</div>
            </div>
            <div className='col col--3'>
              <div className='txt-s border border--blue p5'>3</div>
            </div>
          </div>
        </div>

        <div className='mt20 bg-gray-faint p10'>
          <div className='grd grd--gut10'>
            <div className='col col--3'>
              <div className='txt-s border border--blue p5'>3</div>
            </div>
            <div className='col col--4'>
              <div className='txt-s border border--blue p5'>4</div>
            </div>
            <div className='col col--5'>
              <div className='txt-s border border--blue p5'>5</div>
            </div>
            <div className='col col--6'>
              <div className='txt-s border border--blue p5'>6</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Grid };
