import React from 'react';
import Lowlight from 'react-lowlight';
import xmlLanguage from 'highlight.js/lib/languages/xml';

Lowlight.registerLanguage('html', xmlLanguage);

const defaultMediaQueries = require('../src/media-queries');

class Home extends React.Component {
  render() {
    return (
      <div className='mt24 mb96 wmax960'>
        <div className='txt-headline'>
          <h1 className='animation-rainbow animation--speed-8 color-teal txt-mono uppercase txt-headline txt-spacing2 pl6 pr6'>Assembly.css</h1>
        </div>
        <p className='txt-l mt24'>
          Assembly is a CSS framework that makes the hard parts of designing for the web easy.
        </p>
        <p className='mt24'>
          <a className='link' href='https://github.com/mapbox/assembly/'>
            <svg
              className='icon'
              dangerouslySetInnerHTML={{ __html: '<use xlink:href="#icon-github"></use>' }}
            />
            <span className='ml6 align-middle'>View on GitHub</span>
          </a>
        </p>
        <h2 className='border-b border--2 border--gray-faint pb6 mt72 mb24 txt-l uppercase txt-bold'>
          Usage
        </h2>
        <p>
          Include in the head of your HTML the Assembly stylesheet.
        </p>
        <div className='mt24 pre'>
          <Lowlight
            language='html'
            value={'<link href="https://www.mapbox.com/assembly/assembly.css" rel="stylesheet">'}
          />
        </div>
        <p className='mt24'>
          And include somewhere in your HTML, depending on your preferences, the Assembly JavaScript. It is safe to use the <code className='code'>async</code> and <code className='code'>defer</code> attributes.
        </p>
        <div className='mt24 pre'>
          <Lowlight
            language='html'
            value={'<script async defer src="https://www.mapbox.com/assembly/assembly.js"></script>'}
          />
        </div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt72 txt-l uppercase txt-bold'>
          Philosophy
        </h2>
        <div className='grid grid--gut24'>
          <div className='col col--6'>
            <h3 className='mt24 mb6 txt-bold'>Comprehensive</h3>
            <p>
              Assembly includes everything you need to fully implement responsive, colorful web pages, web apps, dashboards, and more.
            </p>
            </div>
            <div className='col col--6'>
            <h3 className='mt24 mb6 txt-bold'>Flexible</h3>
            <p>
              The core of Assembly is a set of composable, atomic utility classes covering most of your styling needs.
            </p>
            </div>
            <div className='col col--6'>
            <h3 className='mt24 mb6 txt-bold'>Practical</h3>
            <p>
              Complete reliance on atomic design can slow down development and foster inconsistency and bad UX. Assembly inserts the right opinions in the right places.
            </p>
            </div>
            <div className='col col--6'>
            <h3 className='mt24 mb6 txt-bold'>Customizable</h3>
            <p>
              Assembly exposes its build process in a public API. Customize colors, fonts, and media queries; append your own stylesheets; and specify color variants to reduce file size.
            </p>
          </div>
        </div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt72 txt-l uppercase txt-bold'>
          Overview
        </h2>
        <h3 className='mt24 txt-bold'>
          <code className='code'>6px</code> baseline grid
        </h3>
        <p className='mt12'>
          Every element in Assembly is designed according to a <code className='code'>6px</code> baseline grid, even buttons and form components. Baseline grids don't just make your site look and feel better: they also make development more convenient. All the pieces naturally fit together without fiddling with line height or vertical alignment.
        </p>
        <h3 className='mt24 txt-bold'>
          No default styling for semantic elements
        </h3>
        <p className='mt12'>
          You should use <code className='code'>{'<h3>'}</code> for third-level headings, not because you want a certain style.
          Similarly, you should use <code className='code'>{'<button>'}</code> when a button is behaviorally and semantically appropriate,
          instead of <code className='code'>href</code>-less <code className='code'>{'<a>'}</code> tags or other elements with click handlers.
        </p>
        <p className='mt12'>
          Assembly's reset allows you to use semantically appropriate HTML without battling browser-default styles.
          And its CSS rules are built to behave the same regardless of which element they're applied to.
          A heading <em>style</em>, or a button <em>style</em>, can be applied to <em>any</em> element by applying the appropriate classes.
        </p>
        <h3 className='mt24 txt-bold'>
          <code className='code'>box-sizing: border-box</code>
        </h3>
        <p className='mt12'>
          The <code className='code'>border-box</code> box model allows for more intuitive styling than the default <code className='code'>content-box</code> model.
          For example, when you set a <code className='code'>w300</code> class, your element will always be 300 pixels wide, regardless of its padding and borders.
        </p>
        <h3 className='mt24 txt-bold'>
          Customizable icons
        </h3>
        <p className='mt12'>
          Assembly comes with <a className='txt-underline' href='icons/'>more than 150 icons</a>, intended to be used as inline SVGs. Inline SVGs are easy to resize and color.
        </p>
        <h3 className='mt24 txt-bold'>
          Media queries are mobile-first
        </h3>
        <p className='mt12'>
          Mobile-first media queries lead to cleaner code because there are fewer overrides. Start with a simple mobile layout, then add complexity with additional media-constrained rules. Assembly uses the following media queries:
        </p>
        <div className='prose mt12'>
          <ul className='txt-ul'>
            <li>Extra large screens: <code className='code'>{defaultMediaQueries['--xl-screen']}</code></li>
            <li>Large screens: <code className='code'>{defaultMediaQueries['--l-screen']}</code></li>
            <li>Medium screens: <code className='code'>{defaultMediaQueries['--m-screen']}</code></li>
          </ul>
        </div>
        <p className='mt12'>
          Classes that take affect within certain media queries always end with a <code className='code'>{'-m<size>'}</code> suffix,
          where "size" is <code className='code'>m</code>, <code className='code'>l</code>, or <code className='code'>xl</code>.
        </p>
        <h3 className='mt24 txt-bold'>
          Utility classes are <code className='code'>!important</code>
        </h3>
        <p className='mt12'>
          Assembly uses <code className='code'>!important</code> on declarations whose effect directly corresponds to a class name.
        </p>
        <p className='mt12'>
          For example, in the <code className='code'>.bg-pink</code> rule, the <code className='code'>background-color</code> declaration is <code className='code'>!important</code>.
          On the <code className='code'>.pl20</code> rule, the <code className='code'>padding-left</code> declaration is <code className='code'>!important</code>.
          This ensures that such classes always behave the same. Whenever you see the class <code className='code'>bg-pink</code> on an element,
          that element should have a pink background, regardless of its context and the other rules that apply to it.
        </p>
        <p className='mt12'>
          For dynamic styles, responsive classes (described above) provide some additional flexibility.
          But if you need even more, you should use custom CSS instead of a utility class.
        </p>
        <h3 className='mt24 txt-bold'>
          <code className='code'>is-active</code> applies active states
        </h3>
        <p className='mt12'>
          Assembly uses the <code className='code'>is-active</code> state class to designate that an element is active and style it accordingly.
        </p>
        <p className='mt12'>
          The <code className='code'>is-active</code> state on buttons and links darkens their color.
          And the <code className='code'>*-on-active</code> state classes (e.g. only <code className='code'>color-red-on-active</code>) only take effect when combined with the <code className='code'>is-active</code> class.
        </p>
      </div>
    );
  }
}

export { Home };
