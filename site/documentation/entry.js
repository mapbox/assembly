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
      <div className='mt10 grid grid--gut10'>
        <div className='col col--6'>
          <div className='border border--2 border--blue round p20' dangerouslySetInnerHTML={{ __html: props.parsedComment.example.description }} />
        </div>
        <div className='col col--6'>
        <Lowlight
          language='html'
          value={props.parsedComment.example.description} />
        </div>
      </div>
    );

    let selectors = props.referencedSource ? [props.referencedSource.selector] : props.members;

    if (selectors) {
      selectors = selectors
        .map((s) => {
          return s.split(',');
        }).reduce((a, b) => {
          return a.concat(b);
        });
    }

    const selectorEls = selectors !== undefined && selectors.map((m) => <span className='mr5 inline-block' key={m}>
        <span id={`#${m.trim().replace(/\s+/g, '-').replace(/./g, '')}`} className='pl5 pr5 round bg-blue color-white txt-mono inline-block'>{m.trim()}</span>
      </span>);

    return (
      <div className='mt30 mb20'>
        <div className='mb5'>
          {selectorEls}
        </div>
        <div className='prose'>
          {remark().use(reactRenderer).process(props.parsedComment.description).contents}
        </div>
        {example}
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
