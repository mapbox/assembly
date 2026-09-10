<script setup>
import { formColors } from '../data.js';

const colors = [null].concat(formColors());

function selectClass(color, extras) {
  return ['select', color ? `select--${color}` : '', extras].filter(Boolean).join(' ');
}
</script>

<template>
  <div>
    <h2 class="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
      Selects
    </h2>
    <div v-for="color in colors" :key="String(color)" class="mb12">
      <div class="inline-block mr12">
        <div class="select-container">
          <select :class="selectClass(color)">
            <option>firstoption</option>
            <option disabled>two</option>
            <option>three</option>
          </select>
          <div class="select-arrow" />
        </div>
      </div>
      <div class="inline-block mr12">
        <div class="select-container">
          <select :class="selectClass(color)" disabled>
            <option>firstoption</option>
            <option>two</option>
            <option>three</option>
          </select>
          <div class="select-arrow" />
        </div>
      </div>
      <div class="inline-block mr12">
        <div class="select-container">
          <select :class="selectClass(color, 'select--s')">
            <option>firstoption</option>
            <option>two</option>
            <option>three</option>
          </select>
          <div class="select-arrow" />
        </div>
      </div>
      <div class="inline-block mr12">
        <div class="select-container">
          <select :class="selectClass(color, 'select--stroke')">
            <option>firstoption</option>
            <option disabled>two</option>
            <option>three</option>
          </select>
          <div class="select-arrow" />
        </div>
      </div>
      <div class="inline-block mr12">
        <div class="select-container">
          <select :class="selectClass(color, 'select--stroke')" disabled>
            <option>firstoption</option>
            <option>two</option>
            <option>three</option>
          </select>
          <div class="select-arrow" />
        </div>
      </div>
      <div class="inline-block mr12">
        <div class="select-container">
          <select :class="selectClass(color, 'select--stroke select--s')">
            <option>firstoption</option>
            <option>two</option>
            <option>three</option>
          </select>
          <div class="select-arrow" />
        </div>
      </div>
    </div>
  </div>
</template>
