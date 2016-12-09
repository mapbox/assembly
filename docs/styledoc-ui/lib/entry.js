import React from 'react';
import remark from 'remark';
import reactRenderer from 'remark-react';
import Lowlight from 'react-lowlight';
import xmlLanguage from 'highlight.js/lib/languages/xml';

Lowlight.registerLanguage('html', xmlLanguage);

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSource: false };
  }

  render() {
    const { props } = this;

    const example = !props.parsedComment.example ? null : (
      <div style={{ marginBottom: '40px' }}>
        <div style={{ marginBottom: '20px' }}>
          <div dangerouslySetInnerHTML={{ __html: props.parsedComment.example.description }} />
        </div>
        <Lowlight
          language='html'
          value={props.parsedComment.example.description} />
      </div>
    );

    const selectors = props.referencedSource ? [props.referencedSource.selector] : props.members;

    const selectorEls = selectors.map((m) => <span key={m}>
        <span className='styledoc-group-member'>{m}</span>
      </span>);

    return (
      <div className='styledoc-selector-group'>
        <div className='styledoc-selector-name'>
          {selectorEls}
        </div>
        <div className='styledoc-selector-description'>
          {remark().use(reactRenderer).process(props.parsedComment.description).contents}
        </div>
        <div className='styledoc-example'>
          {example}
        </div>
      </div>
    );
  }
}

Entry.propTypes = {
  type: React.PropTypes.oneOf(['group', 'member']).isRequired,
  parsedComment: React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    example: React.PropTypes.shape({
      description: React.PropTypes.string.isRequired
    })
  }).isRequired,
  referencedSource: React.PropTypes.shape({
    toString: React.PropTypes.func.isRequired,
  })
};

export { Entry };
