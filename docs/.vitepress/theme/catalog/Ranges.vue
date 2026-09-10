<script setup>
import { formColors } from '../data.js';

const colors = [null].concat(formColors());

function rangeClass(color, size) {
  return ['range', 'w240', color ? `range--${color}` : '', size ? `range--${size}` : '']
    .filter(Boolean)
    .join(' ');
}
</script>

<template>
  <div>
    <h2 class="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
      Ranges
    </h2>
    <div class="mb12 txt-bold color-darken50 txt-uppercase txt-s">Color variations</div>
    <div class="mb24">
      <div v-for="color in colors" :key="`c-${color}`" class="mr6 mb6 inline-block">
        <div :class="rangeClass(color)">
          <input type="range" />
        </div>
      </div>
    </div>
    <div class="mb12 txt-bold color-darken50 txt-uppercase txt-s">Disabled</div>
    <div class="mb24">
      <div v-for="color in colors" :key="`d-${color}`" class="mr6 mb6 inline-block">
        <div :class="rangeClass(color)">
          <input type="range" disabled />
        </div>
      </div>
    </div>
    <div class="mb12 txt-bold color-darken50 txt-uppercase txt-s">Small</div>
    <div class="mb24">
      <div v-for="color in colors" :key="`s-${color}`" class="mr6 mb6 inline-block">
        <div :class="rangeClass(color, 's')">
          <input type="range" />
        </div>
      </div>
    </div>
    <div class="mb12 flex flex--center-cross">
      <input class="input w240" />
      <div class="range w240">
        <input type="range" />
      </div>
    </div>
    <div class="mb12 flex flex--center-cross">
      <input class="input input--s w240" />
      <div class="range range--s w240">
        <input type="range" />
      </div>
    </div>
  </div>
</template>
