import React from 'react';
import { HtmlExample } from '../html_example';

const tiles = `<div class='grid grid--gut12 h480'>
  <div class='flex-parent flex-parent--wrap col col--12 col--6-mm col--8-ml mb12 mb0-mm'>
    <div class='flex-parent flex-parent--wrap col col--12 mb12'>
      <div class='flex-parent flex-parent--wrap col col--12 col--6-ml mb12 mb0-ml pr0 pr12-ml'>
        <div class='col col--12 bg-darken10 p12 mb12'>Vertical</div>
        <div class='col col--12 bg-darken10 p12'>Tiles</div>
      </div>
      <div class='flex-parent col col--12 col--6-ml'>
        <div class='bg-darken10 col col--12 p12'>
          Middle tile
        </div>
      </div>
    </div>
    <div class='flex-parent col col--12'>
      <div class='bg-darken10 col col--12 p12'>
        Wide tile
      </div>
    </div>
  </div>
  <div class='flex-parent col col--12 col--6-mm col--4-ml'>
    <div class='bg-darken10 col col--12 p12'>
      Tall tile
    </div>
  </div>
</div>`;

class ExampleTileLayout extends React.Component {
  render() {
    return (
      <div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt72 mb24 txt-l txt-bold'>
          Tile layout
        </h2>
        <HtmlExample code={tiles} />
      </div>
    );
  }
}

export { ExampleTileLayout };
