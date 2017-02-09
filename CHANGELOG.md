# Changelog

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
