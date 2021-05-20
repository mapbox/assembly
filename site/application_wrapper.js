import React from 'react';

if (typeof window !== 'undefined') {
  import(/* webpackChunkName: "assembly-js" */ '../dist/assembly.js'); // eslint-disable-line import/no-unresolved
}

export default class ApplicationWrapper extends React.Component {
  render() {
    return this.props.children;
  }
}
