---
title: Assembly.css
---

<div class="pt24">
  <div class="flex-ml flex--wrap-ml">
    <h1 class="flex-child-grow-ml txt-h2 txt-bold">Assembly.css</h1>
    <div class="mt18 color-darken50">v2.0.0</div>
  </div>
  <p class="txt-l mt18">
    Assembly is an atomic CSS framework with great default form element styles. Use it, and your team will never have to write CSS again.
  </p>
</div>

<h2 id="getting-started" class="border-b border-b--2 border--gray-faint pb6 mt60 mb36 txt-l txt-bold">Getting started</h2>

<p>Include in the head of your HTML the Assembly stylesheet.</p>

```html
<link href="https://api.mapbox.com/mapbox-assembly/v2.0.0/assembly.min.css" rel="stylesheet">
```

<p class="mt24">
  Include the Assembly JavaScript anywhere in your HTML. It is safe to use the <code class="txt-code">async</code> and <code class="txt-code">defer</code> attributes. See <a class="link" href="#javascript-api">Javascript API</a> for details.
</p>

```html
<script async defer src="https://api.mapbox.com/mapbox-assembly/v2.0.0/assembly.js"></script>
```

<h3 class="mt60 mb12 txt-bold">HTML Template</h3>
<p>Get started right away with this bare-bones HTML template.</p>

```html
<!DOCTYPE html>
<html lang='en'>
<head>
  <title><!-- Your title goes here --></title>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  <link rel='shortcut icon' href='Your favicon path goes here' type='image/x-icon'>
  <link href='https://api.mapbox.com/mapbox-assembly/v2.0.0/assembly.min.css' rel='stylesheet'>
  <script async defer src='https://api.mapbox.com/mapbox-assembly/v2.0.0/assembly.js'></script>
</head>
<body>
  <!-- Your page... -->
</body>
</html>
```

<p class="mt12">
  Unsure what else you need in the <code class="txt-code">&lt;head&gt;</code>? Check out <a class="link" href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML">MDN's detailed guide</a>.
</p>

<h2 id="philosophy" class="border-b border-b--2 border--gray-faint pb6 mt60 txt-l txt-bold">Philosophy</h2>
<div class="grid grid--gut24 grid--gut36-ml">
  <div class="col w-1/2-ml">
    <h3 class="mt60 mb12 txt-bold">Comprehensive</h3>
    <p>Assembly includes everything you need to fully implement responsive, colorful web pages, web apps, dashboards, and more.</p>
  </div>
  <div class="col w-1/2-ml">
    <h3 class="mt60 mb12 txt-bold">Flexible</h3>
    <p>The core of Assembly is a set of composable, atomic utility classes covering most of your styling needs.</p>
  </div>
  <div class="col w-1/2-ml">
    <h3 class="mt60 mb12 txt-bold">Practical</h3>
    <p>Complete reliance on atomic design can slow down development and foster inconsistency and bad UX. Assembly inserts the right opinions in the right places.</p>
  </div>
  <div class="col w-1/2-ml">
    <h3 class="mt60 mb12 txt-bold">Customizable</h3>
    <p>Assembly exposes its build process in a public API. Customize colors, fonts, and media queries; append your own stylesheets; and specify color variants to reduce file size.</p>
  </div>
</div>

<h2 id="overview" class="border-b border-b--2 border--gray-faint pb6 mt60 txt-l txt-bold">Overview</h2>

<div class="mt60 flex-mm">
  <div class="flex-child-no-shrink mr24 mb0-mm mb18 w60 h60">
    <img src="./img/modifier.svg" alt="" />
  </div>
  <div>
    <h3 class="txt-bold">Classes and modifier classes</h3>
    <p class="mt12">
      A double-hyphen in a class name (e.g. <code class="txt-code">border--blue</code>) indicates that the class is a <span class="txt-em">modifier class</span>. A modifier class extends the class whose name precedes the double-hyphen (e.g. <code class="txt-code">border--blue</code> modifies <code class="txt-code">border</code>; <code class="txt-code">flex-child--grow</code> modifies <code class="txt-code">flex-child</code>). And <span class="txt-em">modifier classes should only ever be used in combination with the class they modify</span>: modifier classes will not work well on their own.
    </p>
  </div>
</div>

<div class="mt60 flex-mm">
  <div class="flex-child-no-shrink mr24 mb0-mm mb18 w60 h60">
    <img src="./img/baseline-grid.svg" alt="" />
  </div>
  <div>
    <h3 class="txt-bold">6 pixel baseline grid</h3>
    <p class="mt12">
      Every element in Assembly is designed according to a 6 pixel baseline grid, even buttons and form components. Baseline grids don't just make your site look and feel better: they also make development more convenient. All the pieces naturally fit together without fiddling with line height or vertical alignment.
    </p>
  </div>
</div>

<div class="mt60 flex-mm">
  <div class="flex-child-no-shrink mr24 mb0-mm mb18 w60 h60">
    <img src="./img/defaults.svg" alt="" />
  </div>
  <div>
    <h3 class="txt-bold">No default styling for semantic elements</h3>
    <p class="mt12">
      You should use <code class="txt-code">&lt;h3&gt;</code> for third-level headings, not because you want a certain style. Similarly, you should use <code class="txt-code">&lt;button&gt;</code> when a button is behaviorally and semantically appropriate, instead of <code class="txt-code">href</code>-less <code class="txt-code">&lt;a&gt;</code> tags or other elements with click handlers.
    </p>
    <p class="mt12">
      Assembly's reset allows you to use semantically appropriate HTML without battling browser-default styles. And its CSS rules are built to behave the same regardless of which element they're applied to. A heading <em>style</em>, or a button <em>style</em>, can be applied to <em>any</em> element by applying the appropriate classes.
    </p>
  </div>
</div>

<div class="mt60 flex-mm">
  <div class="flex-child-no-shrink mr24 mb0-mm mb18 w60 h60">
    <img src="./img/custom-icons.svg" alt="" />
  </div>
  <div>
    <h3 class="txt-bold">Customizable icons</h3>
    <p class="mt12">
      Assembly comes with <a class="link" href="./icons">more than 150 icons</a>, intended to be used as inline SVGs. Inline SVGs are easy to resize and color.
    </p>
  </div>
</div>

<div class="mt60 flex-mm">
  <div class="flex-child-no-shrink mr24 mb0-mm mb18 w60 h60">
    <img src="./img/media-queries.svg" alt="" />
  </div>
  <div>
    <h3 class="txt-bold">Media queries are mobile-first</h3>
    <p class="mt12">
      Mobile-first media queries lead to cleaner code because there are fewer overrides. Start with a simple mobile layout, then add complexity with additional media-constrained rules. Assembly uses the following media queries:
    </p>
    <div class="prose mt12">
      <ul class="txt-ul">
        <li>Extra large screens: <code class="txt-code">screen and (min-width: 1200px)</code></li>
        <li>Large screens: <code class="txt-code">screen and (min-width: 800px)</code></li>
        <li>Medium screens: <code class="txt-code">screen and (min-width: 640px)</code></li>
      </ul>
    </div>
    <p class="mt12">
      Classes that take effect within certain media queries always end with a <code class="txt-code">-m&lt;size&gt;</code> suffix, where "size" is <code class="txt-code">m</code>, <code class="txt-code">l</code>, or <code class="txt-code">xl</code>.
    </p>
  </div>
</div>

<div class="mt60 flex-mm">
  <div class="flex-child-no-shrink mr24 mb0-mm mb18 w60 h60">
    <img src="./img/specificity.svg" alt="" />
  </div>
  <div>
    <h3 class="txt-bold">Utility classes have maximum specificity</h3>
    <p class="mt12">
      Assembly uses <code class="txt-code">!important</code> on declarations whose effect directly corresponds to a class name.
    </p>
    <p class="mt12">
      For example, in the <code class="txt-code">.bg-blue</code> rule, the <code class="txt-code">background-color</code> declaration is <code class="txt-code">!important</code>. On the <code class="txt-code">.pl20</code> rule, the <code class="txt-code">padding-left</code> declaration is <code class="txt-code">!important</code>. This ensures that such classes always behave the same. Whenever you see the class <code class="txt-code">bg-blue</code> on an element, that element should have a blue background, regardless of its context and the other rules that apply to it.
    </p>
    <p class="mt12">
      For dynamic styles, responsive classes (described above) provide some additional flexibility. But if you need even more, you should use custom CSS instead of a utility class.
    </p>
  </div>
</div>

<div class="mt60 flex-mm">
  <div class="flex-child-no-shrink mr24 mb0-mm mb18 w60 h60">
    <img src="./img/box-model.svg" alt="" />
  </div>
  <div>
    <h3 class="txt-bold">More intuitive box model</h3>
    <p class="mt12">
      The <code class="txt-code">border-box</code> box model allows for more intuitive styling than the default <code class="txt-code">content-box</code> model. For example, when you set a <code class="txt-code">w360</code> class, your element will always be 360 pixels wide, regardless of its padding and borders.
    </p>
  </div>
</div>

<div class="mt60 flex-mm">
  <div class="flex-child-no-shrink mr24 mb0-mm mb18 w60 h60">
    <img src="./img/is-active.svg" alt="" />
  </div>
  <div>
    <h3 class="txt-bold"><code class="txt-code">is-active</code> applies active states</h3>
    <p class="mt12">
      Assembly uses the <code class="txt-code">is-active</code> state class to designate that an element is active and style it accordingly.
    </p>
    <p class="mt12">
      The <code class="txt-code">is-active</code> state on buttons and links darkens their color. And the <code class="txt-code">*-on-active</code> state classes (e.g. <code class="txt-code">color-red-on-active</code>) only take effect when combined with the <code class="txt-code">is-active</code> class.
    </p>
  </div>
</div>

<div class="mt60 flex-mm">
  <div class="flex-child-no-shrink mr24 mb0-mm mb18 w60 h60">
    <img src="./img/focus.svg" alt="" />
  </div>
  <div>
    <h3 class="txt-bold">Focus outlines as needed</h3>
    <p class="mt12">
      Assembly turns off focus outlines when you mousedown and turns them back on, universally, when you hit <kbd class="txt-kbd">Tab</kbd>. This means that only the keyboard users who need them will see nice, prominent focus outlines, while mouse users won't have the design disturbed unnecessarily.
    </p>
  </div>
</div>

<h2 id="javascript-api" class="border-b border-b--2 border--gray-faint pb6 mt60 mb36 txt-l txt-bold">Javascript API</h2>
<p>
  By importing <code class="txt-code">assembly.js</code> into your html page, you gain access to a set of functions on a global <code class="txt-code">Assembly</code> namespace.
</p>

<h3 class="mt60 mb12 txt-bold">Focus state</h3>
<p class="mb24">
  <code class="txt-code">assembly.js</code> adds event listeners that show and hide focus states depending on whether the user is navigating with a keyboard or with a pointer device. If focus state is on, an outline appears around focused elements. If focus state is off, no outline appears. The Javascript API allows you to programmatically override this focus state.
</p>
<h3 class="mb12 mt24 txt-bold">
  <code class="txt-code">Assembly.setFocusState(enable?: boolean): void</code>
</h3>
<div class="prose">
  <p>Turn focus state on or off. Inverts focus state if called with no argument.</p>
</div>

<h3 class="mt60 mb12 txt-bold">Icons</h3>
<p class="mb24">
  Use these functions to add icons to the page or edit them programmatically.
</p>
<h3 class="mb12 mt24 txt-bold">
  <code class="txt-code">Assembly.createIcon(iconName: string): SVGElement</code>
</h3>
<div class="prose">
  <p>Returns an SVG element containing a <code>&lt;use&gt;</code> element referencing the designated icon.</p>
  <p>Throws an error if the designated icon does not exist in Assembly.</p>
</div>
<h3 class="mb12 mt24 txt-bold">
  <code class="txt-code">Assembly.changeIcon(iconEl: SVGElement, iconName: string): SVGElement</code>
</h3>
<div class="prose">
  <p>
    Given an icon SVG element (<em>not</em> the <code>&lt;use&gt;</code> element inside it), such as what <code>Assembly.createIcon</code> returns, changes the icon and returns the SVG element.
  </p>
  <p>Throws an error if the designated icon does not exist in Assembly.</p>
</div>
<h3 class="mb12 mt24 txt-bold">
  <code class="txt-code">Assembly.iconExists(iconName: string): boolean</code>
</h3>
<div class="prose">
  <p>Returns a boolean indicating whether an icon exists in Assembly.</p>
</div>
