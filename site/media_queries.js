import React from 'react';
import remark from 'remark';
import reactRenderer from 'remark-react';

const text = `
# Media queries

Assembly uses the following media queries:

- large screens: \`(min-width: 1600px) and (min-height: 1000px)\`
- medium screens: \`(min-width: 800px) and (min-height: 600px)\`
- small screens: \`(min-width: 640px) and (min-height: 420px)\`

Classes that take affect within certain media queries always end with a \`-media-<size>\` suffix, where "size" is \`s\`, \`m\`, or \`l\`.
`;

class MediaQueries extends React.Component {
  render() {
    return (
      <div className='prose'>
        {remark().use(reactRenderer).process(text).contents}
      </div>
    );
  }
}

export { MediaQueries };
