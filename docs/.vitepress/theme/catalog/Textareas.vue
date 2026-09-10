<script setup>
import { formColors } from '../data.js';

const colors = [null].concat(formColors());
</script>

<template>
  <div>
    <h2 class="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
      Textareas
    </h2>
    <div class="mb12 txt-bold color-darken50 txt-uppercase txt-s">Border colors</div>
    <div class="mb24">
      <div v-for="color in colors" :key="`b-${color}`" class="mr6 mb6 inline-block">
        <textarea :class="['textarea', 'w240', color ? `textarea--border-${color}` : '']">
Hello</textarea>
      </div>
    </div>
    <div class="mb12 txt-bold color-darken50 txt-uppercase txt-s">Disabled</div>
    <div class="mb24">
      <div v-for="color in colors" :key="`d-${color}`" class="mr6 mb6 inline-block">
        <textarea
          :class="['textarea', 'w240', color ? `color-${color}` : '']"
          disabled
        >Hello</textarea>
      </div>
    </div>
    <div class="mb12 txt-bold color-darken50 txt-uppercase txt-s">Readonly</div>
    <div v-for="color in colors" :key="`r-${color}`" class="mr6 mb6 inline-block">
      <textarea
        :class="['textarea', 'w240', color ? `color-${color}` : '']"
        readonly
      >Hello</textarea>
    </div>
  </div>
</template>
