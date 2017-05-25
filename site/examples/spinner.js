import React from 'react';
import { HtmlExample } from '../html_example';

const spinner = `<div class='viewport-full relative'>
 <!-- the wrapper above is for documentation purposes only and not needed in practice !-->
  <div class='flex-parent flex-parent--center-cross flex-parent--center-main absolute top right bottom left bg-darken10 z5'>
    <div class='flex-child loading'></div>
  </div>
</div>`;


class ExampleSpinner extends React.Component {
  render() {
    return (
      <div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold'>
          Full width spinner
        </h2>
        <HtmlExample code={spinner} />
      </div>
    );
  }
}

export { ExampleSpinner };
