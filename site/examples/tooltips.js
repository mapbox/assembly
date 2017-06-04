import React from 'react';
import { HtmlExample } from '../html_example';

const basic = `<div class='flex-parent-inline flex-parent--center-cross flex-parent--column'>
  <div class='flex-child px6 py6bg-darken75 color-white align-center  round txt-bold txt-s'>Hello world!</div>
  <span class='flex-child triangle triangle--d'></span>
</div>`;

const basic_right = `<div class='flex-parent-inline flex-parent--center-cross'>
  <span class='flex-child triangle triangle--l'></span>
  <div class='flex-child px6 py6round txt-bold txt-s align-center bg-darken75 color-white'>Hello world!</div>
</div>`;

const basic_left = `<div class='flex-parent-inline flex-parent--center-cross'>
  <div class='flex-child px6 py6round txt-bold txt-s align-center bg-darken75 color-white'>Hello world!</div>
  <span class='flex-child triangle triangle--r'></span>
</div>`;

const basic_with_closure = `<div class='flex-parent-inline flex-parent--center-cross flex-parent--column'>
  <div class='flex-child relative px18 py18round txt-bold txt-s align-center bg-darken75 color-white'>
    <button class='flex-child absolute top right'>
      <svg class='flex-child icon link color-white'><use xlink:href='#icon-close'></use></svg>
    </button>
    Hello world!
  </div>
  <span class='flex-child triangle triangle--d color-darken75'></span>
</div>`;


class ExampleTooltips extends React.Component {
  render() {
    return (
      <div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold'>
          Basic tooltip
        </h2>
        <HtmlExample code={basic} />
        <h2 className='border-b border--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold'>
          Basic tooltip (right)
        </h2>
        <HtmlExample code={basic_right} />
        <h2 className='border-b border--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold'>
          Basic tooltip (left)
        </h2>
        <HtmlExample code={basic_left} />
        <h2 className='border-b border--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold'>
          Tooltip with close button
        </h2>
        <HtmlExample code={basic_with_closure} />
      </div>
    );
  }
}

export { ExampleTooltips };
