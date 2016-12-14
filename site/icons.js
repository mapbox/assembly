import React from 'react';
import fs from 'fs';
import path from 'path';

const icons = fs.readdirSync(path.join(__dirname, '../src/svgs'))
  .map((filename) => path.basename(filename, '.svg'));

class Icons extends React.Component {
  render() {
    const iconEls = icons.map((icon) => {
      return (
        <div key={icon} className='round mr5 mb5 border border--gray pl10 pr10 pt5 pb5 flx flx-center-y'>
          <div className='mr10'>
            {icon}
          </div>
          <svg
            className='icn'
            dangerouslySetInnerHTML={{ __html: `<use xlink:href="#icon-${icon}"></use>` }}
          />
        </div>
      );
    });

    return (
      <div>
        <h1 className='txt-headline mb20'>
          Icons
        </h1>
        <p className='mb20 prose'>
          This page lists and displays all available icons. To learn more about how to use icons, look at <a href='/assembly/documentation/#Icons'>the <code>.icn</code> class documentation</a>.
        </p>
        <div className='flx flx-wrap txt-s'>
          {iconEls}
        </div>
      </div>
    );
  }
}

export { Icons };
