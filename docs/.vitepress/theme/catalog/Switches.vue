<script setup>
import { formColors } from '../data.js';

const colors = [null].concat(formColors());

function switchClass(color, handleColor) {
  return [
    'switch',
    color ? `switch--${color}` : '',
    handleColor ? `switch--dot-${handleColor}` : ''
  ]
    .filter(Boolean)
    .join(' ');
}
</script>

<template>
  <div>
    <h2 class="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
      Switches
    </h2>
    <div v-for="handle in colors" :key="`h-${handle}`" class="mb12">
      <div v-for="color in colors" :key="`c-${handle}-${color}`" class="mr6 inline-block">
        <label class="switch-container">
          <input type="checkbox" value="magic" />
          <div :class="switchClass(color, handle)" />
        </label>
      </div>
    </div>
    <div class="mt24">
      <div v-for="handle in colors" :key="`hd-${handle}`" class="mb12">
        <div v-for="color in colors" :key="`cd-${handle}-${color}`" class="mr6 inline-block">
          <label class="switch-container">
            <input disabled type="checkbox" value="magic" />
            <div :class="switchClass(color, handle)" />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
