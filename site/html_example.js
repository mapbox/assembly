import React from 'react';
import Lowlight from 'react-lowlight';
import xmlLanguage from 'highlight.js/lib/languages/xml';

Lowlight.registerLanguage('html', xmlLanguage);

function HtmlExample(props) {
  return (
    <div>
        <div
          className='border border--gray-light p12 round-t'
          dangerouslySetInnerHTML={{ __html: props.code }}
        />
      <div className='pre bg-gray-faint scroll-auto hmax180 border-l border-b border-r border--gray-light round-b'>
        <Lowlight
          language='html'
          value={props.code}
        />
      </div>
    </div>
  );
}

export { HtmlExample };
