import React from 'react';
import { HtmlExample } from '../html_example';

const inputWithButton = `<div class='flex-parent'>
  <input class='input border-r--0 round-l' placeholder='Search'>
  <button class='btn px24 round-r'>Search</button>
</div>`;

const inputWithIcon = `<div class='relative'>
  <div class='absolute flex-parent flex-parent--center-cross flex-parent--center-main w36 h36'>
    <svg class='icon'><use xlink:href='#icon-search'></use></svg>
  </div>
  <input class='input pl36' placeholder='Search'>
</div>`;

const inputWithSpinner = `<div class='relative'>
  <div class='absolute top right flex-parent flex-parent--center-cross flex-parent--center-main w36 h36'>
    <span class='loading loading--s' />
  </div>
  <input class='input pr36' placeholder='Search'>
</div>`;

class ExampleInputs extends React.Component {
  render() {
    return (
      <div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt72 mb24 txt-l txt-bold'>
          Input with button
        </h2>
        <HtmlExample code={inputWithButton} />
        <h2 className='border-b border--2 border--gray-faint pb6 mt48 mb24 txt-l txt-bold'>
          Input with icon
        </h2>
        <HtmlExample code={inputWithIcon} />
        <h2 className='border-b border--2 border--gray-faint pb6 mt48 mb24 txt-l txt-bold'>
          Input with spinner
        </h2>
        <HtmlExample code={inputWithSpinner} />
      </div>
    );
  }
}

export { ExampleInputs };
