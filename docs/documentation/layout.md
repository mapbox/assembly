# Layout

Define the size, shape, and content flow of your markup.

## Grid

Assembly uses a 12-column flexible grid with optional gutters.
`grid` is flexbox (`display: flex`). For CSS Grid, use [`gridbox`](#gridbox).

```selectors
.grid
.col
```

Grids require at minimum two elements: A parent with the class `grid` and a child with the class `col`. To define the width of `col` in a grid, add a width class, `col--auto`, or both. The `grid` class includes `*-mm`, `*-ml`, and `*-mxl` variations to target screen sizes.

To avoid unexpected side-effects, do not add margin left or right to `grid` and do not add padding left or right to `col`.

```example
<div class='grid'>
  <div class='col w-1/3 border border--darken10'>one</div>
  <div class='col w-1/3 border border--darken10'>two</div>
  <div class='col w-1/3 border border--darken10'>three</div>
</div>
```

```selectors
.col--auto
```

Apply to a `col` element to override a `col--{size}` rule and take on default `col`, occupying equal space with other `col` siblings.
This class is designed to be used with `*-mm`, `*-ml`, and `*-mxl` variations
to target screen sizes.

```example
<div class='grid'>
  <div class='col w-1/4 col--auto-ml border border--darken10'>w-1/4 col--auto-ml</div>
  <div class='col w-3/4 col--auto-ml border border--darken10'>w-3/4 col--auto-ml</div>
</div>
```

```selectors
.grid--gut0
.grid--gut3
.grid--gut6
.grid--gut12
.grid--gut18
.grid--gut24
.grid--gut30
.grid--gut36
.grid--gut60
.grid--gut120
```

Apply column gutters to all columns in a grid by adding a `grid--gut{size}` modifier to the `grid` element. Class set includes `*-mm`, `*-ml`, and `*-mxl` variations to target screen sizes.

```example
<div class='grid grid--gut12'>
  <div class='col w-1/6'>
    <div class='border border--darken10'>w-1/6</div>
  </div>
  <div class='col w-1/3'>
    <div class='border border--darken10'>w-1/3</div>
  </div>
  <div class='col w-1/2'>
    <div class='border border--darken10'>w-1/2</div>
  </div>
</div>
```

## Display

Control the display style of elements.

```selectors
.inline
.block
.inline-block
.none
```

Set an element's `display` property value. Class set includes `*-mm`, `*-ml`, and `*-mxl` variations to target screen sizes.

```example
<div class="inline bg-darken10">inline</div>
<div class="block bg-darken10">block</div>
<div class="inline-block bg-darken10">inline-block</div>
<div class="none bg-darken10">none</div>
```

## Positioning

Classes for basic positioning. For flexbox positioning rules, see the documentation for [flexbox](#flexbox) utilities.

```selectors
.fixed
.absolute
.relative
.static
.sticky
```

Set an element's `position` property value. Class set includes `*-mm`, `*-ml`, and `*-mxl` variations to target screen sizes.

```example
<div class="relative">
  <div class="absolute bg-darken10 right">absolute</div>
  <div class="relative bg-darken10">relative</div>
  <div class="static bg-darken10">static</div>
  <div class="sticky bg-darken10">static</div>
  <!--
   Fixed positioning would interfere with page
   <div class="fixed bg-darken10">fixed</div>
  -->
</div>
```

```selectors
.top
.right
.left
.bottom
```

Pin a positioned element against a side of its container. Positioning classes can be combined to stretch elements across the top, bottom, left, or right sides of their container. Class set includes `*-mm`, `*-ml`, and `*-mxl` variations to target screen sizes.

```example
<div class="relative h60">
  <div class="absolute bg-darken10 right">right</div>
  <div class="absolute bg-darken10 bottom">bottom</div>
  <div class="absolute bg-darken10 left">left</div>
  <div class="absolute bg-darken10 top left right align-center">top left right</div>
</div>
```

```selectors
.z-neg1
.z0
.z1
.z2
.z3
.z4
.z5
```

Override default stacking order by setting an element's `z-index` property value. Whenever possible, rely on built-in stacking order and avoid using these classes. Class set includes `*-mm`, `*-ml`, and `*-mxl` variations to target screen sizes.

```example
<div class="relative h60">
  <div class="absolute z5 bg-pink py6 px6">z5</div>
  <div class="absolute z1 bg-blue px6 py6 mt12 ml24">z1</div>
  <div class="absolute z1-neg1 bg-blue px6 py6 mt24 ml60">z-neg1</div>
</div>
```

## Margins

All margin classes fit the following pattern: `m<side><size>`.
And all margin class sets include `*-mm`, `*-ml`, and `*-mxl` variations to target screen sizes.

```selectors
.mx-auto
```

Set `auto` margins on left and right. This pattern is useful for horizontally centering block elements or aligning block elements to the start or end of their container.

```example
<div class='mx-auto w60 bg-darken10'>mx-auto</div>
<div class='ml-auto w60 bg-darken10'>ml-auto</div>
<div class='mr-auto w60 bg-darken10'>mr-auto</div>
```

```selectors
.my{margin}
```

Apply margin on the top and bottom.

```example
<div class='my24 bg-darken10'>my24</div>
```

```selectors
.mx{margin}
```

Apply margin on the left and right.

```example
<div class='mx24 bg-darken10'>mx24</div>
```

```selectors
.mt{margin}
```

Apply margin on the top.

```example
<div class='mt24 bg-darken10'>mt24</div>
```

```selectors
.mr{margin}
```

Apply margin on the right.

```example
<div class='mr24 bg-darken10'>mr24</div>
```

```selectors
.mr-1/12
.mr-1/6
.mr-1/4
.mr-1/3
.mr-5/12
.mr-1/2
.mr-7/12
.mr-2/3
.mr-3/4
.mr-5/6
.mr-11/12
```

Apply percentage-based margin on the right. When using with `col`, add a width class, `col--auto`, or both to define the size of the element.

```example
<div class='grid'>
  <div class='col w-1/2 mr-1/2 bg-darken10'>mr-1/2</div>
</div>
```

```selectors
.mb{margin}
```

Apply margin on the bottom.

The negative margin classes, <code>mb-neg</code>, can be useful for certain design patterns like underline tabs.

```example
<div class='mb24 bg-darken10'>mb24</div>
```

```selectors
.ml{margin}
```

Apply margin on the left.

```example
<div class='ml24 bg-darken10'>ml24</div>
```

```selectors
.ml-1/12
.ml-1/6
.ml-1/4
.ml-1/3
.ml-5/12
.ml-1/2
.ml-7/12
.ml-2/3
.ml-3/4
.ml-5/6
.ml-11/12
```

Apply percentage-based margin on the left. When using with `col`, add a width class, `col--auto`, or both to define the size of the element.

```example
<div class='grid'>
  <div class='col w-1/2 ml-1/2 bg-darken10'>ml-1/2</div>
</div>
```

## Padding

All padding classes fit the following pattern: `m<side><size>`.
And all padding class sets include `*-mm`, `*-ml`, and `*-mxl` variations to target screen sizes.

```selectors
.py{margin}
```

Apply padding on the top and bottom.

```example
<div class='py24 bg-darken10'>py24</div>
```

```selectors
.px{margin}
```

Apply padding on the left and right.

```example
<div class='px24 bg-darken10'>px24</div>
```

```selectors
.pt{margin}
```

Apply padding on the top.

```example
<div class='pt24 bg-darken10'>pt24</div>
```

```selectors
.pr{margin}
```

Apply padding on the right.

```example
<div class='pr24 bg-darken10 align-r'>pr24</div>
```

```selectors
.pb{margin}
```

Apply padding on the bottom.

```example
<div class='pb24 bg-darken10'>pb24</div>
```

```selectors
.pl{margin}
```

Apply padding on the left.

```example
<div class='pl24 bg-darken10'>pl24</div>
```

## Gap

Gap utilities fit `gap{size}`, `gapx{size}`, and `gapy{size}` on the padding scale.
Class sets include `*-mm`, `*-ml`, and `*-mxl` variations to target screen sizes.
Use with `flex`, `inline-flex`, or `gridbox`. Do not combine with `grid--gut*` or percentage `w-*` columns on `grid`.

```selectors
.gap{gap}
```

Apply `gap` on both axes.

```example
<div class='flex flex--wrap gap12'>
  <div class='bg-darken10 px6'>a</div>
  <div class='bg-darken10 px6'>b</div>
  <div class='bg-darken10 px6'>c</div>
</div>
```

```selectors
.gapx{gap}
```

Apply `column-gap` (horizontal gap).

```example
<div class='flex gapx12'>
  <div class='bg-darken10 px6'>a</div>
  <div class='bg-darken10 px6'>b</div>
</div>
```

```selectors
.gapy{gap}
```

Apply `row-gap` (vertical gap).

```example
<div class='flex flex--column gapy12'>
  <div class='bg-darken10 px6'>a</div>
  <div class='bg-darken10 px6'>b</div>
</div>
```

## Sizing

All sizing classes fit the following pattern: `<w|h><min|max><size>` or `<w|h><min|max>-full` for `100%`.
And all sizing class sets include `*-mm`, `*-ml`, and `*-mxl` variations to target screen sizes.

```selectors
.w{width}
```

Set an element's width.

In addition to numeric values, there are `w-full` and `w-auto` classes.

```example
<div class='w60 bg-darken10'>w60</div>
```

```selectors
.w-1/12
.w-1/6
.w-1/4
.w-1/3
.w-5/12
.w-1/2
.w-7/12
.w-2/3
.w-3/4
.w-5/6
.w-11/12
```

Set a percentage-based width.

```example
<div class='grid'>
  <div class='col w-1/2 bg-darken10'>w-1/2</div>
  <div class='col w-1/4 bg-darken25'>w-1/4</div>
  <div class='col w-1/4 bg-darken50'>w-1/4</div>
</div>
```

```selectors
.wmax{maxWidth}
```

Set an element's maximum width.

In addition to numeric values, there are `wmax-full` and `wmax-none` classes.

```example
<div class='wmax6 bg-darken10'>wmax6</div>
```

```selectors
.wmin{width}
```

Set an element's minimum width.

In addition to numeric values, there is the `wmin-full` class.

```example
<div class='inline-block wmin60 bg-darken10'>wmin60</div>
```

```selectors
.h{width}
```

Set an element's height.

In addition to numeric values, there are `h-full` and `h-auto` classes.

```example
<div class='h24 bg-darken10'>h24</div>
```

```selectors
.hmax{maxWidth}
```

Set an element's maximum height.

In addition to numeric values, there are `hmax-full` and `hmax-none` classes.

```example
<div class='hmax12 bg-darken10'>hmax12</div>
```

```selectors
.hmin{width}
```

Set an element's minimum height.

In addition to numeric values, there is the `hmin-full` class.

```example
<div class='hmin60 bg-darken10'>hmin60</div>
```

```selectors
.h-viewport-full
.h-viewport-1/12
.h-viewport-1/6
.h-viewport-1/4
.h-viewport-1/3
.h-viewport-5/12
.h-viewport-1/2
.h-viewport-7/12
.h-viewport-2/3
.h-viewport-3/4
.h-viewport-5/6
.h-viewport-11/12
```

Set a viewport-based height.

```example
<div class='h-viewport-1/3 bg-darken10'>h-viewport-1/3</div>
```

```selectors
.hmax-viewport-full
.hmax-viewport-1/12
.hmax-viewport-1/6
.hmax-viewport-1/4
.hmax-viewport-1/3
.hmax-viewport-5/12
.hmax-viewport-1/2
.hmax-viewport-7/12
.hmax-viewport-2/3
.hmax-viewport-3/4
.hmax-viewport-5/6
.hmax-viewport-11/12
```

Set a viewport-based max width.

```example
<div class='hmax-viewport-1/3 h-viewport-1/2 bg-darken10'>hmax-viewport-1/3</div>
```

## Flexbox

Flexbox utilities. All class sets include `*-mm`, `*-ml`, and `*-mxl` variations to target screen sizes.

Usage must fit the following pattern:
- `flex` or `inline-flex` must be on a parent container in order to use `flex--*` modifiers, while `flex-child-*` rules control children of a `flex` or `inline-flex` element.
- By default, the `main` axis is horizontal and the `cross` axis is vertical. The axes can be inverted with the use of `flex--column`.
- To learn about how the flexbox system works, check out ["A Complete Guide to Flexbox"](https://css-tricks.com/snippets/css/a-guide-to-flexbox).

```selectors
.flex
.inline-flex
```

Establish an element as a flex parent.
These classes allow the use of `flex--*` modifiers, and `flex-child-*` classes on children.

```example
<div class='bg-darken10 flex'>flex</div>
<div class='bg-darken10 inline-flex'>inline-flex</div>
```

```selectors
.flex--column
```

Set the direction of the main axis to top-to-bottom (default is left-to-right).

```example
<div class='bg-darken10 flex flex--column'>
 <span>1</span>
 <span>2</span>
 <span>3</span>
</div>
```

```selectors
.flex--column-reverse
```

Set the direction of the main axis to bottom-to-top (default is left-to-right).

```example
<div class='bg-darken10 flex flex--column-reverse'>
 <span>1</span>
 <span>2</span>
 <span>3</span>
</div>
```

```selectors
.flex--row
```

Set the direction of the main axis to left-to-right (the default value of `flex`).

```example
<div class='bg-darken10 flex flex--row'>
 <span>1</span>
 <span>2</span>
 <span>3</span>
</div>
```

```selectors
.flex--row-reverse
```

Set the direction of the main axis to right-to-left (default is left-to-right).

```example
<div class='bg-darken10 flex flex--row-reverse'>
 <span>1</span>
 <span>2</span>
 <span>3</span>
</div>
```

```selectors
.flex--center-main
```

Center an element's children on the main axis.

```example
<div class='flex flex--center-main bg-darken10'>
 <div class='bg-darken10'>child</div>
</div>
```

```selectors
.flex--center-cross
```

Center an element's children on the cross axis.

```example
<div class='flex flex--center-cross bg-darken10 h120'>
 <div class='bg-darken10'>child</div>
</div>
```

```selectors
.flex--start-cross
```

Align an element's children to the start of the cross axis.

```example
<div class='flex flex--start-cross h120 bg-darken10'>
 <div class='bg-darken10 h42'>child</div>
 <div class='bg-darken10'>child</div>
</div>
```

```selectors
.flex--start-main
```

Align an element's children to the start of the main axis.

```example
<div class='flex flex--start-main bg-darken10'>
 <div class='bg-darken10'>child</div>
</div>
```

```selectors
.flex--end-cross
```

Align an element's children to the end of the cross axis.

```example
<div class='flex flex--end-cross h120 bg-darken10'>
 <div class='bg-darken10 h42'>child</div>
 <div class='bg-darken10'>child</div>
</div>
```

```selectors
.flex--end-main
```

Align an element's children to the end of the main axis.

```example
<div class='flex flex--end-main bg-darken10'>
 <div class='bg-darken10'>child</div>
</div>
```

```selectors
.flex--wrap
```

Allow children to wrap. By default, they are all forced onto one line.

```example
<div class='flex flex--wrap bg-darken10 overflow-hidden'>
 <div class='bg-darken10 w600'>child</div>
 <div class='bg-darken10 w600'>child</div>
</div>
```

```selectors
.flex--stretch-cross
```

Stretch children to fill the parent container along the cross axis.

```example
<div class='flex flex--stretch-cross bg-darken10 h120'>
 <div class='bg-darken10'>child</div>
</div>
```

```selectors
.flex--space-between-main
```

Evenly distribute children across the line, so first child is at the start
and last child is at the end.

```example
<div class='flex flex--space-between-main bg-darken10 h120'>
 <div class='bg-darken10'>child</div>
 <div class='bg-darken10'>child</div>
</div>
```

```selectors
.flex--space-around-main
```

Distribute children with equal space around each item on the main axis.

```example
<div class='flex flex--space-around-main bg-darken10'>
 <div class='bg-darken10'>child</div>
 <div class='bg-darken10'>child</div>
</div>
```

```selectors
.flex--space-evenly-main
```

Distribute children with equal space between and around items on the main axis.

```example
<div class='flex flex--space-evenly-main bg-darken10'>
 <div class='bg-darken10'>child</div>
 <div class='bg-darken10'>child</div>
</div>
```

```selectors
.flex-child-grow
```

Make a child grow to fill whatever space is available in the main axis of the parent container.
This is useful when you have one or more elements of
fixed width, and another element that should take up the remaining space in the row.

Typically, you will also want to apply the `flex-child-no-shrink` class to the element in the row with a fixed width.

```example
<div class='flex bg-darken10'>
 <div class='flex-child-no-shrink border w240'>child</div>
 <div class='flex-child-grow border'>child</div>
</div>
```

```selectors
.flex-child-no-shrink
```

Prevent a child from shrinking below its width value.

By default, flex children (even with specified widths) will shrink as needed to accommodate sibling elements.
This class prevents that default shrinkage, forcing siblings to accommodate the parent's width.

```example
<div class='flex bg-darken10 w240'>
 <div class='flex-child-no-shrink border w120'>child</div>
 <div class='border w120'>child</div>
 <div class='border w120'>child</div>
</div>
```

## Gridbox

CSS Grid utilities. All class sets include `*-mm`, `*-ml`, and `*-mxl` variations to target screen sizes.

`gridbox` does not replace [`grid`](#grid). Keep using `grid` / `col` / `grid--gut*` for the 12-column flex system.

Usage:
- Put `gridbox` or `inline-gridbox` on the parent.
- Set columns with `gridbox--cols{n}` (1–12). Use `gap{size}` for spacing.
- Span children with `gridbox-child-col{n}` and `gridbox-child-row{n}`.

```selectors
.gridbox
.inline-gridbox
```

Establish an element as a CSS Grid parent.

```example
<div class='gridbox gridbox--cols3 gap12'>
  <div class='border border--darken10 px6'>1</div>
  <div class='border border--darken10 px6'>2</div>
  <div class='border border--darken10 px6'>3</div>
</div>
```

```selectors
.gridbox--row
.gridbox--column
.gridbox--dense
.gridbox--column-dense
```

Set `grid-auto-flow`. `gridbox--row` is the CSS default; use it to override a column flow.

```example
<div class='gridbox gridbox--column gap6 h120'>
  <div class='border border--darken10 px6'>1</div>
  <div class='border border--darken10 px6'>2</div>
  <div class='border border--darken10 px6'>3</div>
</div>
```

```selectors
.gridbox--center
.gridbox--stretch
.gridbox--start
.gridbox--end
```

Align items inside their grid areas with `place-items`.

```example
<div class='gridbox gridbox--cols2 gridbox--center gap12 h120'>
  <div class='border border--darken10 px6'>center</div>
  <div class='border border--darken10 px6'>center</div>
</div>
```

```selectors
.gridbox--space-between
.gridbox--space-around
.gridbox--space-evenly
```

Distribute extra space between grid tracks.

```example
<div class='gridbox gridbox--cols3 gridbox--space-between'>
  <div class='border border--darken10 px6'>1</div>
  <div class='border border--darken10 px6'>2</div>
  <div class='border border--darken10 px6'>3</div>
</div>
```

```selectors
.gridbox--cols{gridTrack}
```

Set the number of equal columns on a `gridbox`.

```example
<div class='gridbox gridbox--cols3 gap12'>
  <div class='border border--darken10 px6'>1</div>
  <div class='border border--darken10 px6'>2</div>
  <div class='border border--darken10 px6'>3</div>
</div>
```

```selectors
.gridbox--rows{gridTrack}
```

Set the number of equal rows on a `gridbox`.

```example
<div class='gridbox gridbox--cols2 gridbox--rows2 gap12 h120'>
  <div class='border border--darken10'>1</div>
  <div class='border border--darken10'>2</div>
  <div class='border border--darken10'>3</div>
  <div class='border border--darken10'>4</div>
</div>
```

```selectors
.gridbox-child-col{gridTrack}
```

Span columns on a `gridbox` child.

```example
<div class='gridbox gridbox--cols4 gap12'>
  <div class='gridbox-child-col2 border border--darken10 px6'>span 2</div>
  <div class='border border--darken10 px6'>1</div>
  <div class='border border--darken10 px6'>1</div>
</div>
```

```selectors
.gridbox-child-row{gridTrack}
```

Span rows on a `gridbox` child.

```example
<div class='gridbox gridbox--cols2 gridbox--rows2 gap12 h120'>
  <div class='gridbox-child-row2 border border--darken10'>span 2 rows</div>
  <div class='border border--darken10'>1</div>
  <div class='border border--darken10'>1</div>
</div>
```

## Aspect ratio

Class set includes `*-mm`, `*-ml`, and `*-mxl` variations to target screen sizes.

```selectors
.aspect-auto
.aspect-1/1
.aspect-4/3
.aspect-3/2
.aspect-16/9
.aspect-21/9
.aspect-3/4
.aspect-9/16
```

Set `aspect-ratio`. `aspect-auto` resets it.

```example
<div class='aspect-16/9 w-full bg-darken10'>aspect-16/9</div>
```

## Object fit

```selectors
.object-contain
.object-cover
.object-fill
.object-none
.object-scale-down
```

Set `object-fit` on replaced elements such as `img` and `video`.
Class set includes `*-mm`, `*-ml`, and `*-mxl` variations to target screen sizes.

```example
<div class='w120 h60 bg-blue object-cover'>object-cover</div>
```

## Transforms

Transform utilities use the individual `rotate`, `scale`, and `translate` properties so they compose.
Class sets include `*-mm`, `*-ml`, and `*-mxl` variations to target screen sizes.

```selectors
.rotate{rotate}
```

Rotate an element. Combines with `scale*` and `translate-*`.

```example
<div class='rotate45 bg-blue w60 h60'></div>
```

```selectors
.scale{scale}
```

Scale an element. `scale100` is `1`. Combines with `rotate*` and `translate-*`.

```example
<div class='scale50 bg-blue w60 h60'></div>
```

```selectors
.translate-x{margin}
```

Translate on the x axis. Uses the margin scale, including negatives.

```example
<div class='translate-x12 bg-blue w60 h60'></div>
```

```selectors
.translate-y{margin}
```

Translate on the y axis. Uses the margin scale, including negatives.

```example
<div class='translate-y12 bg-blue w60 h60'></div>
```

## Layout utils

Extra layout utilities.

```selectors
.bleed
.bleed-r
.bleed-l
.unbleed
```

Bleed utilities. Bleed classes allow an element inside a centered container to escape the container and meet the edge of the screen.
When using the bleed classes, consider adding the `.overflow-hidden` class on a parent element to prevent horizontal overflow.

*Warning*: Bleeding elements will never bleed out to more than 50% of the viewport width.
So you should not make an element bleed to one side unless it's already on that half of
the screen.

*Warning*: In Firefox, children with negative margins have different layout effects than in other browsers.
The bleed classes should only be used if the parent's width is stable, either because it is set or because other children determine it.

Class set includes `*-mm`, `*-ml`, and `*-mxl` variations to target screen sizes.
These screen-size variants are best suited to *adding* the bleed, not *removing* it.
Be aware of the effects of the `unbleed` class: it resets `margin-left`, `margin-right`,
and `flex-child-grow`.

```example
<div class='bg-darken10 flex flex--center-main overflow-hidden'>
  <div class='w240 px12 py12 bg-darken10'>
    <div class='bg-darken10 bleed-r'>Right bleed</div>
  </div>
</div>
```

```selectors
.fl
.fr
.unfloat
.clearfix
```

Float utilities. Class set (except `clearfix`) includes `*-mm`, `*-ml`, and `*-mxl` variations to target screen sizes.

```example
<div class='clearfix'>
  <div class='fl bg-darken10'>left</div>
</div>
<div> with .clearfix </div>
<div class='fr bg-darken10'>right</div>
<div class='bg-darken10'> without .clearfix </div>
<div class='fl unfloat'>unfloat</div>
```
