<script setup>
import { formColors } from '../data.js';

const colors = [null].concat(formColors());

function inputClass(color, extra) {
  return ['input', 'w240', color ? `input--border-${color}` : '', extra]
    .filter(Boolean)
    .join(' ');
}
</script>

<template>
  <div>
    <h2 class="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
      Text inputs
    </h2>
    <div class="mb12 txt-bold color-darken50 txt-uppercase txt-s">Border colors</div>
    <div class="mb24">
      <div v-for="color in colors" :key="`b-${color}`" class="mr6 mb6 inline-block">
        <input :class="inputClass(color)" placeholder="name" value="magic" />
      </div>
    </div>
    <div class="mb12 txt-bold color-darken50 txt-uppercase txt-s">Disabled</div>
    <div class="mb24">
      <div v-for="color in colors" :key="`d-${color}`" class="mr6 mb6 inline-block">
        <input
          :class="inputClass(color, color ? `color-${color}` : '')"
          placeholder="name"
          value="magic"
          disabled
        />
      </div>
    </div>
    <div class="mb12 txt-bold color-darken50 txt-uppercase txt-s">Readonly</div>
    <div class="mb24">
      <div v-for="color in colors" :key="`r-${color}`" class="mr6 mb6 inline-block">
        <input
          :class="inputClass(color, color ? `color-${color}` : '')"
          placeholder="name"
          value="magic"
          readonly
        />
      </div>
    </div>
    <div class="mb12 txt-bold">Additional input types</div>
    <div class="mb24">
      <div class="mr6 mb6 inline-block">
        <input class="input w240" placeholder="date" type="date" />
      </div>
      <div class="mr6 mb6 inline-block">
        <input class="input w240" placeholder="number" type="number" />
      </div>
      <div class="mr6 mb6 inline-block">
        <input class="input w240" placeholder="search" type="search" />
      </div>
      <div class="mr6 mb6 inline-block align-t">
        <input class="input w240" type="color" />
      </div>
      <div class="mr6 mb6 inline-block">
        <input class="input w240" placeholder="datetime" type="datetime" />
      </div>
    </div>
  </div>
</template>
