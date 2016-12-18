import React from 'react';
import Lowlight from 'react-lowlight';
import xmlLanguage from 'highlight.js/lib/languages/xml';

Lowlight.registerLanguage('html', xmlLanguage);

function HtmlExample(props) {
  return (
    <div className='mt12'>
        <div
          className='border-t border-l border-r border--2 border--gray-faint round-t p12'
          dangerouslySetInnerHTML={{ __html: props.code }}
        />
      <div className='code-block bg-gray-faint scroll-auto hmax240 round-b'>
        <Lowlight
          language='html'
          value={props.code}
        />
      </div>
    </div>
  );
}

export { HtmlExample };
