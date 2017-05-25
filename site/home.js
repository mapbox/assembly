import React from 'react';
import Lowlight from 'react-lowlight';
import xmlLanguage from 'highlight.js/lib/languages/xml';
import pkg from '../package';
import { htmlTemplate } from './html_template';

Lowlight.registerLanguage('html', xmlLanguage);

const defaultMediaQueries = require('../src/media-queries');

class Home extends React.Component {
  render() {
    return (
      <div className='pt24'>
        <div className='flex-parent-ml flex-parent--wrap-ml'>
          <h1 className='flex-child-ml flex-child--grow-ml txt-h2 txt-bold'>
            Assembly.css
          </h1>
          <div className='flex-child-ml mt18 color-darken50'>
            v{pkg.version}
          </div>
        </div>
        <p className='txt-l mt18'>
          Assembly is an open source CSS framework that makes the hard parts of designing for the web easy.
        </p>
        <h2 className='border-b border--2 border--gray-faint pb6 mt60 mb48 txt-l txt-bold'>
          Getting started
        </h2>
        <p>
          Include in the head of your HTML the Assembly stylesheet.
        </p>
        <div className='mt12 pre'>
          <Lowlight
            language='html'
            value={`<link href="https://api.mapbox.com/mapbox-assembly/v${pkg.version}/assembly.min.css" rel="stylesheet">`}
          />
        </div>
        <p className='mt24'>
          Include the Assembly JavaScript anywhere in your HTML. It is safe to use the <code className='txt-code'>async</code> and <code className='txt-code'>defer</code> attributes.
        </p>
        <div className='mt12 pre'>
          <Lowlight
            language='html'
            value={`<script async defer src="https://api.mapbox.com/mapbox-assembly/v${pkg.version}/assembly.js"></script>`}
          />
        </div>

        <h3 className='mt48 mb12 txt-bold'>HTML Template</h3>
        <p>
          Get started right away with this bare bones HTML template.
        </p>

        <div className='mt12 pre'>
          <Lowlight
            language='html'
            value={htmlTemplate}
          />
        </div>

        <p className='mt12'>
          Unsure what else you need in the <code className='txt-code'>&lt;head&gt;</code>? Check out <a className='link' href='https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML'>MDN's detailed guide</a>.
        </p>

        <h2 className='border-b border--2 border--gray-faint pb6 mt60 txt-l txt-bold'>
          Philosophy
        </h2>
        <div className='grid grid--gut24 grid--gut48-ml'>
          <div className='col col--6-ml'>
            <h3 className='mt48 mb12 txt-bold'>Comprehensive</h3>
            <p>
              Assembly includes everything you need to fully implement responsive, colorful web pages, web apps, dashboards, and more.
            </p>
            </div>
            <div className='col col--6-ml'>
            <h3 className='mt48 mb12 txt-bold'>Flexible</h3>
            <p>
              The core of Assembly is a set of composable, atomic utility classes covering most of your styling needs.
            </p>
            </div>
            <div className='col col--6-ml'>
            <h3 className='mt48 mb12 txt-bold'>Practical</h3>
            <p>
              Complete reliance on atomic design can slow down development and foster inconsistency and bad UX. Assembly inserts the right opinions in the right places.
            </p>
            </div>
            <div className='col col--6-ml'>
            <h3 className='mt48 mb12 txt-bold'>Customizable</h3>
            <p>
              Assembly exposes its build process in a public API. Customize colors, fonts, and media queries; append your own stylesheets; and specify color variants to reduce file size.
            </p>
          </div>
        </div>
        <h2 className='border-b border--2 border--gray-faint pb6 mt60 txt-l txt-bold'>
          Overview
        </h2>

        <div className='mt48 flex-parent-mm'>
          <div className='flex-child flex-child--no-shrink mr24 mb0-mm mb18 w48 h48'><img src='/assembly/baseline-grid.svg'/></div>
          <div>
            <h3 className='txt-bold'>
              6 pixel baseline grid
            </h3>
            <p className='mt12'>
              Every element in Assembly is designed according to a 6 pixel baseline grid, even buttons and form components. Baseline grids don't just make your site look and feel better: they also make development more convenient. All the pieces naturally fit together without fiddling with line height or vertical alignment.
            </p>
          </div>
        </div>

        <div className='mt48 flex-parent-mm'>
          <div className='flex-child flex-child--no-shrink mr24 mb0-mm mb18 w48 h48'><img src='/assembly/defaults.svg'/></div>
          <div>
            <h3 className='txt-bold'>
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
          </div>
        </div>

        <div className='mt48 flex-parent-mm'>
          <div className='flex-child flex-child--no-shrink mr24 mb0-mm mb18 w48 h48'><img src='/assembly/box-model.svg'/></div>
          <div>
            <h3 className='txt-bold'>
              More intuitive box model
            </h3>
            <p className='mt12'>
              The <code className='txt-code'>border-box</code> box model allows for more intuitive styling than the default <code className='txt-code'>content-box</code> model.
              For example, when you set a <code className='txt-code'>w360</code> class, your element will always be 360 pixels wide, regardless of its padding and borders.
            </p>
          </div>
        </div>

        <div className='mt48 flex-parent-mm'>
          <div className='flex-child flex-child--no-shrink mr24 mb0-mm mb18 w48 h48'><img src='/assembly/custom-icons.svg'/></div>
          <div>
            <h3 className='txt-bold'>
              Customizable icons
            </h3>
            <p className='mt12'>
              Assembly comes with <a className='txt-underline' href='icons/'>more than 150 icons</a>, intended to be used as inline SVGs. Inline SVGs are easy to resize and color.
            </p>
          </div>
        </div>

        <div className='mt48 flex-parent-mm'>
          <div className='flex-child flex-child--no-shrink mr24 mb0-mm mb18 w48 h48'><img src='/assembly/media-queries.svg'/></div>
          <div>
            <h3 className='txt-bold'>
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
          </div>
        </div>

        <div className='mt48 flex-parent-mm'>
          <div className='flex-child flex-child--no-shrink mr24 mb0-mm mb18 w48 h48'><img src='/assembly/modifier.svg'/></div>
          <div>
            <h3 className='txt-bold'>
              Classes and modifier classes
            </h3>
            <p className='mt12'>
              A double-hyphen in a class name (e.g. <code className='txt-code'>border--blue</code>) indicates that the class is a <span className='txt-em'>modifier class</span>. A modifier class extends the class whose name precedes the double-hyphen (e.g. <code className='txt-code'>border--blue</code> modifies <code className='txt-code'>border</code>; <code className='txt-code'>flex-child--grow</code> modifies <code className='txt-code'>flex-child</code>). And <span className='txt-em'>modifier classes should only ever be used in combination with the class they modify</span>: modifier classes will not work well on their own.
            </p>
          </div>
        </div>

        <div className='mt48 flex-parent-mm'>
          <div className='flex-child flex-child--no-shrink mr24 mb0-mm mb18 w48 h48'><img src='/assembly/specificity.svg'/></div>
          <div>
            <h3 className='txt-bold'>
              Utility classes have maximum specificity
            </h3>
            <p className='mt12'>
              Assembly uses <code className='txt-code'>!important</code> on declarations whose effect directly corresponds to a class name.
            </p>
            <p className='mt12'>
              For example, in the <code className='txt-code'>.bg-blue</code> rule, the <code className='txt-code'>background-color</code> declaration is <code className='txt-code'>!important</code>.
              On the <code className='txt-code'>.pl20</code> rule, the <code className='txt-code'>padding-left</code> declaration is <code className='txt-code'>!important</code>.
              This ensures that such classes always behave the same. Whenever you see the class <code className='txt-code'>bg-blue</code> on an element,
              that element should have a pink background, regardless of its context and the other rules that apply to it.
            </p>
            <p className='mt12'>
              For dynamic styles, responsive classes (described above) provide some additional flexibility.
              But if you need even more, you should use custom CSS instead of a utility class.
            </p>
          </div>
        </div>

        <div className='mt48 flex-parent-mm'>
          <div className='flex-child flex-child--no-shrink mr24 mb0-mm mb18 w48 h48'><img src='/assembly/is-active.svg'/></div>
          <div>
            <h3 className='txt-bold'>
              <code className='txt-code'>is-active</code> applies active states
            </h3>
            <p className='mt12'>
              Assembly uses the <code className='txt-code'>is-active</code> state class to designate that an element is active and style it accordingly.
            </p>
            <p className='mt12'>
              The <code className='txt-code'>is-active</code> state on buttons and links darkens their color.
              And the <code className='txt-code'>*-on-active</code> state classes (e.g. only <code className='txt-code'>color-red-on-active</code>) only take effect when combined with the <code className='txt-code'>is-active</code> class.
            </p>
          </div>
        </div>

        <div className='mt48 flex-parent-mm'>
          <div className='flex-child flex-child--no-shrink mr24 mb0-mm mb18 w48 h48'><img src='/assembly/focus.svg'/></div>
          <div>
            <h3 className='txt-bold'>
              Focus outlines as needed
            </h3>
            <p className='mt12'>
              Assembly turns off focus outlines when you mousedown and turns them back on, universally, when you hit <kbd className='txt-kbd'>Tab</kbd>. This means that only the keyboard users who need them will see nice, prominent focus outlines, while mouse users won't have the design disturbed unnecessarily.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export { Home };
