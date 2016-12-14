Assembly
---

A CSS framework.

[![Build Status](https://travis-ci.com/mapbox/assembly.svg?token=FB2dZNVWaGo68KZnwz9M&branch=mb-pages)](https://travis-ci.com/mapbox/assembly)

Browser support
---

Assembly targets IE 11+ and other modern browsers.

## Principles

### Class naming convention

- Keep names as short as possible.
- Use real number values in utility class names to descibe the value the ulility class applies _in cases where the number of utility classes could be unlimited_. For example, `.p5` for `padding: 5px` instead of `.p-small` or `.p-1`.
- Unless absolutely necessary, selectors consist of a single class. This means that a class's effect will not vary when combined with different classes.
- Assembly doesn't have a top level namespace. Assembly is designed to provide fundamental rules that are used frequently and should be easy to type and remember. If you want to use your own css with base, consider namespacing that css.

### Media queries

- Many classes have media query variants. The media query variants follow a naming convention: suffix `-media-{size}` to end of the rule. For example, for the class `.p5`, the variations are: `.p5-media-s`, `.p5-media-m`, `.p5-media-l`,
- If a class has a media query variant for one breakpoint, it must also have a variant for all breakpoints.
- Order in stylesheet of media query rules is consistent: first the default rule, followed by the `-media-l` rule, followed by the `-media-m` rule, followed by the `-media-s` rule. We do this to guarantee that small rules override medium rules, etc.

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

### Install and start

```bash
yarn # Installs your `node_modules`

npm start # Builds everything, starts a dev server, re-builds on changes

npm run build:svg # Build SVGs
```

For other scripts, look in `package.json`.
