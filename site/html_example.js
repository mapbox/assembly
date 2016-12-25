import React from 'react';
import Lowlight from 'react-lowlight';
import xmlLanguage from 'highlight.js/lib/languages/xml';

Lowlight.registerLanguage('html', xmlLanguage);

function HtmlExample(props) {
  return (
    <div>
        <div
          className='border-t border-r border-l border--darken10 p18 round-t'
          dangerouslySetInnerHTML={{ __html: props.code }}
        />
      <div className='pre bg-gray-faint scroll-auto border--darken10 border hmax180 round-b'>
        <Lowlight
          language='html'
          value={props.code}
        />
      </div>
    </div>
  );
}

export { HtmlExample };
