import React from 'react';
import { HtmlExample } from '../../html_example';
import { Page } from '../../page';

const basicSidebar = `<div class='flex h-viewport-full relative overflow-hidden'>
  <div class='w-full w240-ml absolute static-ml left bottom'>
    <div class='flex flex--column h-viewport-1/3 h-full hmax-full bg-white'>
      <div class='flex-child-grow px12 py12 overflow-auto'>
        <h3 class='txt-m txt-bold mb6'>Title here</h3>
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
      <footer class='px12 py12 bg-gray-faint txt-s'>
        Footer content here
      </footer>
    </div>
  </div>
  <div class='flex-child-grow bg-darken10 h-viewport-2/3 h-viewport-full-ml'></div>
</div>`;

const floatingSidebar = `<div class='h-viewport-full relative overflow-hidden'>
  <div class='bg-darken10 h-viewport-2/3 h-viewport-full-ml absolute top left right bottom'></div>
  <div class='absolute top-ml left bottom z1 w-full w240-ml px12 py12-ml events-none'>
    <div class='flex flex--column h-viewport-1/3 h-auto-ml hmax-full bg-white round-ml shadow-darken10 events-all'>
      <div class='px12 py12 overflow-auto'>
        <h3 class='txt-m txt-bold mb6'>Title here</h3>
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
      <footer class='px12 py12 bg-gray-faint round-b-ml txt-s'>
        Footer content here
      </footer>
    </div>
  </div>
</div>`;

export default class ExampleSidebarApps extends React.Component {
  render() {
    return (
      <Page>
        <h2 className="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
          Full height sidebar
        </h2>
        <HtmlExample code={basicSidebar} />
        <h2 className="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
          Floating full height sidebar
        </h2>
        <HtmlExample code={floatingSidebar} />
      </Page>
    );
  }
}
