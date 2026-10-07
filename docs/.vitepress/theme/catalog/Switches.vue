<script setup>
import { formColors } from '../data.js';

const onDark = color => /^lighten|^white$/.test(color);
const colors = [null].concat(formColors.filter(color => !onDark(color)));
const darkColors = formColors.filter(onDark);
const handles = [null].concat(formColors);

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
    <div v-for="disabled in [false, true]" :key="`d-${disabled}`" :class="{ mt24: disabled }">
      <div v-for="handle in handles" :key="`h-${disabled}-${handle}`" class="flex">
        <div class="py6">
          <div v-for="color in colors" :key="`c-${handle}-${color}`" class="mr6 inline-block">
            <label class="switch-container">
              <input :disabled="disabled" type="checkbox" value="magic" />
              <div :class="switchClass(color, handle)" />
            </label>
          </div>
        </div>
        <div class="bg-gray-dark px6 py6">
          <div v-for="color in darkColors" :key="`k-${handle}-${color}`" class="mr6 inline-block">
            <label class="switch-container">
              <input :disabled="disabled" type="checkbox" value="magic" />
              <div :class="switchClass(color, handle)" />
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
