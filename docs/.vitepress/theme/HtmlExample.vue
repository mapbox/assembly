<script setup>
import { computed, nextTick, ref, watch } from 'vue';

const props = defineProps({
  encoded: { type: String, default: '' },
  code: { type: String, default: '' },
  highlighted: { type: String, default: '' }
});

const html = computed(() =>
  (props.code || decodeURIComponent(props.encoded)).replace(/\n$/, '')
);
const highlightedHtml = computed(() =>
  props.highlighted ? decodeURIComponent(props.highlighted) : ''
);
const copied = ref(false);
const preview = ref(null);

function stripPageProseFromAnchors(root) {
  if (!root) return;
  Array.from(root.querySelectorAll('a')).forEach((anchor) => {
    const nestedProse = anchor.closest('.prose');
    if (!nestedProse || root.contains(nestedProse)) return;
    anchor.classList.add('unprose');
  });
}

watch(
  html,
  async () => {
    await nextTick();
    stripPageProseFromAnchors(preview.value);
  },
  { immediate: true }
);

watch(preview, (el) => {
  stripPageProseFromAnchors(el);
});

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
      ref="preview"
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
      <div v-if="highlightedHtml" v-html="highlightedHtml" />
      <template v-else>{{ html }}</template>
    </div>
  </div>
</template>
