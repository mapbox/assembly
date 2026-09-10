<script setup>
import { Content, useRoute, withBase } from 'vitepress';
import { onMounted } from 'vue';
import pkg from '../../../package.json';
import { nav } from './site-nav.js';
import Logo from './Logo.vue';

const route = useRoute();

function stripBase(path) {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  if (base && path.startsWith(base)) {
    return path.slice(base.length) || '/';
  }
  return path;
}

function normalized(path) {
  if (!path || path === '/') return '/';
  return stripBase(path).replace(/\.html$/, '').replace(/\/$/, '') || '/';
}

function splitHref(href) {
  const hashIndex = href.indexOf('#');
  if (hashIndex === -1) {
    return { path: href, hash: '' };
  }
  return {
    path: href.slice(0, hashIndex) || '/',
    hash: href.slice(hashIndex + 1)
  };
}

function hrefFor(href) {
  const { path, hash } = splitHref(href);
  const resolved = withBase(path);
  return hash ? `${resolved}#${hash}` : resolved;
}

function isActive(href) {
  const current = normalized(route.path);
  const target = normalized(splitHref(href).path);
  if (target === '/') return current === '/';
  return current === target || current.startsWith(`${target}/`);
}

function isExact(href) {
  return normalized(route.path) === normalized(splitHref(href).path);
}

function currentHash() {
  return (route.hash || '').replace(/^#/, '');
}

function isNestedActive(href) {
  const { path, hash } = splitHref(href);
  if (hash) {
    return isExact(path) && currentHash() === hash;
  }
  return isExact(path);
}

function showItems(item) {
  return Boolean(item.items && item.items.length > 0 && isActive(item.href));
}

function nestedLinkClass(parent, level, href) {
  return [
    'color-blue-on-hover',
    'relative',
    'mr12',
    'mr0-mm',
    'pb3',
    'txt-s',
    `ml${6 * (level + 1)}-mm`,
    parent.isDoc && level === 0 ? 'txt-uppercase color-darken50' : '',
    isNestedActive(href) ? 'color-blue' : ''
  ]
    .filter(Boolean)
    .join(' ');
}

function nestedWrapClass(parent, level) {
  return parent.isDoc && level === 0 ? 'block mt6' : 'inline-block block-mm';
}

function useProse() {
  const current = normalized(route.path);
  return (
    current !== '/' &&
    current !== '/catalog' &&
    !current.startsWith('/examples') &&
    !(current.startsWith('/documentation') && current !== '/documentation')
  );
}

onMounted(() => {
  if (document.querySelector('script[data-assembly]')) return;
  const script = document.createElement('script');
  script.src = `${import.meta.env.BASE_URL}assembly.js`;
  script.async = true;
  script.defer = true;
  script.dataset.assembly = 'true';
  document.body.appendChild(script);
});
</script>

<template>
  <div>
    <div
      class="overflow-auto h-viewport-full-mm w180-mm fixed-mm top left flex-mm flex--stretch-cross-mm"
    >
      <div class="flex-mm flex--column-mm w-full">
        <div class="flex hmin60 mt24 mb18 mx24">
          <a
            :href="withBase('/')"
            class="flex-child-grow link link--blue block"
            aria-label="Assembly.css"
          >
            <Logo />
          </a>
          <div class="txt-s color-darken50">v{{ pkg.version }}</div>
        </div>
        <div class="flex-child-grow-mm overflow-auto scroll-styled pr18 pl24">
          <div v-for="item in nav" :key="item.href">
            <a
              class="txt-s txt-bold block color-blue-on-hover mb6"
              :class="{ 'color-blue': isActive(item.href) }"
              :href="hrefFor(item.href)"
            >
              {{ item.name }}
            </a>
            <div v-if="showItems(item)" class="mb6 ml12 ml0-mm txt-s">
              <div
                v-for="child in item.items"
                :key="child.href"
                :class="nestedWrapClass(item, 0)"
              >
                <a :class="nestedLinkClass(item, 0, child.href)" :href="hrefFor(child.href)">
                  {{ child.name }}
                </a>
                <div v-if="child.items && child.items.length">
                  <div
                    v-for="grand in child.items"
                    :key="grand.href"
                    :class="nestedWrapClass(item, 1)"
                  >
                    <a
                      :class="nestedLinkClass(item, 1, grand.href)"
                      :href="hrefFor(grand.href)"
                    >
                      {{ grand.name }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt12 mb24 mx24">
          <a
            class="color-blue-on-hover txt-s flex flex--center-cross"
            href="https://github.com/mapbox/assembly/"
          >
            <svg class="icon txt-m">
              <use xlink:href="#icon-github" />
            </svg>
            <div class="ml6">View on GitHub</div>
          </a>
        </div>
      </div>
    </div>
    <div
      class="ml180-mm mx-auto px24 w-auto wmax1200-mm px60-mm mb60 mt24"
      :class="{ prose: useProse() }"
    >
      <Content />
    </div>
  </div>
</template>
