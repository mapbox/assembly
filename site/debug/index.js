import React from 'react';
import { CheckboxesRadios } from './checkboxes_radios';
import { Buttons } from './buttons';
import { Pills } from './pills';

class Debug extends React.Component {
  render() {
    return (
      <div>
        <div className='mb40'>
          <CheckboxesRadios />
        </div>
        <div className='mb40'>
          <Buttons />
        </div>
        <div className='mb40'>
          <Pills />
        </div>
      </div>
    );
  }
}

export { Debug };
