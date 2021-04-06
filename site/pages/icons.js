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
          className="col--6 col--4-ml col--3-mxl flex-parent flex-parent--center-cross flex-child px12 py12 border-b border-t border-l ml-neg1 mb-neg1 border-r border--gray-light"
        >
          <svg className="icon h18 w18 mr3">
            <use xlinkHref={`#icon-${icon}`} />
          </svg>
          <span className="txt-s color-gray">{icon}</span>
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
        <div className="flex-parent flex-parent--wrap txt-mono">{iconEls}</div>
      </Page>
    );
  }
}
