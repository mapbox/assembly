import React from 'react';

class Spinners extends React.Component {
  render() {
    return (
      <div>
        <h1 className='txt-headline mb18'>
          Spinners
        </h1>

        <div>

          <div className="loading p12"></div>
          <div className="loading loading--s p12"></div>
          <div className="loading loading--light bg-gray-dark p12"></div>

        </div>
      </div>
    );
  }
}

export { Spinners };
