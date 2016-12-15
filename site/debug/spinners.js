import React from 'react';

class Spinners extends React.Component {
  render() {
    return (
      <div>
        <h1 className='txt-headline mb20'>
          Spinners
        </h1>

        <div>

          <div className='loading-dark'></div>
          <div className='w200 h100 bg-gray-dark loading-light'></div>

        </div>
      </div>
    );
  }
}

export { Spinners };
