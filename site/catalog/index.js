import React from 'react';
import { Checkboxes } from './checkboxes';
import { Radios } from './radios';
import { Bleeds } from './bleeds';
import { Buttons } from './buttons';
import { Pills } from './pills';
import { Typography } from './typography';
import { Tables } from './tables';
import { Lists } from './lists';
import { Triangles } from './triangles';
import { Selects } from './selects';
import { Switches } from './switches';
import { Toggles } from './toggles';
import { Inputs } from './inputs';
import { Textareas } from './textareas';
import { Ranges } from './ranges';
import { Links } from './links';
import { Grids } from './grids';
import { Icons } from './icons';
import { Flexbox } from './flexbox';

class Catalog extends React.Component {
  render() {
    return (
      <div className='pt24'>

        <h1 className='txt-h2 txt-bold mb18'>Catalog</h1>
        <p className='col col--6-ml'>A catalog of Assembly variations for reference and debugging purposes.</p>
        <div id='Typography' className='mb36'>
          <Typography />
        </div>
        <div id='Grids' className='mb36'>
          <Grids />
        </div>
        <div id='Flexbox' className='mb36'>
          <Flexbox />
        </div>
        <div id='Bleeds' className='mb36'>
          <Bleeds />
        </div>
        <div id='Tables' className='mb36'>
          <Tables />
        </div>
        <div id='Lists' className='mb36'>
          <Lists />
        </div>
        <div id='Links' className='mb36'>
          <Links />
        </div>
        <div id='Buttons' className='mb36'>
          <Buttons />
        </div>
        <div id='Pills' className='mb36'>
          <Pills />
        </div>
        <div id='Inputs' className='mb36'>
          <Inputs />
        </div>
        <div id='Textareas' className='mb36'>
          <Textareas />
        </div>
        <div id='Selects' className='mb36'>
          <Selects />
        </div>
        <div id='Ranges' className='mb36'>
          <Ranges />
        </div>
        <div id='Toggles' className='mb36'>
          <Toggles />
        </div>
        <div id='Switches' className='mb36'>
          <Switches />
        </div>
        <div id='Checkboxes' className='mb36'>
          <Checkboxes />
        </div>
        <div id='Radios' className='mb36'>
          <Radios />
        </div>
        <div id='Icons' className='mb36'>
          <Icons />
        </div>
        <div id='Triangles' className='mb36'>
          <Triangles />
        </div>
      </div>
    );
  }
}

export { Catalog };
