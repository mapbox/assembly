import React from 'react';
import Lowlight from 'react-lowlight';
import xmlLanguage from 'highlight.js/lib/languages/xml';

Lowlight.registerLanguage('html', xmlLanguage);

function HtmlExample(props) {
  return (
    <div>
        <div
          className='mb12'
          dangerouslySetInnerHTML={{ __html: props.code }}
        />
      <div className='code-block bg-gray-faint scroll-auto hmax96 round'>
        <Lowlight
          language='html'
          value={props.code}
        />
      </div>
    </div>
  );
}

export { HtmlExample };
