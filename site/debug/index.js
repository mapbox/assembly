import React from 'react';
import { CheckboxesRadios } from './checkboxes_radios';

class Debug extends React.Component {
  render() {
    return (
      <div>
        <h1 className='txt-headline mb20'>
          Checkboxes & Radios
        </h1>
        <CheckboxesRadios />
      </div>
    );
  }
}

export { Debug };
