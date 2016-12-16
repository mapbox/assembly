import React from 'react';
import fs from 'fs';
import path from 'path';
import Lowlight from 'react-lowlight';
import jsLanguage from 'highlight.js/lib/languages/javascript';

Lowlight.registerLanguage('js', jsLanguage);

const icons = fs.readdirSync(path.join(__dirname, '../src/svgs'))
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
        <div key={icon} className='round mr5 mb5 border border--gray pl10 pr10 pt5 pb5 flex flex-center-y'>
          <div className='mr10'>
            {icon}
          </div>
          <svg
            className='icon'
            dangerouslySetInnerHTML={{ __html: `<use xlink:href="#icon-${icon}"></use>` }}
          />
        </div>
      );
    });

    return (
      <div>
        <h1 className='txt-headline'>
          Icons
        </h1>

        <h2 className='txt-subhead mb10 mt30'>
          Available icons
        </h2>
        <div className='mb20 prose'>
          Below are all available icons. To learn more about how to use icons, look at <a href='/assembly/documentation/#Icons'>the <code>.icon</code> class documentation</a>.
        </div>
        <div className='flex flex-wrap txt-s'>
          {iconEls}
        </div>

        <h2 className='txt-subhead mb10 mt30'>
          Programmatically adding icons with JavaScript
        </h2>
        <div className='mb10 prose'>
          You must use special DOM methods that handle namespaces to create and add attributes SVG elements programmatically. This function should do the trick for creating an icon element, which you can then add where you need it. Modify as needed with modifier classes (documented in <a href='/assembly/documentation/#Icons'>the <code>.icon</code> class documentation</a>).
        </div>
        <pre className='code-block'>
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
