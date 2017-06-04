import React from 'react';
import { HtmlExample } from '../html_example';

const basicLegend = `<div class='w240 round shadow-darken5 px12 py12 txt-s'>
  <strong class='block mb6'>Title description</strong>
  <div class='flex-parent mb6'>
    <div class='flex-child flex-child--grow bg-blue-faint h12'></div>
    <div class='flex-child flex-child--grow bg-blue-light h12'></div>
    <div class='flex-child flex-child--grow bg-blue h12'></div>
    <div class='flex-child flex-child--grow bg-blue-dark h12'></div>
    <div class='flex-child flex-child--grow bg-red-faint h12'></div>
    <div class='flex-child flex-child--grow bg-red-light h12'></div>
    <div class='flex-child flex-child--grow bg-red h12'></div>
    <div class='flex-child flex-child--grow bg-red-dark h12'></div>
  </div>
  <div class='flex-parent txt-xs'>
    <div class='flex-child flex-child--grow'>Low</div>
    <div class='flex-child flex-child--grow align-r'>High</div>
  </div>
</div>`;

const basicLegendTwo = `<div class='w240 round shadow-darken5 px12 py12 txt-s'>
  <strong class='block mb6'>Title description</strong>
  <div class='flex-parent mb6'>
    <div class='flex-child flex-child--grow bg-green-faint h12'></div>
    <div class='flex-child flex-child--grow bg-green-light h12'></div>
    <div class='flex-child flex-child--grow bg-green h12'></div>
    <div class='flex-child flex-child--grow bg-green-dark h12'></div>
  </div>
  <div class='flex-parent txt-xs'>
    <div class='flex-child flex-child--grow align-center'>0</div>
    <div class='flex-child flex-child--grow align-center'>25</div>
    <div class='flex-child flex-child--grow align-center'>50</div>
    <div class='flex-child flex-child--grow align-center'>75</div>
  </div>
</div>`;

const radiusLegend = `<div class='w240 round shadow-darken5 px12 py12 txt-s'>
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
  <div class='flex-parent txt-xs align-center'>
    <div class='flex-child flex-child--grow wmin24'>3</div>
    <div class='flex-child flex-child--grow wmin24'>6</div>
    <div class='flex-child flex-child--grow wmin24'>12</div>
    <div class='flex-child flex-child--grow wmin24'>18</div>
    <div class='flex-child flex-child--grow wmin24'>24</div>
  </div>
</div>`;

class ExampleLegends extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export { ExampleLegends };
