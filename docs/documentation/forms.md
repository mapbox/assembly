# Forms

Styles for HTML5 input and textarea elements. All form elements fit into Assembly's `6px` baseline grid.

## Inputs & textareas

The `input` class styles input types `text`, `password`, `email`,
`datetime`, `search`, `tel`, `url`, and `number`. The `textarea` class styles the `<textarea>` element.

Both form elements fill the width of their container, by default.
You should adjust the widths of inputs and textareas by adding [`w*` width classes](/documentation/#sizing)
or controlling the widths of their containers, e.g. with [`grid` classes](/documentation/#grid).

```selectors
.input
```

Style a text input. Set the color of the border with a `input--border-{color}` modifier (`*-dark` colors are not available).

```example
<input class='input' placeholder='default' />
<input class='input input--border-green w240' placeholder='green' />
```

```selectors
.input--s
```

Make an input small.

```example
<input class='input input--s' placeholder='small' />
```

```selectors
.textarea
```

Style a textarea. Set the color of the border with a `textarea--border-{color}` modifier (`*-deep` and `*-dark` colors are not available).

```example
<textarea placeholder='default' class='textarea'></textarea>
<textarea placeholder='pink' class='textarea textarea--border-pink w240'></textarea>
```

```selectors
.textarea--s
```

Make a textarea extra small.

```example
<textarea class='textarea textarea--s'>small textarea</textarea>
```

```selectors
.input:disabled
.textarea:disabled
.select--stroke:disabled
```

When `input` and `textarea` elements have a `disabled` attribute, they will be styled accordingly.

```example
<input disabled class='input' placeholder='disabled' />
<textarea disabled class='textarea' placeholder='disabled' value='Disabled'>Disabled text</textarea>
```

```selectors
.input[readonly]
.textarea[readonly]
```

When `input` and `textarea` elements have a `readonly` attribute, they will be styled accordingly.

```example
<input readonly class='input' placeholder='basic' value='Readonly' />
<textarea readonly class='textarea' placeholder='basic' value='Disabled' >Readonly text</textarea>
```

## Selects

The select component styles the `<select>` element. The markup must fit the following pattern:
- A wrapping `<div>` with the `select-container` class.
- A `<select>` element with the `select` class.
- A `<div>` with the `select-arrow` class.

```selectors
.select-container
.select
.select-arrow
```

Style a select component.
Set the text and arrow color by adding a `select--{color}` modifier to the `select` element (`*-dark` colors are not available).

```example
<div class='select-container'>
  <select class='select'>
    <option>default</option>
    <option>two</option>
  </select>
  <div class='select-arrow'></div>
</div>
<div class='select-container'>
  <select class='select select--green'>
    <option>default</option>
    <option>two</option>
  </select>
  <div class='select-arrow'></div>
</div>
```

```selectors
.select--s
```

Make a select component small.

```example
<div class='select-container'>
  <select class='select select--s'>
    <option>one</option>
    <option>two</option>
  </select>
  <div class='select-arrow'></div>
</div>
```

```selectors
.select--stroke
```

Modify a select component so that it has a border.
Set the border and arrow color by adding a `select--{color}` modifier to the `select` element along with the `select--stroke` modifier (`*-dark` colors are not available).
Note that the `select--stroke` modifier changes how the color modifier is interpreted.

```example
<div class='select-container'>
  <select class='select select--stroke'>
    <option>one</option>
    <option>two</option>
  </select>
  <div class='select-arrow'></div>
</div>
<div class='select-container mt6'>
  <select class='select select--stroke select--green'>
    <option>green</option>
    <option>two</option>
  </select>
  <div class='select-arrow'></div>
</div>
```

```selectors
.select:disabled
```

When the `select` element has the `disabled` attribute, the component will be styled accordingly.

```example
<div class='select-container'>
  <select disabled class='select'>
    <option>one</option>
    <option>two</option>
  </select>
  <div class='select-arrow'></div>
</div>
<div class='select-container'>
  <select disabled class='select select--stroke'>
    <option>one</option>
    <option>two</option>
  </select>
  <div class='select-arrow'></div>
</div>
```

## Ranges

The `range` class styles the `<input type='range'>` element. The markup must fit the following pattern:
- A wrapping `<div>` with the `range` class.
- An `<input type='range'>` element.

```selectors
.range
```

Style a range element.

The best way to vertically align range elements with other items on the same row is to wrap the row in a `flex flex--center-cross` container.
For more details, read about the [flexbox classes](/documentation/#flexbox).

```example
<div class='range'>
  <input type='range' />
</div>
```

```selectors
.range--s
```

Make a range element small.

```example
<div class='range range--s'>
  <input type='range' />
</div>
```

```selectors
.range:disabled
```

When a range element has the `disabled` attribute, it will be styled accordingly.

```example
<div class='range'>
  <input disabled type='range' />
</div>
```

## Checkboxes

The checkbox component styles the `<input type='checkbox' />` element. The markup must fit the following pattern:
- A wrapping `<label>` with the class `checkbox-container`.
- An `<input type='checkbox' />`. You may want to add a `mr*` margin-right
  class to separate the checkbox from its label.
- A `<div>` with the class `checkbox`
  containing an `<svg>` with the chosen icon (usually `#icon-check`).

```selectors
.checkbox
```

Style a checkbox with a label. Change the color of the checkbox with a `checkbox--{color}` modifier (`*-dark` colors are not available).
Adjust the line height of the checkbox to match a label with small text with the `checkbox--s-label` modifier.

```example
<label class='checkbox-container'>
    <input type='checkbox' />
    <div class='checkbox mr6'>
      <svg class='icon'><use xlink:href='#icon-check' /></svg>
    </div>
    More cats
  </label>
  <label class='txt-s checkbox-container ml24'>
    <input type='checkbox' />
    <div class='checkbox mr6 checkbox--s-label checkbox--red'>
      <svg class='icon'><use xlink:href='#icon-check' /></svg>
    </div>
    More mice
  </label>
```

```selectors
input:disabled + .checkbox
```

When a checkbox has the `disabled` attribute, it will be styled accordingly.

```example
<label class="checkbox-container mr6">
  <input disabled type='checkbox'>
  <div class='checkbox'>
    <svg class='icon'><use xlink:href='#icon-check' /></svg>
  </div>
</label>
<label class="checkbox-container">
  <input checked disabled type='checkbox'>
  <div class='checkbox'>
    <svg class='icon'><use xlink:href='#icon-check' /></svg>
  </div>
</label>
```

## Radio buttons

The radio component styles the `<input type='radio'>` element. The markup must fit the following pattern:
- A wrapping `<label>` with the class `radio-container`.
- An `<input type='radio'>`. You may want to add a `mr*` margin-right
  class to separate the radio from its label.
- A `<div>` with the class `radio`.

```selectors
.radio
```

Style a radio button. Change the color of the radio button with a `radio--{color}` modifier (`*-dark` colors are not available).
Adjust the line height of the radio button to match a label with small text with the `radio--s-label` modifier.

```example
<label class='radio-container'>
  <input name='radio-basic' type='radio'>
  <div class='radio mr6'></div>
  Orange
</label>
<label class='txt-s ml24 radio-container'>
  <input name='radio-basic' type='radio'>
  <div class='radio radio--s-label radio--yellow mr6'></div>
  Apple
</label>
```

```selectors
input:disabled + .radio
```

When a radio button has the `disabled` attribute, it will be styled accordingly.

```example
<label class='radio-container'>
  <input disabled type='radio'>
  <div class='radio'></div>
</label>
<label class='radio-container'>
  <input disabled checked type='radio'>
  <div class='radio'></div>
</label>
```

## Switches

The switch component styles the `<input type='checkbox' />` element. The markup must fit the following pattern:
- A wrapping `<label>` with the class `switch-container`.
- An `<input type='checkbox' />` as a direct child of the container.
- A `<div>` with the class `switch`. It can sit anywhere inside the container,
  so a label can come before or after it. You may want to add a `mr*` or `ml*`
  margin class to separate the switch from its label.

```selectors
.switch
```

Style a switch. It is 24px tall to match small inputs like `input--s`.
Change the background when active with a `switch--{color}` modifier (`*-dark` colors are not available).
Change the color of the dot when active with a `switch--dot-{color}` modifier.

```example
<label class='switch-container'>
  <input type='checkbox' />
  <div class='switch'></div>
</label>
<label class='switch-container'>
  <input type='checkbox' />
  <div class='switch switch--pink switch--dot-yellow mr6'></div>
  Enable
</label>
```

```selectors
.switch--l
```

Make a switch 36px tall to match the default `input` height.

```example
<label class='switch-container'>
  <input type='checkbox' />
  <div class='switch switch--l mr6'></div>
  Really enable
</label>
```

```selectors
.switch--s
```

Make a switch 18px tall to sit alongside small text.

```example
<label class='switch-container txt-s'>
  <input type='checkbox' />
  <div class='switch switch--s mr6'></div>
  Barely enable
</label>
```

```selectors
input:disabled + .switch
```

When a switch has the `disabled` attribute, it will be styled accordingly.

```example
<label class="switch-container mr6">
  <input disabled type='checkbox'>
  <div class="switch"></div>
</label>
<label class="switch-container">
  <input checked disabled type='checkbox'>
  <div class="switch"></div>
</label>
```

## Toggle group

The toggle group component styles a set of `<input type=radio'>` elements. The markup must fit the following pattern:
- A wrapping `<div>` around all your radio options with the class `toggle-group`.
- For each radio option, a wrapping `<label>` with the class `toggle-container`.
- For each radio option, an `<input type='radio'>`.
- For each radio option, a `<div>` with the class `toggle`.

```selectors
.toggle-group
.toggle-container
.toggle
```

Style a toggle group.
Change the inactive toggle text color and the active toggle background color with a `toggle--{color}` modifier (`*-dark` colors are not available).
Change the active label color with a `toggle--active-{color}` modifier (`*-dark` colors are not available).
Change the border radiuses of toggle groups inside small text with `toggle-group--s` on the `toggle-container` element.

```example
<div class='toggle-group mr18'>
  <label class='toggle-container'>
    <input checked name='toggle-1' type='radio' />
    <div class='toggle'>cat</div>
  </label>
  <label class='toggle-container'>
    <input name='toggle-1' type='radio' />
    <div class='toggle'>dog</div>
  </label>
</div>
```

```selectors
.toggle--s
```

Make a toggle small.

```example
<div class='toggle-group'>
  <label class='toggle-container'>
    <input checked name='toggle-small' type='radio' />
    <div class='toggle toggle--s'>mouse</div>
  </label>
  <label class='toggle-container'>
    <input name='toggle-small' type='radio' />
    <div class='toggle toggle--s'>cricket</div>
  </label>
</div>
```

```selectors
input:disabled + .toggle
```

When a toggle group input has the `disabled` attribute, it will be styled accordingly.

```example
<div class='toggle-group'>
  <label class='toggle-container'>
    <input disabled name='pet' type='radio' />
    <div class='toggle'>cat</div>
  </label>
  <label class='toggle-container'>
    <input disabled checked name='pet' type='radio' />
    <div class='toggle'>dog</div>
  </label>
</div>
```
