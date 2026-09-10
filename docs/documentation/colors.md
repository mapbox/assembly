<script setup>
import ColorGrid from '../.vitepress/theme/ColorGrid.vue';
</script>

# Colors

Background and text colors. Colors include dark, light, and faint variations.
Be sure to maintain a readable color contrast between background and text.
Only use `-faint` text colors on dark backgrounds.

## Text colors

Apply a text color with `color-{name}`.

<ColorGrid prefix="color" />

### Hover and active

```example
<div class='color-red-on-hover'>color-red-on-hover</div>
<div class='color-red-on-active'>color-red-on-active (not active)</div>
<div class='color-red-on-active is-active'>color-red-on-active (active)</div>
```

## Background colors

Apply a background color with `bg-{name}`.

<ColorGrid prefix="bg" extra-class="py6 px6" />

### Hover and active

```example
<div class='bg-darken25-on-hover'>bg-darken25-on-hover</div>
<div class='bg-darken25-on-active'>bg-darken25-on-active (not active)</div>
<div class='bg-darken25-on-active is-active'>bg-darken25-on-active (active)</div>
```
