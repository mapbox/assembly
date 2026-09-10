<script setup>
import { formColors } from '../data.js';

const colors = [null].concat(formColors());
</script>

<template>
  <div>
    <h2 class="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
      Checkboxes
    </h2>
    <div class="mb12">
      <input id="checkbox-unstyled" type="checkbox" />
      <label for="checkbox-unstyled">Unstyled</label>
    </div>
    <div v-for="color in colors" :key="String(color)" class="mb12">
      <label class="checkbox-container mr12">
        <input type="checkbox" />
        <div :class="['checkbox', 'mr6', color ? `checkbox--${color}` : '']">
          <svg class="icon">
            <use xlink:href="#icon-check" />
          </svg>
        </div>
        Check me
      </label>
      <label class="checkbox-container">
        <input checked disabled type="checkbox" />
        <div :class="['checkbox', 'mr6', color ? `checkbox--${color}` : '']">
          <svg class="icon">
            <use xlink:href="#icon-check" />
          </svg>
        </div>
        Check me
      </label>
    </div>
  </div>
</template>
