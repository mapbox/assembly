import React from 'react';

const headIncludes = `<link href="https://www.mapbox.com/assembly/assembly.css" rel="stylesheet"
<script src="https://www.mapbox.com/assembly/assembly-svg.js"></script>`;

class Home extends React.Component {
  render() {
    return (
      <div className='mt24 mb96 wmax960'>
        <div className='txt-headline'>
          <h1 className='animation-rainbow animation--speed-8 color-teal inline code uppercase txt-headline txt-spacing2 pl6 pr6'>Assembly.css</h1>
        </div>
          <p className='txt-l mt12'>
            Assembly is an atomic CSS framework that makes it easy to build up responsive sites.
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
          <h3 className='mt24 mb6 txt-bold'>Comprehensive</h3>
            <p>
              Using Assembly alone, with no additional CSS, you can implement a wide variety of fully responsive, colorful designs.
            </p>
          <h3 className='mt24 mb6 txt-bold'>Balance of flexibility, usability, and consistency</h3>
            <p>
              Assembly's audience spans the range from dedicated designers, who want total control, to programmers who want their projects to look great but don't want to think too much about design. For these users, atomic utility classes are essential but not enough: complete reliance on them can slow down development and foster inconsistency. Assembly strives to strike a balance between these needs, inserting the right opinions in the right places.
            </p>
          <h3 className='mt24 mb6 txt-bold'>Beautiful forms</h3>
            <p>
              Assembly provides beautiful and customizable form components without sacrificing any features of native browser elements.
            </p>
          <h3 className='mt24 mb6 txt-bold'>Customizable</h3>
            <p>
              Assembly exposes its build process in a public API, so you can use the standard build or create your own version. You can customize colors, fonts, and media queries; append your own stylesheets; and specify color variants to reduce file size.
            </p>
        <h2 className='border-b border--2 border--gray-faint pb6 mt72 txt-l uppercase txt-bold'>
          Details
        </h2>
          <h3 className='mt24 txt-bold'>
            Assembly resets default styling on semantic elements
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
            Elements are sized according to <code className='code'>box-sizing: border-box</code>
          </h3>
            <p className='mt6'>
              The <code className='code'>border-box</code> box model allows for more intuitive styling than the default <code className='code'>content-box</code> model.
              For example, when you set a <code className='code'>w300</code> class, your element will always be 300 pixels wide, regardless of its padding and borders.
            </p>
          <h3 className='mt24 txt-bold'>
            Media queries are mobile-first
          </h3>
            <p className='mt6'>
              Assembly uses the following media queries:
            </p>
            <div className='prose mt6'><ul className='txt-ul'>
              <li>large screens: <code className='code'>(min-width: 1600px) and (min-height: 1000px)</code></li>
              <li>medium screens: <code className='code'>(min-width: 800px) and (min-height: 600px)</code></li>
              <li>small screens: <code className='code'>(min-width: 640px) and (min-height: 420px)</code></li>
            </ul></div>
            <p className='mt6'>
              Classes that take affect within certain media queries always end with a <code className='code'>{'-media-<size>'}</code> suffix,
              where "size" is <code className='code'>s</code>, <code className='code'>m</code>, or <code className='code'>l</code>.
            </p>
          <h3 className='mt24 txt-bold'>
            <code className='code'>!important</code> guarantees utility class behavior
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
