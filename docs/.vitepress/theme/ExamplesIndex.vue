<script setup>
import { withBase } from 'vitepress';
import { exampleLinks } from './site-nav.js';
</script>

<template>
  <div class="py24">
    <h1 class="txt-h2 txt-bold mb18">Examples</h1>
    <p class="col w-1/2-ml">
      To effectively use Assembly, you must assemble many classes together into
      UI components and page layouts. The examples both demonstrate how to use
      Assembly, and they function as practical, reusable pieces that can be
      copied. All the examples are fully responsive.
    </p>
  </div>
  <div class="grid grid--gut24">
    <div v-for="item in exampleLinks" :key="item.href" class="col w-1/2">
      <a class="block link py3" :href="withBase(item.href)">{{ item.name }}</a>
    </div>
  </div>
</template>
