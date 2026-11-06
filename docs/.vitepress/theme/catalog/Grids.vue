<script setup>
const sizeCombos = [
  ['-full'],
  ['-11/12', '-1/12'],
  ['-5/6', '-1/6'],
  ['-3/4', '-1/4'],
  ['-2/3', '-1/3'],
  ['-7/12', '-5/12'],
  ['-1/2', '-1/2'],
  ['-1/3', '-1/3', '-1/3'],
  ['-1/4', '-1/4', '-1/2'],
  ['-1/6', '-1/6', '-2/3'],
  ['-1/12', '-1/6', '-3/4']
];
const offsetCombos = sizeCombos.filter(combo => combo.length === 2);
</script>

<template>
  <div>
    <h2 class="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
      Grid
    </h2>
    <h3 class="mb12 txt-m txt-bold color-darken50 txt-uppercase txt-s">
      Standard controlled grid
    </h3>
    <div
      v-for="(combo, index) in sizeCombos"
      :key="`std-${index}`"
      class="txt-s grid mb18"
    >
      <div v-for="(cell, cellIndex) in combo" :key="cellIndex" :class="`col w${cell}`">
        <div class="border px3 py3">w{{ cell }}</div>
      </div>
    </div>
    <h3 class="mb12 mt60 txt-m txt-bold color-darken50 txt-uppercase txt-s">
      Grid with gutters
    </h3>
    <div
      v-for="(combo, index) in sizeCombos"
      :key="`gut-${index}`"
      class="txt-s grid mb18 grid--gut24"
    >
      <div v-for="(cell, cellIndex) in combo" :key="cellIndex" :class="`col w${cell}`">
        <div class="border px3 py3">w{{ cell }}</div>
      </div>
    </div>
    <h3 class="mb12 mt60 txt-m txt-bold color-darken50 txt-uppercase txt-s">
      Grid with left offset
    </h3>
    <div
      v-for="([offset, width], index) in offsetCombos"
      :key="`ml-${index}`"
      class="txt-s grid mb18"
    >
      <div :class="`col ml${offset} w${width}`">
        <div class="border px3 py3">ml{{ offset }} w{{ width }}</div>
      </div>
    </div>
    <h3 class="mb12 mt60 txt-m txt-bold color-darken50 txt-uppercase txt-s">
      Grids only on large screens
    </h3>
    <div class="txt-s grid-ml grid--gut24-ml mb18">
      <div class="col-ml w-1/2-ml">
        <div class="border px3 py3">w-1/2-ml</div>
      </div>
      <div class="col-ml w-1/4-ml">
        <div class="border px3 py3">w-1/4-ml</div>
      </div>
      <div class="col-ml w-1/4-ml">
        <div class="border px3 py3">w-1/4-ml</div>
      </div>
    </div>
  </div>
</template>
