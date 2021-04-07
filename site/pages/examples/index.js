import React from 'react';
import examplesSubNavigationList from '@mapbox/batfish/data/examples-sub-navigation-list'; // eslint-disable-line
import { Page } from '../../page';

export default class Examples extends React.Component {
  getExamplesList() {
    return examplesSubNavigationList.map((child, i) => {
      return (
        <div className="col w-1/2" key={i}>
          <a className="block link py3" href={`/assembly${child.route}`}>
            {child.name}
          </a>
        </div>
      );
    });
  }

  render() {
    return (
      <Page path="/examples/">
        <div className="py24">
          <h1 className="txt-h2 txt-bold mb18">Examples</h1>
          <p className="col w-1/2-ml">
            To effectively use Assembly, you must "assemble" many classes
            together into UI components and page layouts. The examples both
            demonstrate how to use Assembly, and they function as practical,
            reusable, customizable exmaples that can be directly copy and
            pasted. All the examples are fully responsive.
          </p>
        </div>
        <div className="grid grid--gut24">{this.getExamplesList()}</div>
      </Page>
    );
  }
}
