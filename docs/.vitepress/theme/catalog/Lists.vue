<template>
  <div>
    <h2 class="mb24 border-b border-b--2 border--gray-faint pb6 mt60 txt-l txt-bold">
      Lists
    </h2>
    <div class="grid grid--gut12">
      <div class="col w-1/3">
        <div class="mb12 txt-bold color-darken50 txt-uppercase txt-s">unstyled</div>
        <h2>Unordered</h2>
        <ul>
          <li>Unordered list item</li>
          <li>
            Unordered list item
            <ol>
              <li>Ordered child</li>
              <li>Ordered child</li>
            </ol>
          </li>
          <li>Unordered list item</li>
          <li>
            Unordered list item
            <ul>
              <li>Unordered child</li>
              <li>Unordered child</li>
            </ul>
          </li>
          <li>Unordered list item</li>
        </ul>
        <h2>Ordered</h2>
        <ol>
          <li>Ordered list item</li>
          <li>
            Ordered list item
            <ol>
              <li>Ordered child</li>
              <li>Ordered child</li>
            </ol>
          </li>
          <li>Ordered list item</li>
          <li>
            Ordered list item
            <ul>
              <li>Unordered child</li>
              <li>
                Unordered child
                <ul>
                  <li>Unordered child</li>
                  <li>Unordered child</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Ordered list item</li>
        </ol>
      </div>
      <div class="col w-1/3">
        <div class="mb12 txt-bold color-darken50 txt-uppercase txt-s">
          txt-ol/ul
        </div>
        <ul class="txt-ul">
          <li class="txt-li">Unordered list item</li>
          <li class="txt-li">
            Unordered list item
            <ol class="txt-ol">
              <li class="txt-li">Ordered child</li>
              <li class="txt-li">Ordered child</li>
            </ol>
          </li>
          <li class="txt-li">Unordered list item</li>
          <li class="txt-li">
            Unordered list item
            <ul class="txt-ul">
              <li class="txt-li">Unordered child</li>
              <li class="txt-li">Unordered child</li>
            </ul>
          </li>
          <li class="txt-li">Unordered list item</li>
        </ul>
        <h2 class="txt-h2">Ordered (with classes)</h2>
        <ol class="txt-ol">
          <li class="txt-li">Ordered list item</li>
          <li class="txt-li">
            Ordered list item
            <ol class="txt-ol">
              <li class="txt-li">Ordered child</li>
              <li class="txt-li">Ordered child</li>
            </ol>
          </li>
          <li class="txt-li">Ordered list item</li>
          <li class="txt-li">
            Ordered list item
            <ul class="txt-ul">
              <li class="txt-li">Unordered child</li>
              <li class="txt-li">
                Unordered child
                <ul class="txt-ul">
                  <li class="txt-li">Unordered child</li>
                  <li class="txt-li">Unordered child</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Ordered list item</li>
        </ol>
      </div>
      <div class="col w-1/3 prose">
        <div class="mb12 txt-bold color-darken50 txt-uppercase txt-s">Prose</div>
        <h2>Unordered</h2>
        <ul>
          <li>Unordered list item</li>
          <li>
            Unordered list item
            <ol>
              <li>Ordered child</li>
              <li>Ordered child</li>
            </ol>
          </li>
          <li>Unordered list item</li>
          <li>
            Unordered list item
            <ul>
              <li>Unordered child</li>
              <li>Unordered child</li>
            </ul>
          </li>
          <li>Unordered list item</li>
        </ul>
        <h2>Ordered</h2>
        <ol>
          <li>Ordered list item</li>
          <li>
            Ordered list item
            <ol>
              <li>Ordered child</li>
              <li>Ordered child</li>
            </ol>
          </li>
          <li>Ordered list item</li>
          <li>
            Ordered list item
            <ul>
              <li>Unordered child</li>
              <li>
                Unordered child
                <ul>
                  <li>Unordered child</li>
                  <li>Unordered child</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Ordered list item</li>
        </ol>
      </div>
    </div>
  </div>
</template>
