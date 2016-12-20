import React from 'react';

class Miscellaneous extends React.Component {
  render() {

    return (
      <div>
        <h1 tabindex={100} className='txt-headline mb18'>
          Miscellaneous
        </h1>
        <div className='mb18'>
        <a href='#' tabindex={100} className='events-none'>Can't </a>
        </div>
        <div className='mb18'>
        <a href='#' tabindex={100} className='events-none'><div className='events-all'>Can select</div></a>
        </div>
        <div className='mb18'>
        <a href='#' tabindex={100} className='select-none'>Can select</a>
        </div>
        <div className='mb18'>
        <a href='#' tabindex={100} className='select-text'><div className='events-all'>Can select</div></a>
        </div>
      </div>
    );
  }
}

export { Miscellaneous };
