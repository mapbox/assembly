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

### Changes to `flex` and `flex-child`

`flex-child` has been removed and `flex-child--{x}` modifiers are no longer modifiers:

- `flex-child` no longer exists. In almost all cases it did nothing in any browser except IE11, so you be safe to remove all instances of this class.
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

`col` no longer declares `flex-basis:0`. You might see subtle changes in column layouts where `col` elements now take up more horizontal space than they previously did. Add a percentage width class alongside `col` to give your columns whatever width you desire.

### Changes to `col--{x}` modifiers

`col--{n}` & `col--off{'r' | 'l'}{n}` classes have been replaced by generic percentage based width classes. A direct find and replace should work reliably:

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

- `scroll-scroll` → `overflow-scroll`
- `scroll-auto` → `overflow-auto`
- `scroll-hidden` → `overflow-hidden`

### Changes to `loading`

Previously, `loading` included `margin:auto` to center the loader horizontally by default. Add `mx-auto` to the `loading` elemen to reintroduce this behavior.

### `limiter` removal

Before 1.0.0, Assembly had a complex limiter class that was convenient but inflexible. You can use these existing classes to exactly imitate limiter: `wmax1200 w-11/12-mm w-5/6-ml mx-auto px24 px0-mm`.

### Icon removal

Every icon has been redrawn in 1.0.0 but some icons have been removed. If you use any of the following icons, seek an alternative source:

- `adjust-stroke`
- `android`
- `apple`
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
