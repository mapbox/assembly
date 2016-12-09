import React from 'react';
import ReactDOM from 'react-dom';
import { Loader } from './documentation/lib/loader';

const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(<Loader file='../dist/base-core.css' />, container);
