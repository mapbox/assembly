import React from 'react';
import { HtmlExample } from '../html_example';

const basic = `<div class='h12 bg-darken10 relative round-full'>
  <div class='absolute h12 bg-green-light round-full' style='width:50%;'></div>
</div>`;

class ExampleProgressBars extends React.Component {
  render() {
    return (
      <div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt48 mb24 txt-l txt-bold'>
          Basic bar
        </h2>
        <div className='mb24'>
          <HtmlExample code={basic} />
        </div>
      </div>
    );
  }
}

export { ExampleProgressBars };
