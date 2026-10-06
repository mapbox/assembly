'use strict';

const {
  ALL_COLORS,
  isSemitransparent,
  isNotAccessibleForForms,
  isNotAccessibleForButtons,
  isNotAccessibleExceptBg,
  getDarkerShade,
  resolveColorVariants,
  colorsFor
} = require('./color-utils');

const important = value => `${value} !important`;
const switchChecked = s =>
  `:is(input:checked + ${s}, .switch-container:has(> input:checked) ${s})`;

function colorRules(config) {
  const resolved = resolveColorVariants(config);
  const entriesByClass = new Map();

  // Each entry is [selector(s), declarations]. `selector` receives the escaped
  // utility selector so media variants and escaping still apply.
  function append(className, entries) {
    const existing = entriesByClass.get(className) || [];
    entriesByClass.set(className, existing.concat(entries));
  }

  colorsFor(resolved, 'buttonFill').forEach(color => {
    if (isNotAccessibleForButtons(color)) return;
    const darkerShade = getDarkerShade(color);
    append(`btn--${color}`, [
      [s => s, { 'background-color': `var(--${color})` }],
      [
        s => `${s}:hover, ${s}.is-active`,
        { 'background-color': `var(--${darkerShade})` }
      ]
    ]);
  });

  colorsFor(resolved, 'buttonStroke').forEach(color => {
    if (isNotAccessibleForForms(color)) return;
    const darkerShade = getDarkerShade(color);
    append(`btn--${color}`, [
      [s => `.btn--stroke${s}`, { color: `var(--${color})` }],
      [
        s => `.btn--stroke${s}:hover, .btn--stroke${s}.is-active`,
        { color: `var(--${darkerShade})` }
      ]
    ]);
  });

  colorsFor(resolved, 'select').forEach(color => {
    if (isNotAccessibleForForms(color)) return;
    const darkerShade = getDarkerShade(color);
    append(`select--${color}`, [
      [s => s, { color: `var(--${color})` }],
      [s => `${s}:focus`, { color: `var(--${darkerShade})` }],
      [s => `${s}:hover`, { color: `var(--${darkerShade})` }],
      [s => `${s} + .select-arrow`, { 'border-top-color': `var(--${color})` }],
      [
        s => `${s}:focus + .select-arrow`,
        { 'border-top-color': `var(--${darkerShade})` }
      ]
    ]);
  });

  colorsFor(resolved, 'inputTextareaSelect').forEach(color => {
    if (isNotAccessibleForForms(color)) return;
    const darkerShade = getDarkerShade(color);
    ['textarea', 'input'].forEach(element => {
      append(`${element}--border-${color}`, [
        [s => s, { 'box-shadow': `inset 0 0 0 1px var(--${color})` }],
        [
          s => `${s}:focus`,
          { 'box-shadow': `inset 0 0 0 1px var(--${darkerShade})` }
        ]
      ]);
    });
    append(`select--${color}`, [
      [
        s => `.select--stroke${s}`,
        { 'box-shadow': `inset 0 0 0 1px var(--${color})` }
      ],
      [
        s =>
          `[data-assembly-focus-control='visible'] .select--stroke${s}:focus`,
        {
          'box-shadow': `inset 0 0 0 1px var(--${darkerShade}), var(--focus-shadow)`
        }
      ]
    ]);
  });

  colorsFor(resolved, 'checkbox').forEach(color => {
    if (isNotAccessibleForForms(color)) return;
    append(`checkbox--${color}`, [
      [s => s, { 'border-color': `var(--${color})` }],
      [s => `input:checked + ${s}`, { 'background-color': `var(--${color})` }]
    ]);
  });

  colorsFor(resolved, 'radio').forEach(color => {
    if (isNotAccessibleForForms(color)) return;
    append(`radio--${color}`, [
      [s => `${s}, input:checked + ${s}`, { color: `var(--${color})` }]
    ]);
  });

  colorsFor(resolved, 'toggle').forEach(color => {
    if (isNotAccessibleForForms(color)) return;
    append(`toggle--${color}`, [
      [s => s, { color: `var(--${color})` }],
      [s => `input:checked + ${s}`, { background: `var(--${color})` }]
    ]);
  });

  colorsFor(resolved, 'toggleActive').forEach(color => {
    if (isNotAccessibleForForms(color)) return;
    append(`toggle--active-${color}`, [
      [s => `input:checked + ${s}`, { color: `var(--${color})` }]
    ]);
  });

  colorsFor(resolved, 'switch').forEach(color => {
    if (isNotAccessibleForForms(color)) return;
    const track = ALL_COLORS.includes(`${color}-light`)
      ? [[s => s, { 'background-color': `var(--${color}-light)` }]]
      : [];
    append(`switch--${color}`, [
      ...track,
      [switchChecked, { 'background-color': `var(--${color})` }]
    ]);
    append(`switch--dot-${color}`, [
      [
        s => `${switchChecked(s)}::after`,
        { 'background-color': `var(--${color})` }
      ]
    ]);
  });

  colorsFor(resolved, 'range').forEach(color => {
    if (isNotAccessibleForForms(color)) return;
    append(`range--${color}`, [
      [s => `${s} > input`, { color: `var(--${color})` }]
    ]);
  });

  colorsFor(resolved, 'color').forEach(color => {
    if (isNotAccessibleExceptBg(color)) return;
    append(`color-${color}`, [
      [s => s, { color: important(`var(--${color})`) }]
    ]);
  });
  append('color-text', [[s => s, { color: important('var(--gray-deep)') }]]);

  colorsFor(resolved, 'background').forEach(color => {
    append(`bg-${color}`, [
      [s => s, { 'background-color': important(`var(--${color})`) }]
    ]);
  });

  colorsFor(resolved, 'link').forEach(color => {
    if (isNotAccessibleForForms(color)) return;
    const darkerShade = getDarkerShade(color);
    append(`link--${color}`, [
      [s => s, { color: `var(--${color})` }],
      [s => `${s}:hover, ${s}.is-active`, { color: `var(--${darkerShade})` }]
    ]);
  });

  colorsFor(resolved, 'border').forEach(color => {
    if (isNotAccessibleExceptBg(color)) return;
    append(`border--${color}`, [
      [s => s, { 'border-color': important(`var(--${color})`) }]
    ]);
  });

  colorsFor(resolved, 'shadow').forEach(color => {
    if (!isSemitransparent(color) || isNotAccessibleExceptBg(color)) return;
    append(`shadow-${color}`, [
      [s => s, { 'box-shadow': important(`0 2px 10px 0 var(--${color})`) }]
    ]);
    append(`shadow-${color}-bold`, [
      [s => s, { 'box-shadow': important(`0 6px 30px 0 var(--${color})`) }]
    ]);
  });

  const onHover = s => `${s}:hover`;
  const onActive = s => `${s}.is-active, ${s}.is-active:hover`;

  colorsFor(resolved, 'hoverShadow').forEach(color => {
    if (!isSemitransparent(color) || isNotAccessibleExceptBg(color)) return;
    const regular = { 'box-shadow': important(`0 2px 10px 0 var(--${color})`) };
    const bold = { 'box-shadow': important(`0 6px 30px 0 var(--${color})`) };
    append(`shadow-${color}-on-hover`, [[onHover, regular]]);
    append(`shadow-${color}-on-active`, [[onActive, regular]]);
    append(`shadow-${color}-bold-on-hover`, [[onHover, bold]]);
    append(`shadow-${color}-bold-on-active`, [[onActive, bold]]);
  });

  colorsFor(resolved, 'hoverBackground').forEach(color => {
    const decls = { 'background-color': important(`var(--${color})`) };
    append(`bg-${color}-on-hover`, [[onHover, decls]]);
    append(`bg-${color}-on-active`, [[onActive, decls]]);
  });

  colorsFor(resolved, 'hoverColor').forEach(color => {
    if (isNotAccessibleExceptBg(color)) return;
    const decls = { color: important(`var(--${color})`) };
    append(`color-${color}-on-hover`, [[onHover, decls]]);
    append(`color-${color}-on-active`, [[onActive, decls]]);
  });

  colorsFor(resolved, 'hoverBorder').forEach(color => {
    if (isNotAccessibleExceptBg(color)) return;
    const decls = { 'border-color': important(`var(--${color})`) };
    append(`border--${color}-on-hover`, [[onHover, decls]]);
    append(`border--${color}-on-active`, [[onActive, decls]]);
  });

  return {
    rules: [...entriesByClass].map(([className, entries]) => [
      new RegExp(`^${className}$`),
      (match, { symbols }) =>
        entries.map(([selector, decls]) =>
          Object.assign({ [symbols.selector]: selector }, decls)
        ),
      { layer: 'colors' }
    ]),
    safelist: [...entriesByClass.keys()],
    preflight: '.btn.btn--stroke { background-color: transparent; }'
  };
}

module.exports = { colorRules };
