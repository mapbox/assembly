import React from 'react';
import { Page } from '../page';
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
          <svg className="icon w18 h18 mr12">
            <use xlinkHref={`#icon-${icon}`} />
          </svg>
          <span className="color-gray">{icon}</span>
        </div>
      );
    });

    return (
      <Page>
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
        <div className="flex-parent flex-parent--wrap txt-mono txt-s">
          {iconEls}
        </div>

        <h2 className="pt24 txt-bold txt-uppercase mb12 mt24">
          Programmatically work with icons in JavaScript
        </h2>
        <div className="mb24 prose">
          To add icons to the page or edit them programmatically, you must use
          special DOM methods that handle XML namespaces. To facilitate this,{' '}
          <code>assembly.js</code> exposes a few functions on a global{' '}
          <code>Assembly</code> namespace.
        </div>
        <h3 className="mb12 mt24 txt-bold">
          <code className="txt-code">
            Assembly.createIcon(iconName: string): SVGElement
          </code>
        </h3>
        <div className="prose">
          <p>
            Returns an SVG element containing a <code>{'<use>'}</code> element
            referencing the designated icon.
          </p>
          <p>
            Throws an error if the designated icon does not exist in Assembly.
          </p>
        </div>
        <h3 className="mb12 mt24 txt-bold">
          <code className="txt-code">
            Assembly.changeIcon(iconEl: SVGElement, iconName: string):
            SVGElement
          </code>
        </h3>
        <div className="prose">
          <p>
            Given an icon SVG element (<em>not</em> the <code>{'<use>'}</code>{' '}
            element inside it), such as what <code>Assembly.createIcon</code>{' '}
            returns, changes the icon and returns the SVG element.
          </p>
          <p>
            Throws an error if the designated icon does not exist in Assembly.
          </p>
        </div>
        <h3 className="mb12 mt24 txt-bold">
          <code className="txt-code">
            Assembly.iconExists(iconName: string): boolean
          </code>
        </h3>
        <div className="prose">
          <p>
            Returns a boolean indicating whether an icon exists in Assembly.
          </p>
        </div>
      </Page>
    );
  }
}
