# Assembly

<img width='200px' src='https://rawgit.com/mapbox/assembly/dev-pages/assembly-logo.svg?v1'>

A CSS framework that makes the hard parts of building anything on the web easy. We define the hard parts as: managing class specificity, designing cross-browser form components that work well with each other, creating a harmonious typographic scale, maintaining a baseline grid, and keeping responsive designs simple.

For usage guidelines and documentation, check out https://labs.mapbox.com/assembly/.

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
- **`icons`**: An array of icons names to include in Assembly. Names correspond to file names in `src/svgs/`. Use this option to decrease the size of assembly.js by only including the icons you need.
- **`browsersList`**: A [Browserslist](https://github.com/ai/browserslist) array to be used by [Autoprefixer](https://github.com/postcss/autoprefixer). Default: `['last 4 versions', 'not ie < 10']`.
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

Assembly strives for flat, single rule declarations and avoids overrides whenever possible. Declarations are marked as `!important` for classes whose names directly correspond with what they do — e.g. `bg-blue`, `px12`. This way they cannot be overridden and so are guaranteed to actually do what they say they do.

### Naming classes

- Keep names as short as reasonable.
- Use real number values in utility class names to describe the value the utility class applies _in cases where the number of utility classes describing a particular property could be unlimited_. For example, `.pt6` for `padding-top: 6px` instead an abstract scale like `.pt-small` or `.pt-1`.
- If the number of utility classes describing a property is limited and the variants are about size, Assembly classes use the suffixes `xl`, `l`, `m`, `s`, `sm`.
- Assembly provides a reset that will affect the entire page, but other than that reset none of its rules should affect the styling of elements that don't bear Assembly classes.

### Media query class variants

Media query class variants (e.g. `block-mm` as a variant of `block`) are automatically generated and added to the CSS build with `scripts/build-media-variants.js`. If you want to generate media variants for a new class, or change which classes get media variants, you'll need to modify the lists in that file.

## Development

### Tools

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
- [Batfish](https://github.com/mapbox/batfish) powers the website.

### Install and start

```bash
npm ci # Installs your `node_modules`

npm start # Builds everything, starts a dev server, rebuilds & reloads on changes

npm run build:js # Build SVGs and other JS
```

For other scripts, look in `package.json`.

### Releasing

Development is done in the `dev-pages` branch, but releases are made from the `mb-pages` branch. Here's how you cut a release:

- From `dev-pages`:
  - Document changes in the [`CHANGELOG`](https://github.com/mapbox/assembly/blob/dev-pages/CHANGELOG.md).
  - Increment the version key in `package.json` and `package-lock.json`.
  - Make sure all this is committed, typically with a commit message like `Prepare 0.8.0`.
  - Merge these changes into the `mb-pages` branch. *Conduct the following steps from `mb-pages`*.
- From `mb-pages`:
  - Create a tag. No message is necessary, since the changelog includes explanations of changes. For example: `git tag -a 0.8.0 -m ""`.
  - Push the tag: `git push --tags`.
  - Publish the new version on npm.
  - Deploy the changes. Talk to **@mapbox/frontend-platform** if you need help.
