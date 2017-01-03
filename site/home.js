import React from 'react';
const defaultMediaQueries = require('../src/media-queries');

const headIncludes = `<link href="https://www.mapbox.com/assembly/assembly.css" rel="stylesheet"
<script src="https://www.mapbox.com/assembly/assembly-svg.js"></script>`;

class Home extends React.Component {
  render() {
    return (
      <div className='mt24 mb96 wmax960'>
        <div className='txt-headline'>
          <h1 className='animation-rainbow animation--speed-8 color-teal txt-mono uppercase txt-headline txt-spacing2 pl6 pr6'>Assembly.css</h1>
        </div>
        <p className='txt-l mt12'>
          Assembly is a CSS framework that makes the hard parts of designing for the web easy.
        </p>
        <h2 className='border-b border--2 border--gray-faint pb6 mt72 mb24 txt-l uppercase txt-bold'>
          Usage
        </h2>
        <p>
          Include in the head of your HTML the Assembly stylesheet and icon-loading JavaScript.
        </p>
        <pre className='mt12 pre'>
          <code>
            {headIncludes}
          </code>
        </pre>
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
            Complete reliance on atomic design can slow down development, and foster inconsistency and bad UX. Assembly inserts the right opinions in the right places.
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
          6px baseline grid
        </h3>
        <p className='mt6'>
          Every element in Assembly is designed according to a 6px baseline grid, even buttons and forms. Baseline grids don't just make your site look and feel better, they also make development more convenient: all the pieces naturally fit together without fiddling with line height or vertical alignment.
        </p>
        <h3 className='mt24 txt-bold'>
          No default styling for semantic elements
        </h3>
        <p className='mt6'>
          Assembly's reset allows you to use semantically appropriate HTML without battling browser-default styles.
          And its CSS rules are built to behave the same regardless of which element they're applied to.
        </p>
        <p className='mt6'>
          For example, you should use <code className='code'>{'<h3>'}</code> for third-level headings, not because you want a certain style.
          Similarly, you should use <code className='code'>{'<button>'}</code> when a button is behaviorally and semantically appropriate,
          instead of <code className='code'>href</code>-less <code className='code'>{'<a>'}</code> tags or other elements with click handlers.
          A heading <em>style</em>, or a button <em>style</em>, can be applied to any element by applying the appropriate classes.
        </p>
        <h3 className='mt24 txt-bold'>
          box-sizing: border-box
        </h3>
        <p className='mt6'>
          The <code className='code'>border-box</code> box model allows for more intuitive styling than the default <code className='code'>content-box</code> model.
          For example, when you set a <code className='code'>w300</code> class, your element will always be 300 pixels wide, regardless of its padding and borders.
        </p>
        <h3 className='mt24 txt-bold'>
          Customizable icons
        </h3>
        <p className='mt6'>
          Assembly comes with <a className='txt-underline' href='icons/'>more than 150 icons</a>, intended to be used as inline SVGs. Inline SVGs are easy to resize and color.
        </p>
        <h3 className='mt24 txt-bold'>
          Media queries are mobile-first
        </h3>
        <p className='mt6'>
          Mobile-first media queries lead to cleaner code because there are fewer overrides. Start with a simple mobile layout, then add complexity with additional media constrained rules. Assembly uses the following media queries:
        </p>
        <div className='prose mt6'>
          <ul className='txt-ul'>
            <li>Extra large screens: <code className='code'>{defaultMediaQueries['--xl-screen']}</code></li>
            <li>Large screens: <code className='code'>{defaultMediaQueries['--l-screen']}</code></li>
            <li>Medium screens: <code className='code'>{defaultMediaQueries['--m-screen']}</code></li>
          </ul>
        </div>
        <p className='mt6'>
          Classes that take affect within certain media queries always end with a <code className='code'>{'-media-<size>'}</code> suffix,
          where "size" is <code className='code'>s</code>, <code className='code'>m</code>, or <code className='code'>l</code>.
        </p>
        <h3 className='mt24 txt-bold'>
          <code className='code'>!important</code> all utility classes behavior
        </h3>
        <p className='mt6'>
          Assembly uses <code className='code'>!important</code> on declarations whose effect directly corresponds to a class name.
        </p>
        <p className='mt6'>
          For example, in the <code className='code'>.bg-pink</code> rule, the <code className='code'>background-color</code> declaration is <code className='code'>!important</code>.
          This ensures that such classes always behave the same. If you see the class <code className='code'>bg-pink</code> on an element,
          you should be able to assume that the element will have a pink background, regardless of its context or the other rules that apply.
          Responsive classes (described above) provide some additional flexibility.
          But if you need even more, you should use custom CSS instead of a utility class.
        </p>
        <h3 className='mt24 txt-bold'>
          <code className='code'>is-active</code> applies active states
        </h3>
        <p className='mt6'>
          Assembly uses the <code className='code'>is-active</code> state class to designate that an element is active and style it accordingly.
        </p>
        <p className='mt6'>
          The <code className='code'>is-active</code> state on buttons and links darkens the color.
          The <code className='code'>*-on-active</code> state classes only have any effect when combined with the <code className='code'>is-active</code> class,
          and will override the default button and link behavior.
        </p>
      </div>
    );
  }
}

export { Home };
