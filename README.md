Assembly
---

A CSS framework.

[![Build Status](https://travis-ci.com/mapbox/assembly.svg?token=FB2dZNVWaGo68KZnwz9M&branch=mb-pages)](https://travis-ci.com/mapbox/assembly)

Browser support
---

Assembly targets IE 11+ and other modern browsers.

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

npm run css # Builds the CSS

npm run watch # Watches source CSS for changes and re-builds

npm run svgs # Builds the SVGs

npm run debug # Starts a simple server you can use to look at pages in debug/

npm run build # Builds everything
```
