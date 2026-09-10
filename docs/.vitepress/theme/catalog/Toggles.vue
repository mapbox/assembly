<script setup>
import { formColors } from '../data.js';

function isLight(color) {
  return Boolean(color && (/^lighten/.test(color) || color === 'white'));
}

const colors = [null].concat(formColors().filter(color => !isLight(color)));
const lightenColors = formColors().filter(isLight);
const animals = ['cow', 'horse', 'pig'];

function toggleClass(color, activeColor) {
  return [
    'toggle',
    color ? `toggle--${color}` : '',
    activeColor ? `toggle--active-${activeColor}` : ''
  ]
    .filter(Boolean)
    .join(' ');
}

function groupClass(small) {
  return small ? 'mb12 mr12 toggle-group toggle-group--s txt-s' : 'mb12 mr12 toggle-group';
}

function groupName(prefix, color, extra) {
  return `${prefix}-${color || 'default'}-${extra || 'on'}`;
}
</script>

<template>
  <div>
    <h2 class="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
      Toggles
    </h2>
    <div class="mb12 txt-bold color-darken50 txt-uppercase txt-s">
      Color and active text color variations
    </div>
    <div class="mb24">
      <div v-for="active in colors" :key="`a-${active}`" class="mb12">
        <div
          v-for="color in colors"
          :key="`a-${active}-${color}`"
          :class="groupClass(false)"
        >
          <label v-for="(label, index) in animals" :key="label" class="toggle-container">
            <input
              :name="groupName('animal', color, active)"
              :value="label"
              :checked="index === 1"
              type="radio"
            />
            <div :class="toggleClass(color, active)">{{ label }}</div>
          </label>
        </div>
      </div>
    </div>
    <div class="mb12 txt-bold color-darken50 txt-uppercase txt-s">Disabled</div>
    <div class="mb24">
      <div v-for="color in colors" :key="`d-${color}`" :class="groupClass(false)">
        <label v-for="(label, index) in animals" :key="label" class="toggle-container">
          <input
            disabled
            :name="groupName('disabled', color)"
            :value="label"
            :checked="index === 1"
            type="radio"
          />
          <div :class="toggleClass(color)">{{ label }}</div>
        </label>
      </div>
    </div>
    <div class="mb12 txt-bold color-darken50 txt-uppercase txt-s">Small</div>
    <div class="mb24">
      <div v-for="color in colors" :key="`s-${color}`" :class="groupClass(true)">
        <label v-for="(label, index) in animals" :key="label" class="toggle-container">
          <input
            :name="groupName('small', color)"
            :value="label"
            :checked="index === 1"
            type="radio"
          />
          <div :class="toggleClass(color)">{{ label }}</div>
        </label>
      </div>
    </div>
    <div class="mb12 txt-bold color-darken50 txt-uppercase txt-s">Light variations</div>
    <div class="bg-gray round px12 py12 mt12">
      <div v-for="color in lightenColors" :key="`l-${color}`" :class="groupClass(false)">
        <label v-for="(label, index) in animals" :key="label" class="toggle-container">
          <input
            :name="groupName('light', color)"
            :value="label"
            :checked="index === 1"
            type="radio"
          />
          <div :class="toggleClass(color)">{{ label }}</div>
        </label>
      </div>
    </div>
    <div class="mt24 mb12 txt-bold color-darken50 txt-uppercase txt-s">
      Disabled and light
    </div>
    <div class="bg-gray round px12 py12 mt12">
      <div v-for="color in lightenColors" :key="`ld-${color}`" :class="groupClass(false)">
        <label v-for="(label, index) in animals" :key="label" class="toggle-container">
          <input
            disabled
            :name="groupName('light-disabled', color)"
            :value="label"
            :checked="index === 1"
            type="radio"
          />
          <div :class="toggleClass(color)">{{ label }}</div>
        </label>
      </div>
    </div>
  </div>
</template>
