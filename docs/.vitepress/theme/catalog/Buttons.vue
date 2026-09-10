<script setup>
import { buttonColors } from '../data.js';

function isLight(color) {
  return Boolean(color && (/^lighten/.test(color) || color === 'white'));
}

const colors = [null].concat(buttonColors().filter(color => !isLight(color)));
const lightenColors = buttonColors().filter(isLight);

function fillClass(color) {
  return color ? `btn btn--${color}` : 'btn';
}

function strokeClass(color) {
  return `${fillClass(color)} btn--stroke`;
}

function showStroke(color) {
  return !/^(darken10|darken25|lighten10|lighten25)$/.test(color || '');
}
</script>

<template>
  <div>
    <h2 class="border-b border-b--2 border--gray-faint pb6 mt60 mb24 txt-l txt-bold">
      Buttons
    </h2>
    <div v-for="color in colors" :key="String(color)" class="mb12">
      <div class="inline-block mr18">
        <button :class="fillClass(color)">Fill</button>
      </div>
      <div class="inline-block mr18">
        <button disabled :class="fillClass(color)">Fill</button>
      </div>
      <div class="inline-block mr18">
        <button :class="`${fillClass(color)} round`">Less round</button>
      </div>
      <div class="inline-block mr18">
        <button disabled :class="`${fillClass(color)} round`">Less round</button>
      </div>
      <template v-if="showStroke(color)">
        <div class="inline-block mr18">
          <button :class="strokeClass(color)">Stroke</button>
        </div>
        <div class="inline-block mr18">
          <button disabled :class="strokeClass(color)">Stroke</button>
        </div>
      </template>
    </div>
    <div class="mt18 py12 bg-gray round">
      <div v-for="color in lightenColors" :key="color" class="mb12">
        <div class="inline-block mr18">
          <button :class="fillClass(color)">Fill</button>
        </div>
        <div class="inline-block mr18">
          <button disabled :class="fillClass(color)">Fill</button>
        </div>
        <div class="inline-block mr18">
          <button :class="`${fillClass(color)} round`">Less round</button>
        </div>
        <div class="inline-block mr18">
          <button disabled :class="`${fillClass(color)} round`">Less round</button>
        </div>
        <template v-if="showStroke(color)">
          <div class="inline-block mr18">
            <button :class="strokeClass(color)">Stroke</button>
          </div>
          <div class="inline-block mr18">
            <button disabled :class="strokeClass(color)">Stroke</button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
