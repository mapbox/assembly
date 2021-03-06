import React from 'react';
import { HtmlExample } from '../../html_example';
import { Page } from '../../page';

const menuNavigation = `<nav>
  <a class='inline-flex btn color-blue color-white-on-active bg-transparent bg-darken10-on-hover bg-blue-on-active txt-s ml3 is-active' href='#'>
    <svg class='icon txt-m mr6'><use xlink:href='#icon-home'/></svg> Home
  </a>
  <a class='inline-flex btn color-blue color-white-on-active bg-transparent bg-darken10-on-hover bg-blue-on-active txt-s ml3' href='#'>
    <svg class='icon txt-m mr6'><use xlink:href='#icon-user'/></svg> Account
  </a>
  <a class='inline-flex btn color-blue color-white-on-active bg-transparent bg-darken10-on-hover bg-blue-on-active txt-s ml3' href='#'>
    <svg class='icon txt-m mr6'><use xlink:href='#icon-logout'/></svg> Logout
  </a>
</nav>`;

const underlinedTabs = `<div class='bg-gray border-b border--black flex h40 txt-bold txt-s'>
  <button class='mb-neg1 px12 py6 border-b border--black border--white-on-active color-lighten50 color-white-on-active color-lighten75-on-hover'>One</button>
  <button class='mb-neg1 px12 py6 border-b border--black border--white-on-active color-lighten50 color-white-on-active color-lighten75-on-hover is-active'>Active</button>
  <button class='mb-neg1 px12 py6 border-b border--black border--white-on-active color-lighten50 color-white-on-active color-lighten75-on-hover'>Two</button>
</div>
<div class='bg-darken75 color-white px12 py12'>
  Changing content
</div>`;

const breadcrumbs = `<div class='inline-flex flex--center-cross txt-s'>
  <a href='#' class='link link--darken50'>One</a>
  <svg class='icon'><use xlink:href='#icon-caret-right'/></svg>
  <a href='#' class='link link--darken50'>Two</a>
  <svg class='icon'><use xlink:href='#icon-caret-right'/></svg>
  <span class='txt-bold'>Three</span>
</div>`;

export default class ExampleNavigation extends React.Component {
  render() {
    return (
      <Page>
        <h2 className="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
          Main navigation
        </h2>
        <HtmlExample code={menuNavigation} />
        <h2 className="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
          Underlined tabs
        </h2>
        <HtmlExample code={underlinedTabs} />
        <h2 className="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
          Breadcrumbs
        </h2>
        <HtmlExample code={breadcrumbs} />
      </Page>
    );
  }
}
