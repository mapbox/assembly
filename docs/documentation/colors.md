# Colors

Background and text colors. Colors include dark, light, and faint variations.
Be sure to maintain a readable color contrast between background and text.
Only use `-faint` text colors on dark backgrounds.

## Text colors

```selectors
.color-{color}
```

Apply a text color with `color-{name}`.

```color-grid color
```

```selectors
.color-{color}-on-hover
.color-{color}-on-active
```

Apply a text color on hover and active states.

```example
<div class='color-red-on-hover'>color-red-on-hover</div>
<div class='color-red-on-active'>color-red-on-active (not active)</div>
<div class='color-red-on-active is-active'>color-red-on-active (active)</div>
```

## Background colors

```selectors
.bg-{color}
```

Apply a background color with `bg-{name}`.

```color-grid bg
```

```selectors
.bg-{color}-on-hover
.bg-{color}-on-active
```

Apply a background color on hover and active states.

```example
<div class='bg-darken25-on-hover'>bg-darken25-on-hover</div>
<div class='bg-darken25-on-active'>bg-darken25-on-active (not active)</div>
<div class='bg-darken25-on-active is-active'>bg-darken25-on-active (active)</div>
```
