import React from 'react';
import remark from 'remark';
import reactRenderer from 'remark-react';

class Home extends React.Component {
  render() {
    return (
      <div className='mt48 mb120'>
        <h1 className='txt-subhead txt-bold mb12'>Assembly</h1>
          <p>Assembly is an atomic CSS framework that makes it easy to build up responsive sites.</p>
        <h2 className='txt-l uppercase txt-bold'>Usage</h2>
          <p>Include a link to the assembly stylesheet in the head of your HTML.</p>
          <pre className='code-block'><link href='https://www.mapbox.com/assembly/assembly.css' rel='stylesheet' /></pre>
        <h2 className='txt-l uppercase txt-bold'>Philosophy</h2>
          <h3 className='txt-bold'>Class names are short and descriptive</h3>
            <p>Assembly is designed to provide fundamental rules that are used frequently and should be easy to type and remember. Classes are abbreviated and use actual number values where applicable.</p>
          <h3 className='txt-bold'>Assembly is not very opinionated or specific</h3>
            <p>Unless absolutely necessary, selectors consist of a single class. This means that a class's effect will not vary when combined with different classes.</p>
        <h2 className='txt-l uppercase txt-bold'>How it works</h2>
          <h3 className='txt-bold'>Assembly resets default styling on semantic elements</h3>
            <p>One goal of Assembly's CSS reset is to allow you to use any semantically appropriate HTML element without battling its browser-default styles. For example, you should use h3 for third-level headings, *not* because you want a certain style. Similarly, you should use button when a button is behaviorally and semantically appropriate, instead of href-less a tags or other elements with click handlers. To allow for this, Assembly resets all browser-default margins, paddings, borders, and font sizes. It also resets font weights on headings, underlines on links, pretty much everything on buttons, and a few other things.</p>
          <h3 className='txt-bold'>Elements are sized according to box-sixing: border-box</h3>
            <p>The <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing'>border-box box model</a> allows for more intuitive styling than the default content-box model. For example, when you set a w300 class, your element will always be 300 pixels wide, regardless of its padding and borders.</p>
          <h3 className='txt-bold'>Media queries are mobile-first</h3>
            <p>Assembly uses the following media queries:</p>
            <div className='prose'>
              <ul className='txt-ul'>
                <li>large screens: (min-width: 1600px) and (min-height: 1000px)</li>
                <li>medium screens: (min-width: 800px) and (min-height: 600px)</li>
                <li>small screens: (min-width: 640px) and (min-height: 420px)</li>
              </ul>
            </div>
            <p>Classes that take affect within certain media queries always end with a -media-size suffix, where "size" is s, m, or l.</p>
          <h3 className='txt-bold'>!important guarantees utility class behavior</h3>
            <p>Assembly uses !important on declarations whose effect directly corresponds to a class name. For example, in the .bg-pink rule, the background-color declaration will be !important. The reason for this is that we want these classes to always behave the same. If you see the class bg-pink on an element, you should be able to assume that that element will always have a pink background, regardless of its context or the other rules that apply. If you need more flexibility (e.g. you don't always want the element to have a pink background) you should use custom CSS instead of a utility class.</p>
      </div>
    );
  }
}

export { Home };
