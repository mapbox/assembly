import React from 'react';
import { HtmlExample } from '../html_example';

const spinner = `<div class='flex-parent flex-parent--center-cross flex-parent--center-main viewport-full relative clip'>
  <div class='flex-child flex-child--grow bg-darken10 viewport-twothirds viewport-full-ml'>
    <div class='flex-child loading'></div>
  </div>
</div>`;


class ExampleSpinner extends React.Component {
  render() {
    return (
      <div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt72 mb24 txt-l txt-bold'>
          Full width spinner
        </h2>
        <HtmlExample code={spinner} />
      </div>
    );
  }
}

export { ExampleSpinner };
