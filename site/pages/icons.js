import React from 'react';
import { Page } from '../page';
// eslint-disable-next-line
import iconsList from '../../_tmp_assembly/icons.json';

export default class Icons extends React.Component {
  render() {
    const { icons } = iconsList;
    const iconEls = icons.map(icon => {
      return (
        <div
          key={icon}
          className="col col--3 col--2-ml col--1-mxl mb12 py12 px3 flex flex--column flex-–center-cross"
        >
          <svg className="icon h18 w18">
            <use xlinkHref={`#icon-${icon}`} />
          </svg>
          <span className="mt12 txt-xs inline-block color-gray">{icon}</span>
        </div>
      );
    });

    return (
      <Page path="/icons/">
        <h1 className="txt-h2 mb12 txt-bold pt24">Icons</h1>
        <div className="mb36 prose">
          <p>
            Assembly comes with {icons.length} icons covering most UI design
            needs. The icons are designed to be used as embedded SVGs. For usage
            instructions, look at{' '}
            <a href="/assembly/documentation/#Icons">
              the <code>.icon</code> class documentation
            </a>.
          </p>
        </div>
        <div className="grid txt-mono align-center">{iconEls}</div>
      </Page>
    );
  }
}
