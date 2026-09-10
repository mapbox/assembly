# Miscellaneous

Extra rules that come in handy.

## Style scrollbars. Only works in Webkit-based browsers (Safari and Chrome)

<p class="txt-mono">`.scroll-styled`</p>

Style scrollbars. Only works in Webkit-based browsers (Safari and Chrome).
On dark backgrounds, add the `scroll-styled--dark` modifier.

**Use in combination with `overflow-auto`.**

```example
<div class="scroll-styled overflow-auto h120"><div class='h240'></div></div>
<div class="scroll-styled scroll-styled--dark bg-gray-dark overflow-auto h120"><div class='h240'></div></div>
```

## Style a loading spinner

Style a loading spinner.
On dark backgrounds, add the `loading--dark` modifier.
For a smaller spinner, add the `loading--s` modifier.
Use `color-*` classes to apply a custom color to the spinner handle.

```example
<div class="loading"></div>
<div class="loading loading--s"></div>
<div class="bg-gray-dark">
  <div class="loading loading--dark"></div>
</div>
<div class="bg-gray">
  <div class="loading color-lighten50"></div>
</div>
```

## Disable touch and click events on an element and its children

Disable touch and click events on an element and
its children. Be aware that this rule does not disable keyboard events,
so a user can still tab to an element and press Return to trigger
its click event.

```example
<div class='btn events-none'>You can't click this</div>
```

## Enable touch and click events on an element and its children

Enable touch and click events on an element and
its children. Use to re-enable such events inside a parent with the `events-none` class.

```example
<div class='events-none'><div class='events-all'>You can click this.</div></div>
```

## Disable text selection on an element and its children

Disable text selection on an element and its children. Use only in cases where accidental text selection causes user frustration.

```example
<div class='unselectable'>You can't select this.</div>
```

## Enable text selection on an element and its children

Enable text selection on an element and its children.
Use to re-enable selection inside a parent with the `unselectable` class.

```example
<div class='unselectable'><div class='selectable'>You can select this.</div></div>
```

## Apply a subtle animated transition when changing CSS properties on an element

Apply a subtle animated transition when changing CSS properties on an element. See MDN's [list of CSS animated properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties) for every property effected by this class.

```example
<div class='bg-blue-on-hover transition'>Hover over me</div>
```

## Disable an animated transition on elements like [`btn`](/documentation/buttons) that have default transitions

Disable an animated transition on elements like [`btn`](/documentation/buttons) that have default transitions.

```example
<div class='btn transition-none'>transition-none</div>
```

## Always show scrollbars

Always show scrollbars.

```example
<div class='overflow-scroll'>Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit.</div>
```

## Display scrollbars if content flows beyond the edge of the element

Display scrollbars if content flows beyond the edge of the element.

```example
<div class='h60 overflow-auto'>Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit.</div>
```

## Hide content if it extends beyond the edge of the containing element

Hide content if it extends beyond the edge of the containing element.

```example
<div class='h60 overflow-hidden'>Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit.</div>
```

## Hide an element *visually*, but keep it available to screen readers

Hide an element *visually*, but keep it available to screen readers.

```example
<div class='hide-visually'>You cannot see this with your eyes.</div>
<div>There is a sentence above this that you cannot see.</div>
```

## Apply display none when rendering page for print

<p class="txt-mono">`.none-print`</p>

Apply display none when rendering page for print.

```example
<div class="none-print'>Hi, this text won't print!</div>
```
