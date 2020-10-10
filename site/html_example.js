/* eslint-disable react/no-danger */
import React from 'react';
import Lowlight from 'react-lowlight';
import xmlLanguage from 'highlight.js/lib/languages/xml';

Lowlight.registerLanguage('html', xmlLanguage);

function HtmlExample(props) {
  const copy = props.copy === false ? false : true;
  return (
    <div>
      <div
        className="border border--gray-light px12 py12 round-t"
        dangerouslySetInnerHTML={{ __html: props.code }}
      />
      <div className="pre overflow-auto scroll-styled hmax240 border-l border-b border-r border--gray-light round-b relative">
        {copy && (
          <div className="absolute top right px12 py12">
            <button
              data-clipboard-text={props.code}
              className="ml3 btn btn--s btn--darken25 round js-clipboard"
            >
              Copy
            </button>
          </div>
        )}

        <Lowlight language="html" value={props.code} />
      </div>
    </div>
  );
}

export { HtmlExample };
