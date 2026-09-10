<script setup>
import { formColors } from '../data.js';

const colors = [null].concat(formColors());
</script>

<template>
  <div>
    <h2 class="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
      Links
    </h2>
    <div class="grid">
      <div class="col w-1/3 mb12 txt-bold color-darken50 txt-uppercase txt-s">
        Standard
      </div>
      <div class="col w-1/3 mb12 txt-bold color-darken50 txt-uppercase txt-s">
        Underline on hover
      </div>
      <div class="col w-1/3 mb12 txt-bold color-darken50 txt-uppercase txt-s">
        Active
      </div>
    </div>
    <div v-for="color in colors" :key="String(color)" class="grid">
      <div :class="['link', 'col', 'w-1/3', 'inline', 'mb6', color ? `link--${color}` : '']">
        Click me!
      </div>
      <div
        :class="[
          'txt-underline-on-hover',
          'link',
          'col',
          'w-1/3',
          'inline',
          'mb6',
          color ? `link--${color}` : ''
        ]"
      >
        Click me!
      </div>
      <div
        :class="['link', 'is-active', 'col', 'w-1/3', 'inline', 'mb6', color ? `link--${color}` : '']"
      >
        Active
      </div>
    </div>
  </div>
</template>
