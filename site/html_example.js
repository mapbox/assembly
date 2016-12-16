import React from 'react';
import Lowlight from 'react-lowlight';
import xmlLanguage from 'highlight.js/lib/languages/xml';

Lowlight.registerLanguage('html', xmlLanguage);

function HtmlExample(props) {
  return (
    <div className='grid grid--gut10'>
      <div className='col col--6'>
        <div
          className='border border--2 border--blue round p20'
          dangerouslySetInnerHTML={{ __html: props.code }}
        />
      </div>
      <div className='col col--6'>
        <Lowlight
          language='html'
          value={props.code}
        />
      </div>
    </div>
  );
}

export { HtmlExample };
