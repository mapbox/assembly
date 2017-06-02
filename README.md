# Assembly

<img width='200px' src='https://rawgit.com/mapbox/assembly/dev-pages/assembly-logo.svg?v1'>

A CSS framework that makes the hard parts of building anything on the web easy. We define the hard parts as: managing class specificity, designing cross-browser form components that work well with each other, creating a harmonious typographic scale, maintaining a baseline grid, and keeping responsive designs simple.

For usage guidelines and documentation, check out https://www.mapbox.com/assembly/.

[![Build Status](https://travis-ci.com/mapbox/assembly.svg?token=FB2dZNVWaGo68KZnwz9M&branch=dev-pages)](https://travis-ci.com/mapbox/assembly)

## Browser support

Assembly targets IE 11+ and other modern browsers.

## Custom Builds

Assembly exposes a JS module for creating custom builds. Why might you want to create a custom build?

- You want to customize variables (like colors and font stacks) or media queries.
- You want to append extra stylesheets that also use Assembly's variables and media queries.
- You want to reduce file-size by picking and choosing the color variants you need.

### buildUserAssets(outdir[, options])

Returns a Promise that resolves when all assets have been written to `outdir`.

```js
const Assembly = require('assembly');
Assembly.buildUserAssets('path/to/my/outdir', myOptions)
  .then(() => /* something */)
  .catch((err) => /* handle error */);
```

**Options**, all of which are optional:

- **`files`**: An array of file paths to stylesheets you would like to append to `assembly.css`. These will be processed through Assembly's PostCSS pipeline.
- **`variables`**: An object whose properties will override and add to `src/variables.json`. Use this option to change or add variables.
  These variables are accessible in any stylesheets you append via the CSS custom properties syntax, e.g. `var(--property-name)`.
- **`mediaQueries`**: An object whose properties will override and add to `src/mediaQueries.json`. Use this option to change or add media queries.
  These media queries are accessible in any stylesheets you append via the CSS custom media query syntax, e.g. `@media --media-query-name`.
- **`colorVariants`**: An object or array specifying the color variants you would like added to `assembly.css`. This is documented in detail below.
- **`quiet`**: Suppress logs.

### `colorVariants` option

If the `colorVariants` value is an array, it must be an array of color names corresponding to variables. All components will have color variants generated for all colors in the array.

The following configuration specifies an array of default colors. All components will have these (and *only these*) color variants.

```json
[
  "red",
  "green-light"
]
```

If the `colorVariants` value is an object, each property value must be an array of color names corresponding to variables. The property names designate which component each color array applies to:
  - `default`: These colors apply to all components that are not otherwise specified.
  - `buttonFill`: `*-dark` colors will not be used.
  - `buttonStroke`: `*-dark` colors will not be used.
  - `inputTextarea`: `*-dark` colors will not be used.
  - `selectFill`: `*-dark` colors will not be used.
  - `selectStroke`: `*-dark` colors will not be used.
  - `checkbox`: `*-dark` colors will not be used.
  - `radio`: `*-dark` colors will not be used.
  - `switch`: `*-dark` colors will not be used.
  - `toggle`: `*-dark` colors will not be used.
  - `range`: `*-dark` colors will not be used.
  - `color`
  - `background`
  - `link`: `*-dark` colors will not be used.
  - `border`
  - `hoverShadow`: Only `lighten*` and `darken*` colors will be used.
  - `hoverBackground`
  - `hoverColor`
  - `hoverBorder`

The following configuration specifies colors for individual components. In this configuration, every component not specified will have the `default` color variants; specified components will have their specified color variants; and `switch` and `range` components will have no color variants (only the default will be available).

```json
{
  "default": ["lighten50", "lighten25", "gray"],
  "buttonFill": ["green", "purple"],
  "selectFill": ["green"],
  "background": ["orange", "yellow", "pink"],
  "link": ["orange"],
  "hoverShadow": ["lighten50"],
  "switch": [],
  "range": []
}
```

## Development principles

### Writing rules

Assembly strives for flat, single rule declarations and avoids overrides whenever possible. Assembly makes all Atomic-style utility classes `!important`, so they cannot be overridden, and so they are guarateed to do what they say they do.

### Naming classes

- Keep names as short as possible.
- Use real number values in utility class names to describe the value the utility class applies _in cases where the number of utility classes describing a particular property could be unlimited_. For example, `.p6` for `padding: 6px` instead of `.p-small` or `.p-1`.
- If the number of utility classes describing a property is limited, Assembly classes use the suffixes, `xl`, `l`, `m`, `s`, `sm`.
- Assembly doesn't have a top level namespace. Assembly is designed to provide fundamental rules that are used frequently and should be easy to type and remember. If you want to use your own css with base, consider namespacing that css.

### Media query class variants

Media query class variants (e.g. `block-mm` as a variant of `block`) are automatically generated and added to the CSS build with `scripts/build-media-variants.js`. If you want to generate media variants for a new class, or change which classes get media variants, you'll need to modify the lists in that file.

## Development

### Tools

- [Yarn](https://yarnpkg.com/) for installing packages.
- [PostCSS](http://postcss.org/) for processing CSS. PostCSS parses CSS and runs it through plugins, and these are the plugins we're using:
  - [Autoprefixer](https://autoprefixer.github.io/) automatically adds vendor prefixes.
  - [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) allows us to use variables for values, with the [CSS custom properties syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/--*).
  - [postcss-custom-media](https://github.com/postcss/postcss-custom-media) allows us to use variables for media queries, with the [CSS custom media queries syntax](https://www.w3.org/TR/2016/WD-mediaqueries-4-20160126/#custom-mq).
  - [concat-with-sourcemaps](https://github.com/floridoo/concat-with-sourcemaps) allows us to split our CSS into multiple stylesheets.
- [stylelint](http://stylelint.io/) lints our CSS.
- SVGs
  - [svgstore](https://github.com/svgstore/svgstore) compiles our SVGs into a SVG "sprite" of sorts, allowing us to use [the latest and greatest SVG-based icon system](https://css-tricks.com/svg-sprites-use-better-icon-fonts/).
- Documentation
  - [documentation-css](https://github.com/documentationjs/documentation-css) parses annotation comments in the CSS, outputting objects that can be used to build documentation.
- [Browsersync](https://browsersync.io) provides a fancy development server.

### Install and start

```bash
yarn # Installs your `node_modules`

npm start # Builds everything, starts a dev server, rebuilds & reloads on changes

npm run build:js # Build SVGs and other JS
```

### Releasing

Development is done in the `dev-pages` branch, but releases are made from the `mb-pages` branch.

- Document changes in the [`CHANGELOG`](https://github.com/mapbox/assembly/blob/dev-pages/CHANGELOG.md).
- Increment the version key in [`package.json`](https://github.com/mapbox/assembly/blob/dev-pages/package.json).
- Merge these changes into the `mb-pages` branch. *Conduct the following steps from `mb-pages`*.
- Tag the version in git. Use the exact version number, without any letters (e.g. `0.8.0` instead of `v0.8.0`).
- Then `git push --tags`.
- Publish the new version on npm via `npm publish`.
- Run `npm run deploy` to upload the new version to s3. **Note** you will need
to be authenticated on AWS to do so.

---

For other scripts, look in `package.json`.
