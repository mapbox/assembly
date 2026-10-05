# Typography

Font styles, sizes, and utilities.

There are two ways to style text with Assembly: by applying utility classes to every element,
or by creating [`prose`](#prose) sections. All typographic styles can be applied individually with classes that have a
`.txt-` prefix. Alternatively, [`prose`](#prose) sections can be used to apply sensible default styling for all the semantic elements they contain.

## Type basics

Classes for font size and line height, lists, block quotes, code blocks, and more.

```selectors
.txt-kbd
```

Style text like a keyboard button.

```example
You entered <kbd class='txt-kbd'>Flamingo</kbd>.
```

```selectors
.txt-sub
```

Style subscript text: small and below the standard line.

```example
The chemical formula of water is H<sub class='txt-sub'>2</sub>O.
```

```selectors
.pre
```

Style a code block.

```example
<pre class='pre'>
<code>for each
  do this
end</code>
</pre>
```

```selectors
.txt-code
```

Style text as inline code.

```example
Make sure you <code class='txt-code'>git checkout</code> the repository.
```

```selectors
.txt-h1
.txt-h2
.txt-h3
.txt-h4
.txt-h5
```

Classes for the headline text scale. Line heights are 1.3333 times font size or less.
All text size classes include `-mm`, `-ml`, and `-mxl` variations to target screen sizes.

```example
<div class='txt-h1'>Malesuada Pharetra Ridiculus</div>
<div class='txt-h2'>Malesuada Pharetra Ridiculus</div>
<div class='txt-h3'>Malesuada Pharetra Ridiculus</div>
<div class='txt-h4'>Malesuada Pharetra Ridiculus</div>
<div class='txt-h5'>Malesuada Pharetra Ridiculus</div>
```

```selectors
.txt-xl
.txt-l
.txt-m
.txt-ms
.txt-s
.txt-xs
```

Classes for the body text scale. Line heights are 1.5 times font size or more.
All text size classes include `-mm`, `-ml`, and `-mxl` variations to target screen sizes.

```example
<div class='txt-xl'>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</div>
<div class='txt-l'>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</div>
<div class='txt-m'>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</div>
<div class='txt-ms'>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</div>
<div class='txt-s'>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</div>
<div class='txt-xs'>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</div>
```

```selectors
.txt-abbr
```

Style an abbreviation or acronym.

```example
How do you feel about <abbr title='Cascading Style Sheets' class='txt-abbr'>CSS</abbr>?
```

```selectors
.txt-hr
```

Style a line separating two blocks of text.

```example
<hr class='txt-hr'>
```

```selectors
.txt-ul
```

Style an unordered list. Works with any element type if the list items use the `txt-li` class, but you should almost always use it with a `<ul>` element.

```example
<div class='txt-ul'>
  <div class='txt-li'>one</div>
  <div class='txt-li'>two</div>
  <div class='txt-li'>three</div>
</div>
```

```selectors
.txt-ol
```

Style an ordered list. This does *not* work (in Firefox) without semantic elements `<ol>` and `<li>`, so use those.

```example
<ol class='txt-ol'>
  <li class='txt-li'>one</li>
  <li class='txt-li'>two</li>
  <li class='txt-li'>three</li>
</ol>
```

```selectors
.txt-blockquote
```

Style a block quotation.

```example
<div class='txt-blockquote'>Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.</div>
```

```selectors
.txt-sup
```

Style superscript text: small and above the standard line.

```example
Planet earth is seven years old. <sup class='txt-sup'>citation needed</sup>
```

## Type utils

Single-purpose classes for styling text.

```selectors
.txt-mono
```

Apply Assembly's monospaced font stack.

```example
<div class='txt-mono'>txt-mono</div>
```

```selectors
.txt-bold
```

Apply a bold font weight.

```example
<div class='txt-bold'>txt-bold</div>
```

```selectors
.txt-light
```

Apply a light font weight.

```example
<div class='txt-light'>txt-light</div>
```

```selectors
.txt-normal
```

Apply a normal font weight.

```example
<div class='txt-normal'>txt-normal</div>
```

```selectors
.txt-em
```

Italicize text.

```example
<div class='txt-em'>em</div>
```

```selectors
.txt-uppercase
```

Capitalize all letters in an element.

```example
<div class='txt-uppercase'>UpPeRcAsE</div>
```

```selectors
.txt-lowercase
```

Lowercase all letters in an element.

```example
<div class='txt-lowercase'>LoWeRcAsE</div>
```

```selectors
.txt-capitalize
```

Capitalize all words in an element.

```example
<div class='txt-capitalize'>all words are capitalized</div>
```

```selectors
.txt-capitalize-first
```

Capitalize the first letter in an element.

```example
<div class='txt-capitalize-first'>first word only is capitalized</div>
```

```selectors
.txt-underline
```

Underline text.

```example
<div class='txt-underline'>txt-underline</div>
```

```selectors
.txt-underline-on-hover
```

Underline text on hover.

```example
<span class='txt-underline-on-hover'>txt-underline-on-hover</span>
```

```selectors
.txt-strike
```

Strikethrough text.

```example
<div class='txt-strike'>txt-strike</div>
```

```selectors
.txt-nowrap
```

Prevent text from wrapping.

```example
<div class='border border--gray w60 txt-nowrap'>
  This text is too long for its container
</div>
```

```selectors
.txt-break-word
```

Allow words to break across lines.

```example
<div class='border border--gray w60 txt-break-word'>
  Thiswordistoolongforitscontainer
</div>
```

```selectors
.txt-truncate
```

Truncate text to a single line contained within the width
of its container, ending with an ellipsis if it overflows.

```example
<div class='border border--gray w60 txt-truncate'>
  This text is too long for its container
</div>
```

```selectors
.txt-spacing05
.txt-spacing1
.txt-spacing2
```

Apply extra space between letters.

```example
<div class='txt-spacing05'>spaced out</div>
<div class='txt-spacing2'>way spaced out</div>
```

```selectors
.txt-shadow-darken10
.txt-shadow-darken25
.txt-shadow-darken50
.txt-shadow-lighten10
.txt-shadow-lighten25
.txt-shadow-lighten50
```

Apply text shadows.

```example
<div class='txt-shadow-darken10'>ghost world</div>
<div class='txt-shadow-darken25'>ghost world</div>
<div class='txt-shadow-darken50'>ghost world</div>
<div class='txt-shadow-lighten10 bg-darken75'>ghost world</div>
<div class='txt-shadow-lighten25 bg-darken75'>ghost world</div>
<div class='txt-shadow-lighten50 bg-darken75'>ghost world</div>
```

```selectors
.align-l
.align-r
.align-center
```

Control the horizontal alignment of an element's inline children.

```example
<div class='align-l'>.align-l</div>
<div class='align-r'>.align-r</div>
<div class='align-center'>.align-center</div>
```

```selectors
.align-t
.align-b
.align-middle
```

Control the vertical alignment of an inline or table-cell element.

```example
<div>
  <span class='align-t inline-block h12 w12 border border--gray'></span>
  <span class='align-t inline-block h60 border border--gray'>align-t</span>
</div>
<div class='mt3'>
  <span class='align-middle inline-block h12 w12 border'></span>
  <span class='align-middle inline-block h60 border border--gray'>align-middle</span>
</div>
<div>
  <span class='align-b inline-block h12 w12 border border--gray'></span>
  <span class='align-b inline-block h60 border border--gray'>align-b</span>
</div>
```

## Prose

Conveniently style large blocks of semantic markup.
`prose` is designed to only be used when content is generated by a markdown processor and you don't have control over each element's class list.

```selectors
.prose
```

Apply appropriate styles based on semantic markup. Supported elements are:
`h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `table`, `small`, `ul`, `ol`, `a`, `abbr`, `hr`, `blockquote`, `kbd`, `sub`, `sup`, `code`, `pre`, `del`, `s`, `img`, and `video`.

```example
<div class="prose">
  <h1>Tortor Porta</h1>
  <small>Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo.</small>
  <hr/>
  <p>Cras justo odio, dapibus ac facilisis<sup>[note]</sup> in, <a href='#'>egestas eget quam</a>. Lorem ipsum <del>dolor</del> sit amet, consectetur adipiscing elit. H<sub>2</sub>0 electrolitis.</p>
</div>
```

```selectors
.unprose
```

Remove prose styling. Useful when you need to display, for example, a custom form inside an otherwise consistently-styled document.

**Apply this class directly to the element you want to unstyle.** It does not work on containers, only on the elements themselves.

```example
<div class="prose">
  <h1>felis euismod semper</h1>
  <a class='btn'>Click me</a>
  <h1 class='unprose mt18'>Morbi leo risus</h1>
  <a class='btn unprose'>Click me</a>
</div>
```

```selectors
.prose--dark
```

Invert the coloring of textual content inside `prose` sections, so it is legible against dark backgrounds.

```example
<div class="prose prose--dark bg-gray-deep">
  <h1>Tortor Porta</h1>
  <small>Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo.</small>
  <hr/>
  <p>Cras justo odio, dapibus ac facilisis<sup>[note]</sup> in, <a href='#'>egestas eget quam</a>. Lorem ipsum <del>dolor</del> sit amet, consectetur adipiscing elit. H<sub>2</sub>0 electrolitis.</p>
</div>
```
