import React from 'react';
import remark from 'remark';
import reactRenderer from 'remark-react';
import Lowlight from 'react-lowlight';
import xmlLanguage from 'highlight.js/lib/languages/xml';
import cssLanguage from 'highlight.js/lib/languages/css';

Lowlight.registerLanguage('html', xmlLanguage);
Lowlight.registerLanguage('css', cssLanguage);

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSource: false };
    this.toggleShowSource = this.toggleShowSource.bind(this);
  }

  toggleShowSource() {
    this.setState({ showSource: !this.state.showSource });
  }

  render() {
    const { props } = this;
    const { showSource } = this.state;

    const example = !props.parsedComment.example ? null : (
      <div style={{ marginBottom: '40px' }}>
        <div style={{ marginBottom: '20px' }}>
          <div className='styledoc-example-label'>Example</div>
          <div dangerouslySetInnerHTML={{ __html: props.parsedComment.example.description }} />
        </div>
        <Lowlight
          language='html'
          value={props.parsedComment.example.description} />
      </div>
    );

    const source = (!showSource || !props.referencedSource) ? null : (
      <Lowlight
        language='css'
        value={props.referencedSource.toString()}
      />
    );

    const selector = (props.type === 'member')
      ? props.referencedSource.selector
      : props.members.join(', ');

    return (
      <div style={{ overflow: 'hidden' }}>
        <div style={{ float: 'left', width: `${100 / 3}%` }}>
          <div className='styledoc-selector-name'>
            {selector}
          </div>
          <div className='styledoc-selector-description'>
            {remark().use(reactRenderer).process(props.parsedComment.description).contents}
          </div>
          <div>
            <div
              className='styledoc-selector-toggle'
              style={{ cursor: 'pointer' }}
              onClick={this.toggleShowSource}
            >
              {showSource ? 'Hide' : 'Show'} source
            </div>
            {source}
          </div>
        </div>
        <div style={{ float: 'left', width: `${100 / 3 * 2}%` }}>
          <div
            className='styledoc-example'
            style={{ marginLeft: 10 }}
          >
            {example}
          </div>
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
