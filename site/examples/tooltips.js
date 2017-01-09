import React from 'react';
import { HtmlExample } from '../html_example';

const basic = `<div class='flex-parent flex-parent--center-main flex-parent--wrap flex-parent-inline'>
  <div class='bg-darken75 color-white align-center col col--12 p6 round txt-bold txt-s'>Hello world!</div>
  <span class='triangle triangle--d'></span>
</div>`;

class ExampleTooltips extends React.Component {
  render() {
    return (
      <div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt72 mb24 txt-l txt-bold'>
          Basic tooltip
        </h2>
        <HtmlExample code={basic} />
      </div>
    );
  }
}

export { ExampleTooltips };
