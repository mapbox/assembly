# Theming

Decorate elements with borders, shadows, opacity adjustments, and more.

## Borders

Add borders to an element.

### Add a `1px` border that is the same color as the element's text. Target sides with `*-t`, `*-r`, `*-b`, and `*-l`

Add a `1px` border that is the same color as the element's text. Target sides with `*-t`, `*-r`, `*-b`, and `*-l`. Class set includes `*-mm`, `*-ml`, and `*-mxl` variations to target screen sizes.

```example
<div class='border'>border</div>
<div class='mt12 border-b'>border-b</div>
```

### Make a border zero pixels wide. Class set includes `*-mm`, `*-ml`, and `*-mxl` variations to target screen sizes

Make a border zero pixels wide. Class set includes `*-mm`, `*-ml`, and `*-mxl` variations to target screen sizes.

```example
<div class='border border-r--0'>border-r--0</div>
```

### Make a border two pixels wide

Make a border two pixels wide.

```example
<div class='border border--2'>border--2</div>
```

### Make a border dashed instead of solid

Make a border dashed instead of solid.

```example
<div class='border border--dash'>border--dash</div>
```

### Apply a [color](/documentation/colors) to a border

Apply a [color](/documentation/colors) to a border.

```example
<div class='border border--red'>border--red</div>
```

### Apply a border color on hover and active states

Apply a border color on hover and active states.

```example
<div class='border border--red-on-hover'>border--red-on-hover</div>
<div class='border border--red-on-active'>border--red-on-active (not active)</div>
<div class='border border--red-on-active is-active'>border--red-on-active (active)</div>
```

## Border radius

Adjust the curve of an element's corners. All border classes include `*-mm`,
`*-ml`, and `*-mxl` variations to target screen sizes.

### Round the corners of elements. Target sides with `*-t`, `*-r`, `*-b`, `*-l`

Round the corners of elements. Target sides with `*-t`, `*-r`, `*-b`, `*-l`.
Target corners with `*-tl`, `*-tr`, `*-bl`, `*-br`.

```example
<div class='bg-blue inline-block round'>round</div>
<div class='bg-blue inline-block ml6 round-tr'>round-tr</div>
```

### Like `round`, but with twice the border radius

Like `round`, but with twice the border radius.

```example
<div class='bg-blue inline-block round-bold'>round-bold</div>
<div class='bg-blue inline-block ml6 round-tr-bold'>round-tr-bold</div>
```

### Like `round`, but with fully round corners

Like `round`, but with fully round corners.

```example
<div class='bg-blue inline-block round-full'>round-full</div>
<div class='bg-blue inline-block ml6 round-tr-full'>round-tr-full</div>
```

### Unround the corners of elements. Target sides with `*-t`, `*-r`, `*-b`, `*-l`. Target corners with `*-tl`, `*-tr`, `*-bl`, `*-br`

Unround the corners of elements. Target sides with `*-t`, `*-r`, `*-b`, `*-l`. Target corners with `*-tl`, `*-tr`, `*-bl`, `*-br`.

```example
<input type='text' class='input unround' placeholder='.unround' />
```

## Shadows

Apply outer shadows that add emphasis to elements or structure to layouts. Class naming follows the pattern `shadow-<lighten|darken><alpha>`.

### Apply a box shadow

Apply a box shadow.

```example
<div class='shadow-darken25'>shadow-darken25</div>
```

### Apply a larger box shadow

Apply a larger box shadow.

```example
<div class='shadow-darken25-bold'>shadow-darken25-bold</div>
```

### Apply a box shadow on hover and active states

Apply a box shadow on hover and active states.

```example
<div class='shadow-darken25-on-hover'>shadow-darken25-on-hover</div>
<div class='shadow-darken25-on-active'>shadow-darken25-on-active (not active)</div>
<div class='shadow-darken25-on-active is-active'>shadow-darken25-on-active (active)</div>
```

## Cursors

Set the style of the cursor when hovering over an element.

### Set the `cursor` property value of an element

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

### Apply an opacity

Apply an opacity.

```example
<div class='opacity25'>opacity25</div>
<div class='opacity50'>opacity50</div>
<div class='opacity100'>opacity100</div>
```

### Apply an opacity on hover and active states

Apply an opacity on hover and active states.

`.opacity100-on-focus` is also available to make an otherwise transparent element opaque on focus.

```example
<div class='opacity25-on-hover'>opacity25-on-hover</div>
<div class='opacity25-on-active'>opacity25-on-active (inactive)</div>
<div class='opacity25-on-active is-active'>opacity25-on-active (active)</div>
<button class='opacity0 opacity100-on-focus'>opacity100-on-focus</button>
```
