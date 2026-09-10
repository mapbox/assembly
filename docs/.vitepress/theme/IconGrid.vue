<script setup>
const icons = Object.keys(import.meta.glob('../../../src/svgs/*.svg'))
  .map(file => file.replace(/^.*\//, '').replace(/\.svg$/, ''))
  .sort();
</script>

<template>
  <div class="grid txt-mono align-center">
    <div
      v-for="icon in icons"
      :key="icon"
      class="w-1/4 w-1/6-ml w-1/12-mxl mb12 py12 px3 flex flex--column flex--center-cross"
    >
      <svg class="icon h18 w18">
        <use :xlink:href="`#icon-${icon}`" />
      </svg>
      <span class="mt12 txt-xs inline-block color-gray">{{ icon }}</span>
    </div>
  </div>
</template>
