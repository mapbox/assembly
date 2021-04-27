import React from 'react';
import { HtmlExample } from '../../html_example';
import { Page } from '../../page';

const simple = `<div class='bg-blue-faint color-blue inline-block px6 py3 txt-xs txt-bold round-full'>
  screamin dealz
</div>`;

const tip = `<div class='bg-green-lighter color-green-deep inline-block px6 py3 txt-xs txt-bold round-full'>
  <svg class='icon w15 h15 inline-block align-middle'><use xlink:href='#icon-info'></use></svg>
  Did you know?
</div>`;

const warning = `<div class='bg-orange-faint color-orange-dark inline-block px6 py3 txt-xs txt-bold round-full'>
  Heads up!
  <button>
    <svg class='icon w15 h15 inline-block align-middle ml3'><use xlink:href='#icon-close'></use></svg>
  </button>
</div>`;

const chip = `<div class='flex flex--center-cross inline-flex relative w240'>
  <div class='bg-blue-faint round-l col w-1/2 px12 py12'>
    <strong class='txt-s color-blue'>This</strong>
  </div>
  <span class='triangle triangle--r mr-neg12 z1 color-blue-faint'></span>
  <div class='bg-blue round-r col w-1/2 px12 py12 pl24'>
    <strong class='txt-s color-blue-faint'>is that</strong>
  </div>
</div>`;

export default class ExampleBadges extends React.Component {
  render() {
    return (
      <Page>
        <h2 className="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
          Badges
        </h2>
        <div className="mb24">
          <HtmlExample code={simple} />
        </div>
        <div className="mb24">
          <HtmlExample code={tip} />
        </div>
        <div className="mb24">
          <HtmlExample code={warning} />
        </div>
        <div>
          <HtmlExample code={chip} />
        </div>
      </Page>
    );
  }
}
