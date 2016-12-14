import React from 'react';
import remark from 'remark';
import reactRenderer from 'remark-react';

const text = `
# The Reset

## Removes default styling on semantic elements

One goal of Assembly's reset is to allow you to use any semantically appropriate HTML element without battling its browser-default styles.

For example, you should use \`<h3>\` for third-level headings, *not* because you want a certain style. Similarly, you should use \`<button>\` when a button is behaviorally and semantically appropriate, instead of \`href\`-less \`<a>\` tags or other elements with click handlers.

To allow for this, Assembly resets all browser-default margins, paddings, borders, and font sizes. It also resets font weights on headings, underlines on links, pretty much everything on buttons, and a few other things.

## \`box-sixing: border-box\`

[The \`border-box\` box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) allows for more intuitive styling than the default, \`content-box\` model.

Assembly's use of \`border-box\` means, for example, that when you set a \`w300\` class, your element will always be 300 pixels wide, regardless of its padding and borders.
`;

class Reset extends React.Component {
  render() {
    return (
      <div className='prose'>
        {remark().use(reactRenderer).process(text).contents}
      </div>
    );
  }
}

export { Reset };
