import React from 'react';

class Spinners extends React.Component {
  render() {
    return (
      <div>
        <h1 className='txt-headline mb20'>
          Spinners
        </h1>

        <div>

          <div className="loading p10"></div>
          <div className="loading loading--s p10"></div>
          <div className="loading loading--light bg-gray-dark p10"></div>

        </div>
      </div>
    );
  }
}

export { Spinners };
