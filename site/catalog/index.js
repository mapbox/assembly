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
        <p className='col col--6-mm'>A catalog of Assembly variations for reference and debugging purposes.</p>
        <div id='Typography' className='mb48'>
          <Typography />
        </div>
        <div id='Grids' className='mb48'>
          <Grids />
        </div>
        <div id='Flexbox' className='mb48'>
          <Flexbox />
        </div>
        <div id='Bleeds' className='mb48'>
          <Bleeds />
        </div>
        <div id='Tables' className='mb48'>
          <Tables />
        </div>
        <div id='Lists' className='mb48'>
          <Lists />
        </div>
        <div id='Links' className='mb48'>
          <Links />
        </div>
        <div id='Buttons' className='mb48'>
          <Buttons />
        </div>
        <div id='Pills' className='mb48'>
          <Pills />
        </div>
        <div id='Inputs' className='mb48'>
          <Inputs />
        </div>
        <div id='Textareas' className='mb48'>
          <Textareas />
        </div>
        <div id='Selects' className='mb48'>
          <Selects />
        </div>
        <div id='Ranges' className='mb48'>
          <Ranges />
        </div>
        <div id='Toggles' className='mb48'>
          <Toggles />
        </div>
        <div id='Switches' className='mb48'>
          <Switches />
        </div>
        <div id='Checkboxes' className='mb48'>
          <Checkboxes />
        </div>
        <div id='Radios' className='mb48'>
          <Radios />
        </div>
        <div id='Icons' className='mb48'>
          <Icons />
        </div>
        <div id='Triangles' className='mb48'>
          <Triangles />
        </div>
      </div>
    );
  }
}

export { Catalog };
