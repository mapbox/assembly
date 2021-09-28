# Migration Guides

## 1.0.0+

Version 1.0.0 of Assembly introduces breaking changes – learn how to resolve them with this handy guide.

In addition to the changes outlined in this guide, 1.0.0 drops support for IE11. If you need to continue supporting IE11, we recommend staying on an older version of Assembly or migrating to another CSS framework.

### Changes to `viewport-{x}`

These classes have been renamed to make room for new viewport width classes:

- `viewport-third` → `h-viewport-1/3`
- `viewport-half` → `h-viewport-1/2`
- `viewport-twothirds` → `h-viewport-2/3`
- `viewport-almost` → `h-viewport-11/12`
- `viewport-full` → `h-viewport-full`

### Changes to `flex` and `flex-child`

`flex-child` has been removed and `flex-child--{x}` modifiers are no longer modifiers:

- `flex-child` no longer exists. In almost all cases, it only impacted rendering in IE11, so you may safely to remove all instances of this class.
- `flex-child--grow` → `flex-child-grow`
- `flex-child--no-shrink` → `flex-child-no-shrink`

`flex-parent` and all modifiers have been renamed:

- `flex-parent` → `flex`
- `flex-parent-inline` → `inline-flex`
- `flex-parent--column` → `flex--column`
- `flex-parent--column-reverse` → `flex--column-reverse`
- `flex-parent--row` → `flex--row`
- `flex-parent--row-reverse` → `flex--row-reverse`
- `flex-parent--center-main` → `flex--center-main`
- `flex-parent--center-cross` → `flex--center-cross`
- `flex-parent--start-main` → `flex--start-main`
- `flex-parent--start-cross` → `flex--start-cross`
- `flex-parent--end-main` → `flex--end-main`
- `flex-parent--end-cross` → `flex--end-cross`
- `flex-parent--wrap` → `flex--wrap`
- `flex-parent--stretch-cross` → `flex--stretch-cross`
- `flex-parent--space-between-main` → `flex--space-between-main`

### Changes to `col`

`col` no longer declares `flex-basis:0` or `flex-grow: 1;`. As a result, elements that use the `col` class without a width class will no longer grow to fill available space. To reintroduce the previous behavior, add the `col--auto` modifier to elements that use `col` without a width class.

### Changes to `col--{x}` modifiers

Generic percentage based width classes now take the place of `col--{n}` & `col--off{'r' | 'l'}{n}` modifier classes.

- `col--1` → `w-1/12`
- `col--2` → `w-1/6`
- `col--3` → `w-1/4`
- `col--4` → `w-1/3`
- `col--5` → `w-5/12`
- `col--6` → `w-1/2`
- `col--7` → `w-7/12`
- `col--8` → `w-2/3`
- `col--9` → `w-3/4`
- `col--10` → `w-5/6`
- `col--11` → `w-11/12`
- `col--12` → `w-full`
- `col--offr1` → `mr-1/12`
- `col--offr2` → `mr-1/6`
- `col--offr3` → `mr-1/4`
- `col--offr4` → `mr-1/3`
- `col--offr5` → `mr-5/12`
- `col--offr6` → `mr-1/2`
- `col--offr7` → `mr-7/12`
- `col--offr8` → `mr-2/3`
- `col--offr9` → `mr-3/4`
- `col--offr10` → `mr-5/6`
- `col--offr11` → `mr-11/12`
- `col--offl1` → `ml-1/12`
- `col--offl2` → `ml-1/6`
- `col--offl3` → `ml-1/4`
- `col--offl4` → `ml-1/3`
- `col--offl5` → `ml-5/12`
- `col--offl6` → `ml-1/2`
- `col--offl7` → `ml-7/12`
- `col--offl8` → `ml-2/3`
- `col--offl9` → `ml-3/4`
- `col--offl10` → `ml-5/6`
- `col--offl11` → `ml-11/12`

### Changes to `scroll-{*}`

All `scroll-{*}` classes except `scroll-styled` have been renamed to to `overflow-{*}`.

- `scroll-always` → `overflow-scroll`
- `scroll-auto` → `overflow-auto`
- `scroll-hidden` → `overflow-hidden`

### Changes to `loading`

Previously, `loading` included `margin:auto` to center the loader horizontally by default. Add `mx-auto` to the `loading` element to reintroduce this behavior.

### `limiter` removal

Before 1.0.0, Assembly had a complex limiter class that was convenient but inflexible. You can use these existing classes to exactly imitate `limiter`: `wmax1200 w-11/12-mm w-5/6-ml mx-auto px24 px0-mm`.

### Icon removal

Every icon has been redrawn in 1.0.0 and some icons have been removed. If you use any of the following icons, seek an alternative source:

- `adjust-stroke`
- `apple` renamed to `ios`
- `facebook`
- `instagram`
- `js`
- `lifebouy`
- `linkedin`
- `nofolder`
- `qt`
- `slack`
- `tooltip`
- `unity`
- `wechat`

### Other removed classes

`col--offl12` and `col--offr12` no longer exist. Reintroduce them with:

```css
.col--offl12 {
  margin-left: 100% !important;
}
.col--offr12 {
  margin-right: 100% !important;
}
```

`txt-spacing4` no longer exists. Reintroduce it with:

```css
.txt-spacing4 {
  letter-spacing: 0.4em !important;
}
```

`btn--stroke--2` no longer exists. Reintroduce it with:

```css
.btn--stroke--2 {
  box-shadow: inset 0 0 0 2px currentColor;
}

.btn.btn--stroke--2:disabled {
  box-shadow: inset 0 0 0 2px var(--inactive-text-color);
}

.btn--pill-stroke.btn--stroke--2.btn--pill-hc {
  margin-left: -2px;
  margin-right: 0;
}

.btn--pill-stroke.btn--stroke--2.btn--pill-hr {
  margin-left: -2px;
}

.btn--pill-stroke.btn--stroke--2.btn--pill-vc {
  margin-top: -2px;
  margin-bottom: 0;
}

.btn--pill-stroke.btn--stroke--2.btn--pill-vb {
  margin-top: -2px;
}
```

### Changes to element sizes, colors, and default styles

- The height of `toggle` is now 30px, down from 36px and the height of `toggle-s` is now 18px, down from 24px.
- The default form control color is gray, originally blue, for all form types.
- The typographic scale has been updated. Notably `txt-m` is now 16px, up from 15px and many headings have a smaller font-size.
- Shadow classes now have a y-offset.
- The default `select` is now borderless. To add a border, use `select--stroke`.
