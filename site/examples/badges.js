import React from 'react';
import { HtmlExample } from '../html_example';

const simple = `<div class='bg-blue-faint color-blue inline-block px6 py3 txt-xs txt-bold round-full'>
  screamin dealz
</div>`;

const tip = `<div class='bg-green-faint color-green inline-block px6 py3 txt-xs txt-bold round-full'>
  <svg class='icon icon--s inline-block align-middle'><use xlink:href='#icon-info'></use></svg>
  Did you know?
</div>`;

const warning = `<div class='bg-orange-faint color-orange-dark inline-block px6 py3 txt-xs txt-bold round-full'>
  Heads up!
  <button>
    <svg class='icon icon--s inline-block align-middle ml3'><use xlink:href='#icon-close'></use></svg>
  </button>
</div>`;

const chip = `<div class='flex-parent flex-parent--center-cross flex-parent-inline relative w240'>
  <div class='bg-blue-faint round-l col col--6 px12 py12'>
    <strong class='txt-s color-blue'>This</strong>
  </div>
  <span class='triangle triangle--r mr-neg12 z1 color-blue-faint'></span>
  <div class='bg-blue round-r col col--6 px12 py12 pl24'>
    <strong class='txt-s color-blue-faint'>is that</strong>
  </div>
</div>`;

class ExampleBadges extends React.Component {
  render() {
    return (
      <div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold'>
          Badges
        </h2>
        <div className='mb24'>
          <HtmlExample code={simple} />
        </div>
        <div className='mb24'>
          <HtmlExample code={tip} />
        </div>
        <div className='mb24'>
          <HtmlExample code={warning} />
        </div>
        <div>
          <HtmlExample code={chip} />
        </div>
      </div>
    );
  }
}

export { ExampleBadges };
