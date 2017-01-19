import React from 'react';
import { HtmlExample } from '../html_example';

const tiles = `<div class='bg-darken10 viewport-half'>
<!-- In practice, it makes sense to use this for the container instead:
<div class='fixed top right bottom left scroll-auto'></div>-->
  <div class='flex-parent flex-parent--center-main pt48'>
    <div class='flex-child bg-white round relative w480'>
      <button class='absolute top right p12'>
        <svg class='icon link color-darken50'><use xlink:href='#icon-close'></use></svg>
      </button>
      <div class='p24'>
        <div class='txt-l mb12'>Modal title</div>
        <div class='txt-m'>
          I am some modal body content.
        </div>
      </div>
    </div>
  </div>
</div>`;

class ExampleModal extends React.Component {
  render() {
    return (
      <div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt72 mb24 txt-l txt-bold'>
          Modal component
        </h2>
        <HtmlExample code={tiles} />
      </div>
    );
  }
}

export { ExampleModal };
