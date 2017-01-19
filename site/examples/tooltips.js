import React from 'react';
import { HtmlExample } from '../html_example';

const basic = `<div class='flex-parent-inline flex-parent--center-main flex-parent--wrap'>
  <div class='bg-darken75 color-white align-center col col--12 p6 round txt-bold txt-s'>Hello world!</div>
  <span class='triangle triangle--d'></span>
</div>`;

const basic_with_closure = 
`<div class='flex-parent-inline flex-parent--center-main flex-parent--wrap'>
  <div class='bg-darken5 color-darken50 align-center col col--12 p18 round txt-bold txt-s relative'>
    <button class='absolute top right'>
      <svg class='icon link color-darken50'><use xlink:href='#icon-close'></use></svg>
    </button>
    Hello world!
  </div>
  <span class='triangle triangle--d color-gray-faint'></span>
</div>`;

class ExampleTooltips extends React.Component {
  render() {
    return (
      <div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt72 mb24 txt-l txt-bold'>
          Basic tooltip
        </h2>
        <HtmlExample code={basic} />
        <h2 className='border-b border--2 border--gray-faint pb6 mt72 mb24 txt-l txt-bold'>
          Tooltip with close button
        </h2>
        <HtmlExample code={basic_with_closure} />
      </div>
    );
  }
}

export { ExampleTooltips };
