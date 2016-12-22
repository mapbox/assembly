import React from 'react';
import { UnderlineTabs } from './underline_tabs';
import { DiverseTiles } from './diverse_tiles';
import { MenuNav } from './menu_nav';
import { Tooltip } from './tooltip';

class Examples extends React.Component {
  render() {
    return (
      <div>
        <h1 className='txt-subhead mb12 txt-bold pt48'>
          Examples
        </h1>
        <UnderlineTabs />
        <DiverseTiles />
        <MenuNav />
        <Tooltip />
      </div>
    );
  }
}

export { Examples };
