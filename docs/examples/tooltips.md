<h1 class="txt-h2 txt-bold">Tooltips</h1>

<h2 class="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">Basic tooltip</h2>

```example
<div class='inline-flex flex--center-cross flex--column'>
  <div class='px6 py6 bg-darken75 color-white align-center  round txt-bold txt-s'>Hello world!</div>
  <span class='triangle triangle--d'></span>
</div>
```

<h2 class="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">Basic tooltip (right)</h2>

```example
<div class='inline-flex flex--center-cross'>
  <span class='triangle triangle--l'></span>
  <div class='px6 py6 round txt-bold txt-s align-center bg-darken75 color-white'>Hello world!</div>
</div>
```

<h2 class="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">Basic tooltip (left)</h2>

```example
<div class='inline-flex flex--center-cross'>
  <div class='px6 py6 round txt-bold txt-s align-center bg-darken75 color-white'>Hello world!</div>
  <span class='triangle triangle--r'></span>
</div>
```

<h2 class="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">Tooltip with close button</h2>

```example
<div class='inline-flex flex--center-cross flex--column'>
  <div class='relative px18 py18 round txt-bold txt-s align-center bg-darken75 color-white'>
    <button class='absolute top right'>
      <svg class='icon link color-white mt3 mr3'><use xlink:href='#icon-close'></use></svg>
    </button>
    Hello world!
  </div>
  <span class='triangle triangle--d color-darken75'></span>
</div>
```
