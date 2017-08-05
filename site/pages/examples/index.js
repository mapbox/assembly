/*---
injectedData:
  - examplesSubNavigationList
---*/
import React from 'react';
import { Page } from '../../page';

export default class Examples extends React.Component {
  getExamplesList() {
    return this.props.injectedData.examplesSubNavigationList.map((child, i) => {
      return (
        <div className="col col--4" key={i}>
          <a className="block link py3" href={`/assembly${child.route}`}>
            {child.name}
          </a>
        </div>
      );
    });
  }

  render() {
    return (
      <Page>
        <div className="py24">
          <h1 className="txt-h2 txt-bold mb18">Examples</h1>
          <p className="col col--6-ml">
            To effectively use Assembly, you must "assemble" many classes
            together into UI components and page layouts. The examples both
            demonstrate how to use Assembly, and they function as practical,
            reusable, customizable exmaples that can be directly copy and
            pasted. All the examples are fully responsive.
          </p>
        </div>
        <div className="grid grid--gut24">
          {this.getExamplesList()}
        </div>
      </Page>
    );
  }
}
