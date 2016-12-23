import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className='mt24 mb96 wmax960'>
        <div className='txt-subhead'>
        <h1 className='animation-rainbow animation--speed-8 color-teal inline code uppercase txt-headline pl6 pr6'>
          Assembly.css
        </h1>
        </div>
          <p className='txt-l mt12'>
            Assembly is an atomic CSS framework that makes it easy to build up responsive sites.
          </p>
        <h2 className='border-b border--2 border--gray-faint pb6 mt72 mb24 txt-l uppercase txt-bold'>
          Usage
        </h2>
          <p>
            Include a link to the assembly stylesheet in the head of your HTML.
          </p>
          <pre className='mt12 code-block'>
            {'<link href="https://www.mapbox.com/assembly/assembly.css" rel="stylesheet" />'}
          </pre>
        <h2 className='border-b border--2 border--gray-faint pb6 mt72 mb24 txt-l uppercase txt-bold'>
          Philosophy
        </h2>
          <h3 className='mb6 txt-bold'>
            Class names are short and descriptive
          </h3>
            <p className='mb24'>
              Assembly is designed to provide fundamental rules that are used frequently and should be easy to type and remember.
              Classes are abbreviated and use actual number values where applicable.
            </p>
          <h3 className='mb6 txt-bold'>
            Assembly is not very opinionated or specific
          </h3>
            <p>
              Unless absolutely necessary, selectors consist of a single class. This means that a class's effect will not vary when combined with different classes.
            </p>
        <h2 className='border-b border--2 border--gray-faint pb6 mt72 mb24 txt-l uppercase txt-bold'>
          How it works
        </h2>
          <h3 className='mb6 txt-bold'>
            Assembly resets default styling on semantic elements
          </h3>
            <p className='mb24'>
              One goal of Assembly's CSS reset is to allow you to use any semantically appropriate HTML element without battling its browser-default styles.
              For example, you should use <code className='code'>{'<h3>'}</code> for third-level headings, not because you want a certain style.
              Similarly, you should use <code className='code'>{'<button>'}</code> when a button is behaviorally and semantically appropriate,
              instead of <code className='code'>href</code>-less <code className='code'>{'<a>'}</code> tags or other elements with click handlers.
              To allow for this, Assembly resets all browser-default margins, paddings, borders, and font sizes. It also resets font weights on headings,
              underlines on links, pretty much everything on buttons, and a few other things.
            </p>
          <h3 className='mb6 txt-bold'>
            Elements are sized according to <code className='code'>box-sizing: border-box</code>
          </h3>
            <p className='mb24'>
              The <code className='code'>border-box</code> box model allows for more intuitive styling than the default <code className='code'>content-box</code> model.
              For example, when you set a <code className='code'>w300</code> class, your element will always be 300 pixels wide, regardless of its padding and borders.
            </p>
          <h3 className='mb6 txt-bold'>
            Media queries are mobile-first
          </h3>
            <p>
              Assembly uses the following media queries:
            </p>
            <div className='prose mt6 mb6'><ul className='txt-ul'>
              <li>large screens: <code className='code'>(min-width: 1600px) and (min-height: 1000px)</code></li>
              <li>medium screens: <code className='code'>(min-width: 800px) and (min-height: 600px)</code></li>
              <li>small screens: <code className='code'>(min-width: 640px) and (min-height: 420px)</code></li>
            </ul></div>
            <p className='mb24'>
              Classes that take affect within certain media queries always end with a <code className='code'>{'-media-<size>'}</code> suffix,
              where "size" is <code className='code'>s</code>, <code className='code'>m</code>, or <code className='code'>l</code>.
            </p>
          <h3 className='mb6 txt-bold'>
            <code className='code'>!important</code> guarantees utility class behavior
          </h3>
            <p>
              Assembly uses <code className='code'>!important</code> on declarations whose effect directly corresponds to a class name.
              For example, in the <code className='code'>.bg-pink</code> rule, the <code className='code'>background-color</code> declaration will be <code className='code'>!important</code>.
              This ensures that these classes always behave the same. If you see the class <code className='code'>bg-pink</code> on an element,
              you should be able to assume that that element will always have a pink background, regardless of its context or the other rules that apply.
              If you need more flexibility (e.g. you don't always want the element to have a pink background) you should use custom CSS instead of a utility class.
            </p>
      </div>
    );
  }
}

export { Home };
