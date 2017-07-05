import React from 'react';
import { HtmlExample } from '../html_example';

const html = `<div class='grid grid--gut12 flex-parent--stretch-cross'>
  <div class='col col--4'>
    <div class='h-full bg-darken10 px12 py12'>
      <div class='bg-darken10 h60'></div>
    </div>
  </div>
  <div class='col col--4'>
    <div class='h-full bg-darken10 px12 py12'>
      <div class='bg-darken10 h60'></div>
    </div>
  </div>
  <div class='col col--4'>
    <div class='h-full bg-darken10 px12 py12'>
      <div class='bg-darken10 h120'></div>
    </div>
  </div>
</div>`;

class ExampleEqualHeightColumns extends React.Component {
  render() {
    return (
      <div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold'>
          Equal-height columns
        </h2>
        <div className='prose mb24'>
          <p>This effect is easy, of course, if you can fix the height of the columns. Often, though, that's not what you want. If you want columns to have equal heights <em>based on the column with the tallest content</em>, you need some flexbox powers.</p>
          <p>The key here is to add <code>flex-parent--stretch-cross</code> to the <code>grid</code>, and add <code>h-full</code> to the <em>child</em> of the <code>col</code> element, which is the one with the background color.</p>
        </div>
        <HtmlExample code={html} />
      </div>
    );
  }
}

export { ExampleEqualHeightColumns };
