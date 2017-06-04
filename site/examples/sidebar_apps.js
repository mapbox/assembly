import React from 'react';
import { HtmlExample } from '../html_example';

const basicSidebar = `<div class='flex-parent viewport-full relative clip'>
  <div class='flex-child w-full w240-ml absolute static-ml left bottom'>
    <div class='flex-parent flex-parent--column viewport-third h-full hmax-full bg-white'>
      <div class='flex-child flex-child--grow px12 py12 scroll-auto'>
        <h3 class='txt-m txt-bold mb6'>Title here</h3>
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
      <footer class='px12 py12 bg-gray-faint txt-s'>
        Footer content here
      </footer>
    </div>
  </div>
  <div class='flex-child flex-child--grow bg-darken10 viewport-twothirds viewport-full-ml'></div>
</div>`;

const floatingSidebar = `<div class='viewport-full relative clip'>
  <div class='bg-darken10 viewport-twothirds viewport-full-ml absolute top left right bottom'></div>
  <div class='absolute top-ml left bottom z1 w-full w240-ml px12 py12-ml'>
    <div class='flex-parent flex-parent--column viewport-third h-auto-ml hmax-full bg-white round-ml shadow-darken10'>
      <div class='px12 py12 scroll-auto'>
        <h3 class='txt-m txt-bold mb6'>Title here</h3>
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
      <footer class='px12 py12 bg-gray-faint round-b-ml txt-s'>
        Footer content here
      </footer>
    </div>
  </div>
</div>`;


class ExampleSidebarApps extends React.Component {
  render() {
    return (
      <div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold'>
          Full height sidebar
        </h2>
        <HtmlExample code={basicSidebar} />
        <h2 className='border-b border--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold'>
          Floating full height sidebar
        </h2>
        <HtmlExample code={floatingSidebar} />
      </div>
    );
  }
}

export { ExampleSidebarApps };
