import React from 'react';
import { UnderlineTabs } from './underline_tabs';

class Examples extends React.Component {
  render() {
    return (
      <div>
        <h1 className='txt-headline'>
          Examples
        </h1>

        <div className='mt30'>
          <UnderlineTabs />
        </div>
      </div>
    );
  }
}

export { Examples };
