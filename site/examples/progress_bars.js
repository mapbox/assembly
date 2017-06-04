import React from 'react';
import { HtmlExample } from '../html_example';

const basic = `<div class='h12 bg-darken10 relative round-full'>
  <div class='absolute h12 bg-green-light round-full' style='width:50%;'></div>
</div>`;

const playback = `<div class='flex-parent flex-parent--row flex-parent--center-cross border border--gray-light round-l'>
    <button class='flex-child py18 pr12 pl18 border-r border--gray-light bg-white bg-green-faint-on-hover cursor-pointer round-l'>
      <div class='triangle--r triangle color-green color-green'></div>
    </button>
    <div class='flex-child flex-child--grow px18 py18bg-white'>
      <div class='relative w-full h12 bg-darken10 round-full'>
        <div class='absolute top right bottom left m3 bg-green-light round-full' style='width:50%;'>
          <span class='absolute top right w30 h6 bg-green round-full'></span>
        </div>
      </div>
    </div>
  </div>`;

class ExampleProgressBars extends React.Component {
  render() {
    return (
      <div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold'>
          Basic bar
        </h2>
        <div className='mb24'>
          <HtmlExample code={basic} />
        </div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold'>
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
