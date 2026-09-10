# Links

Create clickable, hoverable, focusable, colored text.
These classes are often used for actual `<a>` elements with `href` attributes,
but might prove useful for `<button>`s, as well, depending on semantics.

## Style a link

Style a link. By default, the `link` class turns text blue, and provides dark blue hover and active states. Change the color with a `link--{color}` modifier.
Links are underlined when focused.

```example
<a href='#Links' class='link'>A link</a>
<a href='#Links' class='link link--red'>A red link</a>
```

## Apply a darker active state to links by adding the `is-active` class

<p class="txt-mono">`.link.is-active`</p>

Apply a darker active state to links by adding the `is-active` class.

```example
<a href='#Links' class='link is-active'>Active</a>
<a href='#Links' class='link link--red is-active'>Red and active</a>
```

## When a form element like `button` includes both the `link` class and the `disabled` attribute, it will be styled accordingly

<p class="txt-mono">`.link:disabled`</p>

When a form element like `button` includes both the `link` class and the `disabled` attribute, it will be styled accordingly.
The disabled property has no visual effect on `a` elements.

```example
<button href='#Links' disabled class='link'>A disabled link</button>
<button href='#Links' disabled class='link link--red'>A disabled red link</button>
```
