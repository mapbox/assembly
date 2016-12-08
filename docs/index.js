import React from 'react';
import ReactDOM from 'react-dom';
import { Loader } from './styledoc-ui/lib/loader';

const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(<Loader file='../src/colors.css' />, container);
