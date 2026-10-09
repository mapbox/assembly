# Theming

Decorate elements with borders, shadows, opacity adjustments, and more.

## Borders

Add borders to an element.

```selectors
.border
.border-t
.border-r
.border-b
.border-l
```

Add a `1px` border that is the same color as the element's text. Target sides with `*-t`, `*-r`, `*-b`, and `*-l`. Class set includes `*-mm`, `*-ml`, and `*-mxl` variations to target screen sizes.

```example
<div class='border'>border</div>
<div class='mt12 border-b'>border-b</div>
```

```selectors
.border--0
.border-t--0
.border-r--0
.border-b--0
.border-l--0
```

Make a border zero pixels wide. Class set includes `*-mm`, `*-ml`, and `*-mxl` variations to target screen sizes.

```example
<div class='border border-r--0'>border-r--0</div>
```

```selectors
.border--2
.border-t--2
.border-r--2
.border-b--2
.border-l--2
```

Make a border two pixels wide.

```example
<div class='border border--2'>border--2</div>
```

```selectors
.border--dash
```

Make a border dashed instead of solid.

```example
<div class='border border--dash'>border--dash</div>
```

```selectors
.border--{color}
```

Apply a [color](/documentation/#colors) to a border.

```example
<div class='border border--red'>border--red</div>
```

```selectors
.border--{color}-on-hover
.border--{color}-on-active
```

Apply a border color on hover and active states.

```example
<div class='border border--red-on-hover'>border--red-on-hover</div>
<div class='border border--red-on-active'>border--red-on-active (not active)</div>
<div class='border border--red-on-active is-active'>border--red-on-active (active)</div>
```

## Border radius

Adjust the curve of an element's corners. All border classes include `*-mm`,
`*-ml`, and `*-mxl` variations to target screen sizes.

```selectors
.round
.round-t
.round-r
.round-b
.round-l
.round-tl
.round-tr
.round-br
.round-bl
```

Round the corners of elements. Target sides with `*-t`, `*-r`, `*-b`, `*-l`.
Target corners with `*-tl`, `*-tr`, `*-bl`, `*-br`.

```example
<div class='bg-blue inline-block round'>round</div>
<div class='bg-blue inline-block ml6 round-tr'>round-tr</div>
```

```selectors
.round-bold
.round-t-bold
.round-r-bold
.round-b-bold
.round-l-bold
.round-tl-bold
.round-tr-bold
.round-br-bold
.round-bl-bold
```

Like `round`, but with twice the border radius.

```example
<div class='bg-blue inline-block round-bold'>round-bold</div>
<div class='bg-blue inline-block ml6 round-tr-bold'>round-tr-bold</div>
```

```selectors
.round-full
.round-t-full
.round-r-full
.round-b-full
.round-l-full
.round-tl-full
.round-tr-full
.round-br-full
.round-bl-full
```

Like `round`, but with fully round corners.

```example
<div class='bg-blue inline-block round-full'>round-full</div>
<div class='bg-blue inline-block ml6 round-tr-full'>round-tr-full</div>
```

```selectors
.unround
.unround-t
.unround-r
.unround-b
.unround-l
.unround-tl
.unround-tr
.unround-br
.unround-bl
```

Unround the corners of elements. Target sides with `*-t`, `*-r`, `*-b`, `*-l`. Target corners with `*-tl`, `*-tr`, `*-bl`, `*-br`.

```example
<input type='text' class='input unround' placeholder='.unround' />
```

## Shadows

Apply outer shadows that add emphasis to elements or structure to layouts. Class naming follows the pattern `shadow-<lighten|darken><alpha>`.

```selectors
.shadow-darken10
.shadow-darken25
.shadow-darken50
.shadow-darken75
.shadow-lighten10
.shadow-lighten25
.shadow-lighten50
.shadow-lighten75
```

Apply a box shadow.

```example
<div class='shadow-darken25'>shadow-darken25</div>
```

```selectors
.shadow-darken10-bold
.shadow-darken25-bold
.shadow-darken50-bold
.shadow-darken75-bold
.shadow-lighten10-bold
.shadow-lighten25-bold
.shadow-lighten50-bold
.shadow-lighten75-bold
```

Apply a larger box shadow.

```example
<div class='shadow-darken25-bold'>shadow-darken25-bold</div>
```

```selectors
.shadow-{color}-on-hover
.shadow-{color}-on-active
.shadow-{color}-bold-on-hover
.shadow-{color}-bold-on-active
```

Apply a box shadow on hover and active states.

```example
<div class='shadow-darken25-on-hover'>shadow-darken25-on-hover</div>
<div class='shadow-darken25-on-active'>shadow-darken25-on-active (not active)</div>
<div class='shadow-darken25-on-active is-active'>shadow-darken25-on-active (active)</div>
```

## Cursors

Set the style of the cursor when hovering over an element.

```selectors
.cursor-default
.cursor-pointer
.cursor-crosshair
.cursor-move
.cursor-notallowed
.cursor-grab
.cursor-grabbing
.cursor-col-resize
.cursor-row-resize
```

Set the `cursor` property value of an element.

```example
<div class='cursor-pointer'>cursor-pointer</div>
<div class='cursor-crosshair'>cursor-crosshair</div>
<div class='cursor-move'>cursor-move</div>
<div class='cursor-notallowed'>cursor-notallowed</div>
<div class='cursor-grab'>cursor-grab</div>
<div class='cursor-grabbing'>cursor-grabbing</div>
<div class='cursor-col-resize'>cursor-col-resize</div>
<div class='cursor-row-resize'>cursor-row-resize</div>
```

## Opacity

Dim elements, or hide them from the document flow  without removing them.

```selectors
.opacity0
.opacity25
.opacity50
.opacity75
.opacity100
```

Apply an opacity.

```example
<div class='opacity25'>opacity25</div>
<div class='opacity50'>opacity50</div>
<div class='opacity100'>opacity100</div>
```

```selectors
.opacity0-on-hover
.opacity0-on-active
.opacity25-on-hover
.opacity25-on-active
.opacity50-on-hover
.opacity50-on-active
.opacity75-on-hover
.opacity75-on-active
.opacity100-on-hover
.opacity100-on-active
.opacity100-on-focus
```

Apply an opacity on hover and active states.

`.opacity100-on-focus` is also available to make an otherwise transparent element opaque on focus.

```example
<div class='opacity25-on-hover'>opacity25-on-hover</div>
<div class='opacity25-on-active'>opacity25-on-active (inactive)</div>
<div class='opacity25-on-active is-active'>opacity25-on-active (active)</div>
<button class='opacity0 opacity100-on-focus'>opacity100-on-focus</button>
```
