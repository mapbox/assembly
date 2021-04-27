import React from 'react';
import { HtmlExample } from '../../html_example';
import { Page } from '../../page';

const basic = `<div class='h12 bg-darken10 relative round-full'>
  <div class='absolute h12 bg-green-light round-full' style='width:50%;'></div>
</div>`;

const playback = `<div class='flex flex--row flex--center-cross border border--gray-light round-l'>
    <button class='py18 pr12 pl18 border-r border--gray-light bg-white bg-green-light-on-hover cursor-pointer round-l'>
      <div class='triangle--r triangle color-green color-green'></div>
    </button>
    <div class='flex-child-grow px18 py18 bg-white'>
      <div class='relative w-full h12 bg-darken10 round-full'>
        <div class='absolute top right bottom left m3 bg-green-light round-full' style='width:50%;'>
          <span class='absolute top right w30 h-full bg-green round-full'></span>
        </div>
      </div>
    </div>
  </div>`;

export default class ExampleProgressBars extends React.Component {
  render() {
    return (
      <Page>
        <h2 className="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
          Basic bar
        </h2>
        <div className="mb24">
          <HtmlExample code={basic} />
        </div>
        <h2 className="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
          Playback controls
        </h2>
        <div className="mb24">
          <HtmlExample code={playback} />
        </div>
      </Page>
    );
  }
}
