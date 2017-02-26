import React from 'react';
import fs from 'fs';
import path from 'path';
import Lowlight from 'react-lowlight';
import jsLanguage from 'highlight.js/lib/languages/javascript';

Lowlight.registerLanguage('js', jsLanguage);

const icons = fs.readdirSync(path.join(__dirname, '../src/svgs'))
  .filter((filename) => filename.endsWith('.svg'))
  .map((filename) => path.basename(filename, '.svg'));

const jsSnippet = `function createIcon(icon) {
  var svgNS = 'http://www.w3.org/2000/svg';
  var xlinkNS = 'http://www.w3.org/1999/xlink';
  var svg = document.createElementNS(svgNS, 'svg');
  svg.setAttributeNS(null, 'class', 'icon');
  var use = document.createElementNS(svgNS, 'use');
  use.setAttributeNS(xlinkNS, 'xlink:href', '#icon-' + icon);
  svg.appendChild(use);
  return svg;
}`;

class Icons extends React.Component {
  render() {
    const iconEls = icons.map((icon) => {
      return (
        <div key={icon} className='col--6 col--4-ml col--3-mxl flex-parent flex-parent--center-cross flex-child p12 border-b border-t border-l ml-neg1 mb-neg1 border-r border--gray-light'>
          <svg
            className='icon mr12'
            dangerouslySetInnerHTML={{ __html: `<use xlink:href="#icon-${icon}"></use>` }}
          />
          <span className='color-gray'>{icon}</span>
        </div>
      );
    });

    return (
      <div>
        <h1 className='txt-subhead mb12 txt-bold pt24'>
          Icons
        </h1>
        <div className='mb48 prose col col--6-mm'>
          <p>Assembly comes with {icons.length} icons covering most UI design needs. The icons are designed to be used as embedded SVGs. For usage instructions, look at <a href='/assembly/documentation/#Icons'>the <code>.icon</code> class documentation</a>.</p>
        </div>
        <div className='flex-parent flex-parent--wrap txt-mono txt-s'>
          {iconEls}
        </div>

        <h2 className='pt24 txt-bold txt-uppercase mb12 mt24'>
          Programmatically adding icons with JavaScript
        </h2>
        <div className='mb24'>
          To add icons to the page programmatically, you must use special DOM methods that handle XML namespaces. The following function creates an icon element, which you can then add to the DOM where you need it. You can also modify the icon as needed with <a href='/assembly/documentation/#Icons'>icon modifier classes</a>.
        </div>
        <pre className='pre'>
          <code>
            <Lowlight
              language='js'
              value={jsSnippet}
            />
          </code>
        </pre>
      </div>
    );
  }
}

export { Icons };
