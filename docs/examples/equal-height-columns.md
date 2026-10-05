<h1 class="txt-h2 txt-bold">Equal-height columns</h1>

<h2 class="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">Equal-height columns</h2>

<div class="prose mb24">

This effect is easy, of course, if you can fix the height of the columns. Often, though, that's not what you want. If you want columns to have equal heights *based on the column with the tallest content*, you need some flexbox powers.

The key here is to add `flex--stretch-cross` to the `grid`, and add `h-full` to the *child* of the `col` element, which is the one with the background color.

</div>

```example
<div class='grid grid--gut12 flex--stretch-cross'>
  <div class='col w-1/3'>
    <div class='h-full bg-darken10 px12 py12'>
      <div class='bg-darken10 h60'></div>
    </div>
  </div>
  <div class='col w-1/3'>
    <div class='h-full bg-darken10 px12 py12'>
      <div class='bg-darken10 h60'></div>
    </div>
  </div>
  <div class='col w-1/3'>
    <div class='h-full bg-darken10 px12 py12'>
      <div class='bg-darken10 h120'></div>
    </div>
  </div>
</div>
```
