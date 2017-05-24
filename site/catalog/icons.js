import React from 'react';
import fs from 'fs';
import path from 'path';

const icons = fs.readdirSync(path.join(__dirname, '../../src/svgs'))
  .filter((filename) => filename.endsWith('.svg'))
  .map((filename) => path.basename(filename, '.svg'));

// Don't need so many icons
const slicedIcons = icons.slice(0, 3);

const fontSizes = [
  'txt-h4',
  'txt-h5',
  'txt-xl',
  'txt-l',
  'txt-m',
  'txt-s'
];

const smallFontSizes = [
  'txt-h5',
  'txt-m',
  'txt-s',
  'txt-xs'
];

const largeFontSizes = [
  'txt-h1',
  'txt-h2',
  'txt-h3',
  'txt-xl',
  'txt-l',
  'txt-m',
  'txt-s',
  'txt-xs'
];

const getIconEl = (icon, i) => {

  const style = { boxShadow: '0 0 1px 0 red' };
  const style2 = { boxShadow: '0 0 1px 0 teal' };

  return (
    <div key={i} className='relative mb24 pb12 border-b border--gray-faint'>
      <svg style={style} className='absolute top right icon'>
        <use xlinkHref={`#icon-${icon}`} />
      </svg>

      {fontSizes.map((f) => <div style={style2} className={`${f} mb12`}>
        <svg style={style} className='icon icon--inline'>
          <use xlinkHref={`#icon-${icon}`} />
        </svg>
        <span style={style}>Curabitur blandit tempus porttitor.</span>
        <svg style={style} className='icon icon--inline'>
          <use xlinkHref={`#icon-${icon}`} />
        </svg>
        </div>)}
    </div>
  );

};

const getLargeIconEl = (icon, i) => {

  const style = { boxShadow: '0 0 1px 0 red' };
  const style2 = { boxShadow: '0 0 1px 0 teal' };

  return (
    <div key={i} className='relative mb24 pb24 border-b border--gray-faint'>
      <svg style={style} className='absolute top right icon'>
        <use xlinkHref={`#icon-${icon}`} />
      </svg>

      {largeFontSizes.map((f) => <div style={style2} className={`${f} mb12`}>
        <svg style={style} className='icon icon--l icon--l--inline'>
          <use xlinkHref={`#icon-${icon}`} />
        </svg>
        <span style={style}>Curabitur blandit tempus porttitor.</span>
        <svg style={style} className='icon icon--l icon--l--inline'>
          <use xlinkHref={`#icon-${icon}`} />
        </svg>
        </div>)}
    </div>
  );

};

const getSmallIconEl = (icon, i) => {

  const style = { boxShadow: '0 0 1px 0 red' };
  const style2 = { boxShadow: '0 0 1px 0 teal' };

  return (
    <div key={i} className='relative mb24 pb24 border-b border--gray-faint'>
      <svg style={style} className='absolute top right icon'>
        <use xlinkHref={`#icon-${icon}`} />
      </svg>

      {smallFontSizes.map((f) => <div style={style2} className={`${f} mb12`}>
        <svg style={style} className='icon icon--s icon--s--inline'>
          <use xlinkHref={`#icon-${icon}`} />
        </svg>
        <span style={style}>Curabitur blandit tempus porttitor.</span>
        <svg style={style} className='icon icon--s icon--s--inline'>
          <use xlinkHref={`#icon-${icon}`} />
        </svg>
        </div>)}
    </div>
  );

};

class Icons extends React.Component {
  render() {
    const smallIconEls = slicedIcons.map(getSmallIconEl);
    const iconEls = slicedIcons.map(getIconEl);
    const largeIconEls = slicedIcons.map(getLargeIconEl);

    return (
      <div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt72 mb24 txt-l txt-bold'>
          Icons
        </h2>

        <div className='mb12 txt-m txt-bold color-darken50 txt-uppercase txt-s'>Regular icons</div>
        {iconEls}

        <div className='mb12 txt-m txt-bold color-darken50 txt-uppercase txt-s'>Small icons</div>
        {smallIconEls}

        <div className='mb12 txt-m txt-bold color-darken50 txt-uppercase txt-s'>Large icons</div>
        {largeIconEls}
      </div>
    );
  }
}

export { Icons };
