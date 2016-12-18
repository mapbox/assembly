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
        <div key={icon} className='round mr6 mb6 border border--gray pl12 pr12 pt6 pb6 flex-parent flex-parent--center-cross'>
          <div className='mr12'>
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

        <h2 className='txt-subhead mb12 mt24'>
          Available icons
        </h2>
        <div className='mb18 prose'>
          Below are all available icons. To learn more about how to use icons, look at <a href='/assembly/documentation/#Icons'>the <code>.icon</code> class documentation</a>.
        </div>
        <div className='flex-parent flex-parent--wrap txt-s'>
          {iconEls}
        </div>

        <h2 className='txt-subhead mb12 mt24'>
          Programmatically adding icons with JavaScript
        </h2>
        <div className='mb12 prose'>
          To add icons to the page programmatically, you must use special DOM methods that handle XML namespaces. The following function creates an icon element, which you can then add to the DOM where you need it. You can also modify the icon as needed with <a href='/assembly/documentation/#Icons'>icon modifier classes</a>.
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
