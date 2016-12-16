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

# Media queries

Assembly uses the following media queries:

- large screens: \`(min-width: 1600px) and (min-height: 1000px)\`
- medium screens: \`(min-width: 800px) and (min-height: 600px)\`
- small screens: \`(min-width: 640px) and (min-height: 420px)\`

Classes that take affect within certain media queries always end with a \`-media-<size>\` suffix, where "size" is \`s\`, \`m\`, or \`l\`.

# Usage of \`!important\`

Assembly uses \`!important\` on declarations whose effect directly corresponds to a class name. For example, in the \`.bg-pink\` rule, the \`background-color\` declaration will be \`!important\`.

The reason for this is that we want these classes to *always* behave the same. If you see the class \`bg-pink\` on an element, you should be able to assume that that element will *always* have a pink background, regardless of its context or the other rules that apply.

If you need more flexibility (e.g. you don't *always* want the element to have a pink background) you should use custom CSS instead of a utility class.
`;

class Home extends React.Component {
  render() {
    return (
      <div className='mt40 prose'>
        {remark().use(reactRenderer).process(text).contents}
      </div>
    );
  }
}

export { Home };
