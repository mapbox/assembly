import React from 'react';

if (typeof window !== 'undefined') {
  import(/* webpackChunkName: "assembly-js" */ '../dist/assembly.js');
}

export default class ApplicationWrapper extends React.Component {
  render() {
    return this.props.children;
  }
}
