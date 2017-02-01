import React from 'react';
import { HtmlExample } from '../html_example';

const basic = `<div class='h12 bg-darken10 relative round-full'>
  <div class='absolute h12 bg-green-light round-full' style='width:50%;'></div>
</div>`;

const playback = `<div class='flex-parent flex-parent--row flex-parent--center-cross border border--gray-light round-t'>
    <div class='flex-child py12 pr6 pl12 border-r bg-gray-dark cursor-pointer'>
      <span class='block triangle-l triangle-l--r color-green'></span>
    </div>
    <div class='flex-child flex-child--grow p18 bg-blue'>
      <div class='relative w-full h12 bg-darken10 round-full'>
        <div class='absolute top right bottom left m3 mh6 bg-purple-light round-full' style='width:50%;'>
          <span class='absolute top right w30 h6 bg-red round-full'></span>
        </div>
      </div>
    </div>
  </div>`;

class ExampleProgressBars extends React.Component {
  render() {
    return (
      <div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt48 mb24 txt-l txt-bold'>
          Basic bar
        </h2>
        <div className='mb24'>
          <HtmlExample code={basic} />
        </div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt48 mb24 txt-l txt-bold'>
          Playback controls
        </h2>
        <div className='mb24'>
          <HtmlExample code={playback} />
        </div>
      </div>
    );
  }
}

export { ExampleProgressBars };
