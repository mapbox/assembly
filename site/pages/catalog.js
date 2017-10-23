import React from 'react';

import { Page } from '../page';
import { Checkboxes } from '../catalog/checkboxes';
import { Radios } from '../catalog/radios';
import { Bleeds } from '../catalog/bleeds';
import { Buttons } from '../catalog/buttons';
import { Pills } from '../catalog/pills';
import { Typography } from '../catalog/typography';
import { Tables } from '../catalog/tables';
import { Lists } from '../catalog/lists';
import { Triangles } from '../catalog/triangles';
import { Selects } from '../catalog/selects';
import { Switches } from '../catalog/switches';
import { Toggles } from '../catalog/toggles';
import { Inputs } from '../catalog/inputs';
import { Textareas } from '../catalog/textareas';
import { Ranges } from '../catalog/ranges';
import { Links } from '../catalog/links';
import { Grids } from '../catalog/grids';
import { Flexbox } from '../catalog/flexbox';

export default class Catalog extends React.Component {
  render() {
    return (
      <Page>
        <div className="pt24">
          <h1 className="txt-h2 txt-bold mb18">Catalog</h1>
          <p className="col col--6-ml">
            A catalog of Assembly variations for reference and debugging
            purposes.
          </p>
          <div id="Typography" className="mb36">
            <Typography />
          </div>
          <div id="Grids" className="mb36">
            <Grids />
          </div>
          <div id="Flexbox" className="mb36">
            <Flexbox />
          </div>
          <div id="Bleeds" className="mb36">
            <Bleeds />
          </div>
          <div id="Tables" className="mb36">
            <Tables />
          </div>
          <div id="Lists" className="mb36">
            <Lists />
          </div>
          <div id="Links" className="mb36">
            <Links />
          </div>
          <div id="Buttons" className="mb36">
            <Buttons />
          </div>
          <div id="Pills" className="mb36">
            <Pills />
          </div>
          <div id="Inputs" className="mb36">
            <Inputs />
          </div>
          <div id="Textareas" className="mb36">
            <Textareas />
          </div>
          <div id="Selects" className="mb36">
            <Selects />
          </div>
          <div id="Ranges" className="mb36">
            <Ranges />
          </div>
          <div id="Toggles" className="mb36">
            <Toggles />
          </div>
          <div id="Switches" className="mb36">
            <Switches />
          </div>
          <div id="Checkboxes" className="mb36">
            <Checkboxes />
          </div>
          <div id="Radios" className="mb36">
            <Radios />
          </div>
          <div id="Triangles" className="mb36">
            <Triangles />
          </div>
        </div>
      </Page>
    );
  }
}
