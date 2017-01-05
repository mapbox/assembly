import React from 'react';
import Lowlight from 'react-lowlight';
import xmlLanguage from 'highlight.js/lib/languages/xml';
import { Logo } from './logo';
import { version } from '../package';

Lowlight.registerLanguage('html', xmlLanguage);

const defaultMediaQueries = require('../src/media-queries');

class Home extends React.Component {
  render() {
    return (
      <div className='mt24 wmax960'>
        <div className='txt-headline'>
          <h1 className='pl6 pr6 flex-parent mt72 flex-parent--center-cross'>
            <Logo className='w48 inline-block mr12' style={{ fill: '#9762cc' }}/>
            <div className='color-purple txt-mono txt-uppercase txt-headline txt-spacing2'>Assembly.css</div>
          </h1>
        </div>
        <p className='txt-l mt24'>
          Assembly is an open source CSS framework that makes the hard parts of designing for the web easy.
        </p>
        <h2 className='border-b border--2 border--gray-faint pb6 mt72 mb24 txt-l txt-uppercase txt-bold'>
          Usage
        </h2>
        <p>
          Include in the head of your HTML the Assembly stylesheet.
        </p>
        <div className='mt24 pre'>
          <Lowlight
            language='html'
            value={`<link href="https://api.mapbox.com/mapbox-assembly/v${version}/assembly.min.css" rel="stylesheet">`}
          />
        </div>
        <p className='mt24'>
          And include somewhere in your HTML, depending on your preferences, the Assembly JavaScript. It is safe to use the <code className='txt-code'>async</code> and <code className='txt-code'>defer</code> attributes.
        </p>
        <div className='mt24 pre'>
          <Lowlight
            language='html'
            value={`<script async defer src="https://api.mapbox.com/mapbox-assembly/v${version}/assembly.js"></script>`}
          />
        </div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt72 txt-l txt-uppercase txt-bold'>
          Philosophy
        </h2>
        <div className='grid grid--gut24'>
          <div className='col col--6-ml'>
            <h3 className='mt24 mb6 txt-bold'>Comprehensive</h3>
            <p>
              Assembly includes everything you need to fully implement responsive, colorful web pages, web apps, dashboards, and more.
            </p>
            </div>
            <div className='col col--6-ml'>
            <h3 className='mt24 mb6 txt-bold'>Flexible</h3>
            <p>
              The core of Assembly is a set of composable, atomic utility classes covering most of your styling needs.
            </p>
            </div>
            <div className='col col--6-ml'>
            <h3 className='mt24 mb6 txt-bold'>Practical</h3>
            <p>
              Complete reliance on atomic design can slow down development and foster inconsistency and bad UX. Assembly inserts the right opinions in the right places.
            </p>
            </div>
            <div className='col col--6-ml'>
            <h3 className='mt24 mb6 txt-bold'>Customizable</h3>
            <p>
              Assembly exposes its build process in a public API. Customize colors, fonts, and media queries; append your own stylesheets; and specify color variants to reduce file size.
            </p>
          </div>
        </div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt72 txt-l txt-uppercase txt-bold'>
          Overview
        </h2>
        <h3 className='mt24 txt-bold'>
          <code className='txt-code'>6px</code> baseline grid
        </h3>
        <p className='mt12'>
          Every element in Assembly is designed according to a <code className='txt-code'>6px</code> baseline grid, even buttons and form components. Baseline grids don't just make your site look and feel better: they also make development more convenient. All the pieces naturally fit together without fiddling with line height or vertical alignment.
        </p>
        <h3 className='mt24 txt-bold'>
          No default styling for semantic elements
        </h3>
        <p className='mt12'>
          You should use <code className='txt-code'>{'<h3>'}</code> for third-level headings, not because you want a certain style.
          Similarly, you should use <code className='txt-code'>{'<button>'}</code> when a button is behaviorally and semantically appropriate,
          instead of <code className='txt-code'>href</code>-less <code className='txt-code'>{'<a>'}</code> tags or other elements with click handlers.
        </p>
        <p className='mt12'>
          Assembly's reset allows you to use semantically appropriate HTML without battling browser-default styles.
          And its CSS rules are built to behave the same regardless of which element they're applied to.
          A heading <em>style</em>, or a button <em>style</em>, can be applied to <em>any</em> element by applying the appropriate classes.
        </p>
        <h3 className='mt24 txt-bold'>
          <code className='txt-code'>box-sizing: border-box</code>
        </h3>
        <p className='mt12'>
          The <code className='txt-code'>border-box</code> box model allows for more intuitive styling than the default <code className='txt-code'>content-box</code> model.
          For example, when you set a <code className='txt-code'>w300</code> class, your element will always be 300 pixels wide, regardless of its padding and borders.
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
            <li>Extra large screens: <code className='txt-code'>{defaultMediaQueries['--xl-screen']}</code></li>
            <li>Large screens: <code className='txt-code'>{defaultMediaQueries['--l-screen']}</code></li>
            <li>Medium screens: <code className='txt-code'>{defaultMediaQueries['--m-screen']}</code></li>
          </ul>
        </div>
        <p className='mt12'>
          Classes that take affect within certain media queries always end with a <code className='txt-code'>{'-m<size>'}</code> suffix,
          where "size" is <code className='txt-code'>m</code>, <code className='txt-code'>l</code>, or <code className='txt-code'>xl</code>.
        </p>
        <h3 className='mt24 txt-bold'>
          Utility classes are <code className='txt-code'>!important</code>
        </h3>
        <p className='mt12'>
          Assembly uses <code className='txt-code'>!important</code> on declarations whose effect directly corresponds to a class name.
        </p>
        <p className='mt12'>
          For example, in the <code className='txt-code'>.bg-pink</code> rule, the <code className='txt-code'>background-color</code> declaration is <code className='txt-code'>!important</code>.
          On the <code className='txt-code'>.pl20</code> rule, the <code className='txt-code'>padding-left</code> declaration is <code className='txt-code'>!important</code>.
          This ensures that such classes always behave the same. Whenever you see the class <code className='txt-code'>bg-pink</code> on an element,
          that element should have a pink background, regardless of its context and the other rules that apply to it.
        </p>
        <p className='mt12'>
          For dynamic styles, responsive classes (described above) provide some additional flexibility.
          But if you need even more, you should use custom CSS instead of a utility class.
        </p>
        <h3 className='mt24 txt-bold'>
          <code className='txt-code'>is-active</code> applies active states
        </h3>
        <p className='mt12'>
          Assembly uses the <code className='txt-code'>is-active</code> state class to designate that an element is active and style it accordingly.
        </p>
        <p className='mt12'>
          The <code className='txt-code'>is-active</code> state on buttons and links darkens their color.
          And the <code className='txt-code'>*-on-active</code> state classes (e.g. only <code className='txt-code'>color-red-on-active</code>) only take effect when combined with the <code className='txt-code'>is-active</code> class.
        </p>
        <h3 className='mt24 txt-bold'>
          Focus outlines as needed
        </h3>
        <p className='mt12'>
          Assembly turns off focus outlines when you mousedown and turns them back on, universally, when you hit <kbd className='txt-kbd'>Tab</kbd>. This means that only the keyboard users who need them will see nice, prominent focus outlines, while mouse users won't have the design disturbed unnecessarily.
        </p>
      </div>
    );
  }
}

export { Home };
