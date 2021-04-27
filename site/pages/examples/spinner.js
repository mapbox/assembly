import React from 'react';
import { HtmlExample } from '../../html_example';
import { Page } from '../../page';

const spinner = `<div class='h-viewport-full relative'>
 <!-- the wrapper above is for documentation purposes only and not needed in practice !-->
  <div class='flex flex--center-cross flex--center-main absolute top right bottom left bg-darken10 z5'>
    <div class='loading'></div>
  </div>
</div>`;

export default class ExampleSpinner extends React.Component {
  render() {
    return (
      <Page>
        <h2 className="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
          Full width spinner
        </h2>
        <HtmlExample code={spinner} />
      </Page>
    );
  }
}
