<h1 class="txt-h2 txt-bold">Modal</h1>

<h2 class="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">Modal component</h2>

```example
<div class='bg-darken10 h-viewport-1/2'>
<!-- In practice, it makes sense to use this for the container instead:
<div class='fixed top right bottom left overflow-auto'></div>-->
  <div class='flex flex--center-main pt36'>
    <div class='bg-white round relative w600'>
      <button class='absolute top right px12 py12'>
        <svg class='icon link color-darken50'><use xlink:href='#icon-close'></use></svg>
      </button>
      <div class='px24 py24'>
        <div class='txt-l mb12'>Modal title</div>
        <div class='txt-m'>
          I am some modal body content.
        </div>
      </div>
    </div>
  </div>
</div>
```
