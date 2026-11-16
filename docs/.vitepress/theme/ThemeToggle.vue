<script setup>
import { onUnmounted, ref, watch } from 'vue';
import { data as darkCss } from './dark-mode.data.js';

const options = [
  { value: 'system', label: 'System' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' }
];
const theme = ref('system');

function applyTheme(value) {
  const root = document.documentElement;
  if (value === 'system') root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', value);
}

watch(theme, applyTheme);
onUnmounted(() => applyTheme('system'));
</script>

<template>
  <div class="unprose mb12">
    <component :is="'style'">{{ darkCss }}</component>
    <div class="toggle-group">
      <label
        v-for="option in options"
        :key="option.value"
        class="toggle-container"
      >
        <input
          v-model="theme"
          :value="option.value"
          name="theme-toggle"
          type="radio"
        />
        <div class="toggle">{{ option.label }}</div>
      </label>
    </div>
  </div>
</template>
