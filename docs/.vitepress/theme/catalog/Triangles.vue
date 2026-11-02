<script setup>
import { ALL_COLORS } from '../data.js';

const directions = ['u', 'r', 'b', 'l'];
</script>

<template>
  <div>
    <h2 class="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
      Triangles
    </h2>
    <div v-for="size in ['', '-l']" :key="size || 'm'">
      <div
        v-for="direction in directions"
        :key="`${size}-${direction}`"
        class="mb12"
      >
        <div
          v-for="color in ALL_COLORS"
          :key="color"
          class="inline-block mr18"
        >
          <div
            :class="[
              `triangle${size}`,
              `triangle${size}--${direction}`,
              `color-${color}`
            ]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
