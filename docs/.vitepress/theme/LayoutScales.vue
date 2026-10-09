<script setup>
import { scales, scaleToken } from './data.js';

const classSets = [
  {
    name: 'Grid Gutters',
    classPatterns: ['grid--gut{n}'],
    scale: scales.gutter
  },
  {
    name: 'Margins',
    classPatterns: ['mx{n}', 'my{n}', 'ml{n}', 'mt{n}', 'mr{n}', 'mb{n}'],
    scale: scales.margin
  },
  {
    name: 'Margins (percentage-based)',
    classPatterns: ['mr-{fraction}', 'ml-{fraction}'],
    scale: scales.fractions
  },
  {
    name: 'Paddings',
    classPatterns: ['px{n}', 'py{n}', 'pl{n}', 'pt{n}', 'pr{n}', 'pb{n}'],
    scale: scales.padding
  },
  {
    name: 'Gaps',
    classPatterns: ['gap{n}', 'gapx{n}', 'gapy{n}'],
    scale: scales.gap
  },
  {
    name: 'Gridbox tracks',
    classPatterns: [
      'gridbox--cols{n}',
      'gridbox--rows{n}',
      'gridbox-child-col{n}',
      'gridbox-child-row{n}'
    ],
    scale: scales.gridTrack
  },
  {
    name: 'Aspect ratios',
    classPatterns: ['aspect-{ratio}'],
    scale: scales.aspectRatio
  },
  {
    name: 'Rotations',
    classPatterns: ['rotate{n}'],
    scale: scales.rotate
  },
  {
    name: 'Scales',
    classPatterns: ['scale{n}'],
    scale: scales.scale
  },
  {
    name: 'Translates',
    classPatterns: ['translate-x{n}', 'translate-y{n}'],
    scale: scales.margin
  },
  {
    name: 'Widths',
    classPatterns: ['w{n}'],
    scale: scales.width
  },
  {
    name: 'Widths (percentage-based)',
    classPatterns: ['w-{fraction}'],
    scale: scales.fractions
  },
  {
    name: 'Max-Widths',
    classPatterns: ['wmax{n}'],
    scale: scales.maxWidth
  },
  {
    name: 'Min-Widths',
    classPatterns: ['wmin{n}'],
    scale: scales.minWidth
  },
  {
    name: 'Heights',
    classPatterns: ['h{n}'],
    scale: scales.height
  },
  {
    name: 'Max-Heights',
    classPatterns: ['hmax{n}'],
    scale: scales.maxHeight
  },
  {
    name: 'Min-Heights',
    classPatterns: ['hmin{n}'],
    scale: scales.minHeight
  }
];
</script>

<template>
  <div>
    <div v-for="set in classSets" :key="set.name" class="mb36">
      <div class="mb12">
        <div class="inline-block txt-bold mr12">{{ set.name }}</div>
        <div
          v-for="pattern in set.classPatterns"
          :key="pattern"
          class="mr3 mb3 px3 txt-mono color-blue-dark bg-blue-faint inline-block round"
        >
          {{ pattern }}
        </div>
      </div>
      <div class="flex flex--wrap">
        <span
          v-for="value in set.scale"
          :key="scaleToken(value)"
          class="w60 txt-s txt-mono align-r pr6 py3 border-b border-t border-l ml-neg1 mb-neg1 border-r border--gray-light color-gray"
        >
          {{ scaleToken(value) }}
        </span>
      </div>
    </div>
  </div>
</template>
