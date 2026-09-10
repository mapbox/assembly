<script setup>
import { colorNames } from './data.js';

const props = defineProps({
  prefix: { type: String, required: true },
  extraClass: { type: String, default: '' }
});

const names = colorNames(props.prefix);
</script>

<template>
  <div class="grid txt-s">
    <div
      v-for="name in names"
      :key="name"
      class="col w-1/4"
      :class="[`${prefix}-${name}`, extraClass]"
    >
      {{ prefix }}-{{ name }}
    </div>
  </div>
</template>
