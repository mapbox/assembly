# Buttons

Although the `btn` class will apply button styling to any element, you should typically apply it to the `<button>` element.
Not a `<div>` or `<span>` with a click handler, and not an `<a>` without an `href` attribute.
`<button>` is semantically appropriate for anything with a click handler that changes the page dynamically.
`<button>`s receive focus, handle keyboard events, can be disabled, and are fully accessible.

For actual links, you should usually use an `<a>` with the [`link`](/documentation/links) class.

## Apply a button style

Apply a button style.
To change the background color of a button, use a `btn--{color}` modifier  (`*-deep` and `*-dark` colors are not available).
Buttons have white text unless combined with a [`color-*`](/documentation/colors#text-colors) class.
Buttons have fully rounded corners unless combined with a [`round-*`](/documentation/theming#border-radius) class.

```example
<button class='btn'>Default</button>
<button class='btn btn--red'>Color</button>
<button class='btn btn--green color-yellow'>More colors</button>
<button class='btn round'>Less rounded</button>
<div class='px6 py6 bg-blue inline-block'>
  <button class='btn btn--white color-blue'>Reverse</button>
</div>
```

## Modify a button so its text and borders are colored and its background transparent

Modify a button so its text and borders are colored and its background transparent.
The border color and text color will always match.
To change the text and border color, use a `btn--{color}` modifier (`*-deep` colors are not available).

```example
<button class='btn btn--stroke'>Default</button>
<button class='btn btn--stroke btn--red'>Color</button>
<button class='btn btn--stroke round'>Less rounded</button>
<div class='px6 py6 bg-blue inline-block'>
  <button class='btn btn--stroke btn--white'>Reverse</button>
</div>
```

## Make a button small

Make a button small.

```example
<button class='btn btn--s'>Small</button>
```

## Apply a darker active state to buttons by adding the `is-active` class

<p class="txt-mono">`.btn.is-active` `.btn--stroke.is-active`</p>

Apply a darker active state to buttons by adding the `is-active` class.

```example
<button class='btn is-active'>Active</button>
<button class='btn btn--red is-active'>Red and active</button>
<button class='btn btn--stroke is-active'>Active</button>
<button class='btn btn--stroke btn--red is-active'>Red and active</button>
```

## When a button has the `disabled` attribute, it will be styled accordingly

<p class="txt-mono">`.btn:disabled`</p>

When a button has the `disabled` attribute, it will be styled accordingly.

```example
<button disabled class='btn'>Disabled button</button>
```

## Create pill button groups

Create pill button groups.
Pill groups must be wrapped in a `inline-flex` container.
Every button in a pill group must have
- a `btn` class
- any `btn--*` modifiers you want (e.g. `btn--stroke`)
- a `btn--pill` *or* `btn--pill-stroke` modifier. Use the `btn--pill-stroke` modifier if the buttons in the pill group are mostly stroke buttons (though active buttons can be non-stroke, if you like that)
- a `btn--pill-*` modifier specifying its position (e.g. `btn--pill-hc`)

For *horizontal* pills, use
- `inline-flex` on the container
- `btn btn--pill(-stroke) btn--pill-hc` (center)
- `btn btn--pill(-stroke) btn--pill-hl` (left)
- `btn btn--pill(-stroke) btn--pill-hr` (right)

For *vertical* pills, use
- `inline-flex flex--column` on the container
- `btn btn--pill(-stroke) btn--pill-vc` (center)
- `btn btn--pill(-stroke) btn--pill-vt` (top)
- `btn btn--pill(-stroke) btn--pill-vb` (bottom)

Pill buttons can be modified and themed in the same ways as regular buttons.

```example
<div class="inline-flex">
  <button class="btn btn--pill btn--pill-hl">Left</button>
  <button class="btn btn--pill btn--pill-hc">Center</button>
  <button class="btn btn--pill btn--pill-hr">Right</button>
</div>
<div class="inline-flex flex--column">
  <button class="btn btn--stroke btn--pill-stroke btn--pill-vt">Top</button>
  <button class="btn btn--pill-stroke btn--pill-vc is-active">Center</button>
  <button class="btn btn--stroke btn--pill-stroke btn--pill-vb">Bottom</button>
</div>
```
