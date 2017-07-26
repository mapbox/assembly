import React from 'react';
import { HtmlExample } from '../../html_example';
import { Page } from '../../page';

const basicLegend = `<div class='w240 round shadow-darken10 px12 py12 txt-s'>
  <strong class='block mb6'>Title description</strong>
  <div class='grid mb6'>
    <div class='col bg-blue-faint h12'></div>
    <div class='col bg-blue-light h12'></div>
    <div class='col bg-blue h12'></div>
    <div class='col bg-blue-dark h12'></div>
    <div class='col bg-red-faint h12'></div>
    <div class='col bg-red-light h12'></div>
    <div class='col bg-red h12'></div>
    <div class='col bg-red-dark h12'></div>
  </div>
  <div class='grid txt-xs'>
    <div class='col flex-child--grow'>Low</div>
    <div class='col flex-child--grow align-r'>High</div>
  </div>
</div>`;

const basicLegendTwo = `<div class='w240 round shadow-darken10 px12 py12 txt-s'>
  <strong class='block mb6'>Title description</strong>
  <div class='grid mb6'>
    <div class='col bg-green-faint h12'></div>
    <div class='col bg-green-light h12'></div>
    <div class='col bg-green h12'></div>
    <div class='col bg-green-dark h12'></div>
  </div>
  <div class='grid txt-xs'>
    <div class='col align-center'>0</div>
    <div class='col align-center'>25</div>
    <div class='col align-center'>50</div>
    <div class='col align-center'>75</div>
  </div>
</div>`;

const radiusLegend = `<div class='w240 round shadow-darken10 px12 py12 txt-s'>
  <strong class='block mb6'>Title description</strong>
  <div class='flex-parent flex-parent--center-main flex-parent--center-cross align-center'>
    <div class='flex-child flex-child--grow wmin24'>
      <span class='inline-block w3 h3 round-full bg-blue'></span>
    </div>
    <div class='flex-child flex-child--grow wmin24'>
      <span class='inline-block w6 h6 round-full bg-blue'></span>
    </div>
    <div class='flex-child flex-child--grow wmin24'>
      <span class='inline-block w12 h12 round-full bg-blue'></span>
    </div>
    <div class='flex-child flex-child--grow wmin24'>
      <span class='inline-block w18 h18 round-full bg-blue'></span>
    </div>
    <div class='flex-child flex-child--grow wmin24'>
      <span class='inline-block w24 h24 round-full bg-blue'></span>
    </div>
  </div>
  <div class='grid txt-xs align-center'>
    <div class='col wmin24'>3</div>
    <div class='col wmin24'>6</div>
    <div class='col wmin24'>12</div>
    <div class='col wmin24'>18</div>
    <div class='col wmin24'>24</div>
  </div>
</div>`;

export default class ExampleLegends extends React.Component {
  render() {
    return (
      <Page>
        <h2 className='border-b border--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold'>
          Legend with bars
        </h2>
        <div className='mb24'>
          <HtmlExample code={basicLegend} />
        </div>
        <HtmlExample code={basicLegendTwo} />
        <h2 className='border-b border--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold'>
          Legend with varying radius
        </h2>
        <HtmlExample code={radiusLegend} />
      </Page>
    );
  }
}
