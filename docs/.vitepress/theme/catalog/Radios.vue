<script setup>
import { formColors } from '../data.js';

const colors = [null].concat(formColors());
</script>

<template>
  <div>
    <h2 class="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
      Radios
    </h2>
    <div class="mb12">
      <input id="radio-unstyled" type="radio" />
      <label for="radio-unstyled">Radio</label>
    </div>
    <div v-for="color in colors" :key="String(color)" class="mb12">
      <label class="radio-container mr12">
        <input :name="`radios-${color}`" type="radio" />
        <div :class="['radio', 'mr6', color ? `radio--${color}` : '']" />
        Radio
      </label>
      <label class="radio-container">
        <input checked disabled :name="`radios-${color}-off`" type="radio" />
        <div :class="['radio', 'mr6', color ? `radio--${color}` : '']" />
        Radio
      </label>
    </div>
  </div>
</template>
