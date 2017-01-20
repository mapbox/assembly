import React from 'react';
import Lowlight from 'react-lowlight';
import cssLanguage from 'highlight.js/lib/languages/css';

Lowlight.registerLanguage('css', cssLanguage);

class CssSnippet extends React.Component {
  render() {
    // flex-parent removes line-height
    return (
      <div>
        <button
          className='flex-child btn btn--xs btn--blue round'
          data-css-snippet-button={true}
        >
          Show CSS
        </button>
        {/* The code block must be the next sibling */}
        <div className='none mt6 pre bg-gray-faint scroll-auto hmax180 border border--gray-light round-b relative'>
          <div className='absolute top right p12'>
            <button
              data-clipboard-text={this.props.code}
              className='ml3 btn btn--xs btn--darken25 round js-clipboard'>
              Copy
            </button>
          </div>
          <Lowlight
            language='css'
            value={this.props.code}
          />
        </div>
      </div>
    );
  }
}

export { CssSnippet };
