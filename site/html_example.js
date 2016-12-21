import React from 'react';
import Lowlight from 'react-lowlight';
import xmlLanguage from 'highlight.js/lib/languages/xml';

Lowlight.registerLanguage('html', xmlLanguage);

function HtmlExample(props) {
  return (
    <div>
        <div
          className='border mb12 border--dash border--darken10 p12 round'
          dangerouslySetInnerHTML={{ __html: props.code }}
        />
      <div className='pre bg-gray-faint scroll-auto hmax180 round'>
        <Lowlight
          language='html'
          value={props.code}
        />
      </div>
    </div>
  );
}

export { HtmlExample };
