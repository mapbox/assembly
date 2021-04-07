# Changelog

## Unreleased

- [add] Add new cursor classes for `cursor-grab` and `cursor-grabbing`.
- [add] Add `Assembly.setFocusState` method to make it easier to programmatically change the value of `data-assembly-focus-control`.
- Rework typographic scale. Numbers are in the format _(font-size/line-height)_:

  | Selector | Old value | New value |
  | -------- | :-------: | --------: |
  | .txt-h1  | 45px/54px | 36px/45px |
  | .txt-h2  | 35px/42px | 30px/36px |
  | .txt-h3  | 30px/36px | 24px/30px |
  | .txt-h4  | 18px/24px | 20px/25px |
  | .txt-h5  | 15px/18px | 16px/20px |
  | .txt-xl  | 30px/45px | 30px/45px |
  | .txt-l   | 18px/30px | 20px/30px |
  | .txt-m   | 15px/24px | 16px/24px |
  | .txt-ms  |    N/A    | 14px/21px |
  | .txt-s   | 12px/18px | 12px/18px |
  | .txt-xs  | 10px/15px | 10px/15px |

- Add `font-display:swap` to all @font-face declarations.
- Remove grow, and add y offset to `shadow` classes.
- [breaking] Update browser compatibility targets, drop IE11 support.
- [breaking] remove `txt-spacing4` class and add `txt-spacing05` class.
- [breaking] renamed `scroll-*` classes to `overflow-*`.
- [add] `sticky` position rule.

## 0.26.0

- Add `drag` icon.

## 0.25.0

- Add `horizon` icon.

## 0.24.0

- Add `unlock` icon.

## 0.23.2

- Fix unnecessary vector data in `history.svg` icon.

## 0.23.1

- Add line-center icon.

## 0.23.0

- [breaking] Remove `input--xs`, `select--xs`, and `btn--xs`. You should switch to the `--s` modifiers, which have been modified to merge the _best_ of `--s` and `--xs`.
- [breaking] Drop support for Node 4 in custom build. **This has no effect on the client-side CSS or JS.**
- [style change] Selects are now styled like inputs, instead of buttons.
- [style change] Increase default horizontal padding on buttons and selects.
- [style change] Increase default horizontal padding on buttons.
- [style change] Scale down font sizes on toggle groups and small inputs & selects.
- [style change] Switch active states are no longer dark.
- [style change] Toggle groups have metrics that are more similar to buttons.
- [add] `toggle--s` style.
- [add] Add `switch--l`, for large switches.

## 0.22.0

- [breaking] Fonts are no longer distributed with each version. Instead, fonts are served from `https://api.mapbox.com/mapbox-assembly/fonts/*` and referenced from the CSS with absolute URLs.

## 0.21.3

- [fix] Set `border: 0` in `reset.css`, instead of `border: none`.
  Fixes an obscure bug where if you used the unminified CSS and set a `border-{side}` class on a `btn`, you'd see unwanted thick borders on all sides except the one you specified.

## 0.21.2

- [fix] Avoid a PostCSS warning about `from` not being set.

## 0.21.1

- [fix] Clean up and update dependencies.

## 0.21.0

- Added fade-in-out animation.
- [fix] Fixing the unity svg.
- [fix] Updates examples to use changed classname.

## 0.20.0

- Add filter, flame, instagram, qT icons.
- Vertically center chevron icons.
- [fix] Add height and width to checkbox icons in `.checkbox` class so check icons are the right size.
- [fix] On checkbox, swich, and radio components, set cursor style on the form element, rather than form container, for correct accurate cursor state when form element is disabled.

## 0.19.0

- [fix] Add `border-radius:0` to button reset to address recent changes in Chrome's default button style.
- [breaking] Remove buggy `icon-inliner` class.
- [breaking] Remove `icon--s` and `icon--l` classes.
- [breaking] change default icon size to 1em x 1em
- [style change] Remove hover states from radio, and checkbox, toggle form components.
- [breaking] Refactor line heights and text sizes for form components.
- [breaking] input and textarea components now use box-shadow to render borders, not border.
- Adds `--xs` modifier classes to input, textarea, and select form components.
- Add disabled styling to button elements with disabled property that have the `link` class.
- [breaking] refactor border rules so they work as expected with media queries, add `border-{direction}--2` rules.
- [breaking] remove some rarely used icons:
  - antialias
  - land
  - landuse
  - levels
  - line-miter-limit
  - line-round-limit
  - minus-document
  - plus-document
  - ribbon
- Add `no-print` class to hide content when printing webpages
- [fix] ensure disabled buttons show default cursor, not pointer cursor.
- [breaking] rename `clip` to `scroll-hidden`.
- [fix] remove unecessary `!important` declarations on `:disabled`, and loading rules.

## 0.18.0

- [style change] make small range input visually smaller. Doesn't change the metrics of the input, so this is not a breaking change.

## 0.17.0

- [style change] Removed border from disabled buttons.
- [add] Add `-webkit-overflow-scrolling: touch` to `scroll-auto` for momentum scrolling on iOS.
- [fix] Set `display: block` on the `main` tag, fixing possible bugs in IE.
- [breaking] Changed browser support list to more precisely reflect our intentions:
  - last 4 Chrome versions
  - last 4 Firefox versions
  - last 4 Safari versions
  - iOS >= 7
  - Android >= 4.4
  - IE >= 11
- [breaking] Update to PostCSS 6. If you are using a custom build, this might affect you, especially if you use a custom `browsersList` value, because Browserslist 2 (dependency of PostCSS 6) involves some breaking changes (usually it means you will end up supporting more browsers than you intended).

## 0.16.0

- Add mobile conditions for `events-{none|all}`
- [breaking] Name change of `select-none` & `select-text` to `selectable` & `unselectable`
- Add mobile conditions for `selectable` & `unselectable`

## 0.15.0

- Add `align-b` class to vertically align inline inline or table-cell elements to the bottom.
- Change defualt behavior of the `col` class – `col`s in a grid now stretch to fill all the space, each `col` occupying equal space unless `col--{size}` modifiers are used.
- Adds `col--auto` modifier to imitate `col` default behavior. Useful for media query overrides of `col--{size}` rules.
- Fixes bug that lead to incorrect generation of `hoverBorder`, `hoverColor`, and `hoverBackground` color variants.

## 0.14.0

- Adds new 'limiter' class for setting max page width across screen sizes.
- [breaking] Significantly refactors layout scale to be more consistent across different properties and to increment more predictibly. Removes `48`, `72`, `96`, `420`, `480`, `720`, and `960` values for all properties that had them. Adds `60`, `120` to all properties. Adds `600` value to height and width properties. Adds negative margins to match all positive margin values.
- Adds missing `--dark` modifiers to some typography rules.
- Stroked buttons and select elements now have a 1px stroke by default.
- Adds new `btn--stroked--2` and `select--stroked--2` modifier classes to create stroked buttons and select elements that have 2px strokes.
- [internal only] Renames `neutral` variables to more meaningful `disabled-{type}-interactive` variables.
- Darken the `gray-faint` color to `#e5e5e5` so it's legible on a wider range of monitors.
- [breaking] Remove teal color variations.
- Refactor range inputs to use currentColor for coloring, which save space
- [breaking] Remove `darken5` and `lighten5` color variations to save space and encourage more accessible design.
- [breaking] Remove `p{n}` and `m{n}` rules.
- [breaking] Limit the possible colors available for form elements as well as `--on-active` and `--on-hover` modifiers for accessibility reasons and to save size. `-faint` or `-light` form elements are no longer available for _any element_, and `darken10` and `darken10` are no longer available for any for element except buttons.
- Add distinct hover states for active checkboxes and radio inputs.
- Redesign checkbox active state to be clearer, more conventional.
- Add `select--xs` class.
- Fix bug with browser prefixing to cover the correct browsers.
- Add color and hover states by default to links inside `.prose`.
- Fix visual bug with `txt-abbr` rule.
- Update version of Open Sans to fix regular weight / bold weight line heighht differences.
- Fix bug with `animation-spin` utility.

## 0.13.1-2

- Fix syntax of Browserslist for Autoprefixer.

## 0.13.0

- Add `Assembly.createIcon`, `Assembly.changeIcon`, and `Assembly.iconExists` functions to assembly.js
- Changed `mapbox` icon to reflect new branding.
- Changed `options` icon to a larger revision.
- Add negative margin classes for all margin class variants.
- Add linting improvements to JS and CSS.
- Add various documentation improvements.
- Add shadow class automation.

## 0.12.0

- Add media query variants for bleed classes (e.g. `bleed-r-ml`).
- Add `unbleed` class.
- Add more browser prefixes, so more browsers can take advantage of flex classes.
- Add `flex-parent--space-between-main` class.
- Add options icon.

## 0.11.0

- Rework typographic scale to have separate headline rules (`txt-h1`, `txt-h2`, `txt-h3`, `txt-h4`, `txt-h5`) from body text rules (`txt-xl`, `txt-l`, `txt-m`, `txt-s`, `txt-xs`). Headline rules have tighter line height than body text rules.
- Add new `btn--pill-stroke` rule to make sure combined stroked/filled button pills look good.
- Fix padding on table elements.
- Make `-dark` colors darker.
- Fix bug with appearance of disabled select item in FF.

## 0.10.1

- Remove `a:hover { box-shadow: none }` from reset.

## 0.10.0

- Rework buttons so their heights fall on 6px vertical grid when extra vertical padding is applied.

## 0.9.1

- Move media query class names (e.g. `m6-ml`) to the bottom of the generated stylesheets, fixing some source-order-caused bugs.

## 0.9.0

- Change default font size to 15px, change txt-l font size to 18px.

## 0.8.1

- Fix bug where custom colors in custom builds were being ignored.
- Add `transition` class to make any element have animatable transitions.

## 0.8.0

- Overhaul typographic scale (classes remain the same).
- Add `scroll-styled` class.
- Add `txt-spacing1` class.

## 0.7.0

- Add `transition` class.
- Allow `txt-{size}` classes to override the font-size set by `txt-mono`.

## 0.6.0

- Add `flex-parent--column-reverse`, `flex-parent--row`, and `flex-parent--row-reverse`.
- Add `txt-strike`, and support for corresponding elements `<del>` and `<s>` within `prose`.
- Simplify toggles, including the removal of default padding.
- Remove `at` icon.
- Add `extrusion` icon.
- Fix bug when combining `grid--gut*` media query classes with `col` media query classes.
- Fix font inheritance of `select`.
- Change focus-outline control to use a data attribute on the document element instead of a class name, to avoid accidental overwriting.
- Change `flex-parent--justify-end` to `flex-parent--end-main`.
- Add `flex-parent--end-cross`.
- Add `w-auto`, `wmax-none`, and `hmax-none`.

## 0.5.0

- Add `flex-child--no-shrink` class, which is essential after the changes in v0.4.0.

## 0.4.0

- Remove `flex-shrink: 0` from `flex-child`. This changes the way that flex children are laid out when they have wide content. The new pattern is, hopefully, more intuitive.
- Rename `alpha*` classes to `opacity*`.
- Add `chevron-up`, `chevron-down`, `chevron-left`, and `chevron-right` icons.

## 0.3.0

- Add `height: auto` with `h-auto`.
- Fix bug with grid classes.
- Add media queries for `round` rules.
- Fix bugs with button pills.
- Remove hover states from selects and textareas.
- Make icons `display: block`.
- Add negative margin classes.
- Make `input` and `textarea` full width by default.
- Various other small improvements.

## 0.2.0

- Round table corners by default.
- Make default form colors more practical.
- Make `prose` default text size customizable with `txt-{size}` classes.

## 0.1.0

- Start this changelog.
