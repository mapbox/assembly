<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  encoded: { type: String, required: true },
  highlighted: { type: String, required: true }
});

const html = computed(() => decodeURIComponent(props.encoded));
const highlightedHtml = computed(() => decodeURIComponent(props.highlighted));
const copied = ref(false);

async function copy() {
  await navigator.clipboard.writeText(html.value);
  copied.value = true;
  window.setTimeout(() => {
    copied.value = false;
  }, 800);
}
</script>

<template>
  <div class="unprose mb24">
    <div
      class="example-html border border--gray-light px12 py12 round-t"
      v-html="html"
    />
    <div
      class="pre overflow-auto scroll-styled hmax240 border-l border-b border-r border--gray-light round-b relative"
    >
      <div class="absolute top right px12 py12">
        <button class="ml3 btn btn--s btn--darken25 round" @click="copy">
          {{ copied ? 'Copied!' : 'Copy' }}
        </button>
      </div>
      <div v-html="highlightedHtml" />
    </div>
  </div>
</template>
