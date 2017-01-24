import React from 'react';
import { HtmlExample } from '../html_example';

const fixed_header = `<div class='bg-darken10 viewport-half'>
<!-- In practice, it makes sense to use this for the container instead:
<div class='absolute top right bottom left'></div>-->
  <div class='flex-parent p12 bg-blue txt-m txt-bold color-white'>Fixed header</div>
</div>`;

class ExampleFixedHeader extends React.Component {
  render() {
    return (
      <div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt72 mb24 txt-l txt-bold'>
          Fixed header
        </h2>
        <HtmlExample code={fixed_header} />
      </div>
    );
  }
}

export { ExampleFixedHeader };
