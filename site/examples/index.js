import React from 'react';
import { UnderlineTabs } from './underline_tabs';
import { DiverseTiles } from './diverse_tiles';
import { MenuNav } from './menu_nav';

class Examples extends React.Component {
  render() {
    return (
      <div>
        <h1 className='txt-headline'>
          Examples
        </h1>

        <div className='mt48'>
          <UnderlineTabs />
        </div>
        <div className='mt48'>
          <DiverseTiles />
        </div>
        <div className='mt48'>
          <MenuNav />
        </div>
      </div>
    );
  }
}

export { Examples };
