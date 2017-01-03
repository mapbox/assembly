Assembly
---

A CSS framework that makes the hard parts of building anything on the web easy. We define the hard parts as: managing class specificity, designing cross-browser form components that work well with each other, creating a harmonious typographic scale, maintaining a baseline grid, and keeping responsive designs simple.

[![Build Status](https://travis-ci.com/mapbox/assembly.svg?token=FB2dZNVWaGo68KZnwz9M&branch=mb-pages)](https://travis-ci.com/mapbox/assembly)

Browser support
---

Assembly targets IE 11+ and other modern browsers.

## Development principles

### Writing rules

Assembly strives for flat, single rule declarations and avoids overrides whenever possible. Assembly makes all Atomic-style utility classes `!important`, so they cannot be overridden, and so they are guarateed to do what they say they do.

### Naming classes

- Keep names as short as possible.
- Use real number values in utility class names to describe the value the utility class applies _in cases where the number of utility classes describing a particular property could be unlimited_. For example, `.p6` for `padding: 5px` instead of `.p-small` or `.p-1`.
- If the number of utility classes describing a property is limited, Assembly classes use the suffixes, `xl`, `l`, `m`, `s`, `sm`.
- Assembly doesn't have a top level namespace. Assembly is designed to provide fundamental rules that are used frequently and should be easy to type and remember. If you want to use your own css with base, consider namespacing that css.

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

npm run build:svg # Build SVGs
```

For other scripts, look in `package.json`.
