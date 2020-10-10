import React from 'react';
import { HtmlExample } from '../../html_example';
import { Page } from '../../page';

const tiles = `<div class='bg-darken10 viewport-half'>
<!-- In practice, it makes sense to use this for the container instead:
<div class='fixed top right bottom left overflow-auto'></div>-->
  <div class='flex-parent flex-parent--center-main pt36'>
    <div class='flex-child bg-white round relative w600'>
      <button class='absolute top right px12 py12'>
        <svg class='icon link color-darken50'><use xlink:href='#icon-close'></use></svg>
      </button>
      <div class='px24 py24'>
        <div class='txt-l mb12'>Modal title</div>
        <div class='txt-m'>
          I am some modal body content.
        </div>
      </div>
    </div>
  </div>
</div>`;

export default class ExampleModal extends React.Component {
  render() {
    return (
      <Page>
        <h2 className="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
          Modal component
        </h2>
        <HtmlExample code={tiles} />
      </Page>
    );
  }
}
