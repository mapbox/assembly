import React from 'react';
import { Loader } from './lib/loader';

class Docs extends React.Component {
  render() {
    return (<Loader file='../dist/base-core.css' />);
  }
}

export { Docs };
