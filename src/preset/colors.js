'use strict';

const {
  isSemitransparent,
  isNotAccessibleForForms,
  isNotAccessibleForButtons,
  isNotAccessibleExceptBg,
  getDarkerShade,
  resolveColorVariants,
  colorsFor
} = require('./color-utils');

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function colorRules(config) {
  const resolved = resolveColorVariants(config);
  const cssByClass = {};
  const order = [];

  function append(className, css) {
    if (cssByClass[className] === undefined) {
      order.push(className);
      cssByClass[className] = css;
      return;
    }
    cssByClass[className] += `\n${css}`;
  }

  colorsFor(resolved, 'buttonFill').forEach(color => {
    if (isNotAccessibleForButtons(color)) return;
    const darkerShade = getDarkerShade(color);
    append(
      `btn--${color}`,
      `.btn--${color} { background-color: var(--${color}); }
.btn--${color}:hover, .btn--${color}.is-active { background-color: var(--${darkerShade}); }`
    );
  });

  colorsFor(resolved, 'buttonStroke').forEach(color => {
    if (isNotAccessibleForForms(color)) return;
    const darkerShade = getDarkerShade(color);
    append(
      `btn--${color}`,
      `.btn--stroke.btn--${color} { color: var(--${color}); }
.btn--stroke.btn--${color}:hover, .btn--stroke.btn--${color}.is-active { color: var(--${darkerShade}); }`
    );
  });

  colorsFor(resolved, 'select').forEach(color => {
    if (isNotAccessibleForForms(color)) return;
    const darkerShade = getDarkerShade(color);
    append(
      `select--${color}`,
      `.select--${color} { color: var(--${color}); }
.select--${color}:focus { color: var(--${darkerShade}); }
.select--${color}:hover { color: var(--${darkerShade}); }
.select--${color} + .select-arrow { border-top-color: var(--${color}); }
.select--${color}:focus + .select-arrow { border-top-color: var(--${darkerShade}); }`
    );
  });

  colorsFor(resolved, 'inputTextareaSelect').forEach(color => {
    if (isNotAccessibleForForms(color)) return;
    const darkerShade = getDarkerShade(color);
    append(
      `textarea--border-${color}`,
      `.textarea--border-${color} { box-shadow: inset 0 0 0 1px var(--${color}); }
.textarea--border-${color}:focus { box-shadow: inset 0 0 0 1px var(--${darkerShade}); }`
    );
    append(
      `input--border-${color}`,
      `.input--border-${color} { box-shadow: inset 0 0 0 1px var(--${color}); }
.input--border-${color}:focus { box-shadow: inset 0 0 0 1px var(--${darkerShade}); }`
    );
    append(
      `select--${color}`,
      `.select--stroke.select--${color} { box-shadow: inset 0 0 0 1px var(--${color}); }
[data-assembly-focus-control='visible'] .select--stroke.select--${color}:focus { box-shadow: inset 0 0 0 1px var(--${darkerShade}), var(--focus-shadow); }`
    );
  });

  colorsFor(resolved, 'checkbox').forEach(color => {
    if (isNotAccessibleForForms(color)) return;
    append(
      `checkbox--${color}`,
      `.checkbox--${color} { border-color: var(--${color}); }
input:checked + .checkbox--${color} { background-color: var(--${color}); }`
    );
  });

  colorsFor(resolved, 'radio').forEach(color => {
    if (isNotAccessibleForForms(color)) return;
    append(
      `radio--${color}`,
      `.radio--${color}, input:checked + .radio--${color} { color: var(--${color}); }`
    );
  });

  colorsFor(resolved, 'toggle').forEach(color => {
    if (isNotAccessibleForForms(color)) return;
    append(
      `toggle--${color}`,
      `.toggle--${color} { color: var(--${color}); }
input:checked + .toggle--${color} { background: var(--${color}); }`
    );
  });

  colorsFor(resolved, 'toggleActive').forEach(color => {
    if (isNotAccessibleForForms(color)) return;
    append(
      `toggle--active-${color}`,
      `input:checked + .toggle--active-${color} { color: var(--${color}); }`
    );
  });

  colorsFor(resolved, 'switch').forEach(color => {
    if (isNotAccessibleForForms(color)) return;
    append(
      `switch--${color}`,
      `.switch--${color} { color: var(--${color}); }
input:checked + .switch--${color} { background-color: var(--${color}); }`
    );
    append(
      `switch--dot-${color}`,
      `input:checked + .switch--dot-${color}::after { background-color: var(--${color}); }`
    );
  });

  colorsFor(resolved, 'range').forEach(color => {
    if (isNotAccessibleForForms(color)) return;
    append(
      `range--${color}`,
      `.range--${color} > input { color: var(--${color}); }`
    );
  });

  colorsFor(resolved, 'color').forEach(color => {
    if (isNotAccessibleExceptBg(color)) return;
    append(
      `color-${color}`,
      `.color-${color} { color: var(--${color}) !important; }`
    );
  });
  append('color-text', '.color-text { color: var(--gray-deep) !important; }');

  colorsFor(resolved, 'background').forEach(color => {
    append(
      `bg-${color}`,
      `.bg-${color} { background-color: var(--${color}) !important; }`
    );
  });

  colorsFor(resolved, 'link').forEach(color => {
    if (isNotAccessibleForForms(color)) return;
    const darkerShade = getDarkerShade(color);
    append(
      `link--${color}`,
      `.link--${color} { color: var(--${color}); }
.link--${color}:hover, .link--${color}.is-active { color: var(--${darkerShade}); }`
    );
  });

  colorsFor(resolved, 'border').forEach(color => {
    if (isNotAccessibleExceptBg(color)) return;
    append(
      `border--${color}`,
      `.border--${color} { border-color: var(--${color}) !important; }`
    );
  });

  colorsFor(resolved, 'shadow').forEach(color => {
    if (!isSemitransparent(color) || isNotAccessibleExceptBg(color)) return;
    append(
      `shadow-${color}`,
      `.shadow-${color} { box-shadow: 0 2px 10px 0 var(--${color}) !important; }`
    );
    append(
      `shadow-${color}-bold`,
      `.shadow-${color}-bold { box-shadow: 0 6px 30px 0 var(--${color}) !important; }`
    );
  });

  colorsFor(resolved, 'hoverShadow').forEach(color => {
    if (!isSemitransparent(color) || isNotAccessibleExceptBg(color)) return;
    const regular = `.shadow-${color}-on-hover:hover, .shadow-${color}-on-active.is-active, .shadow-${color}-on-active.is-active:hover { box-shadow: 0 2px 10px 0 var(--${color}) !important; }`;
    const bold = `.shadow-${color}-bold-on-hover:hover, .shadow-${color}-bold-on-active.is-active, .shadow-${color}-bold-on-active.is-active:hover { box-shadow: 0 6px 30px 0 var(--${color}) !important; }`;
    append(`shadow-${color}-on-hover`, regular);
    append(`shadow-${color}-on-active`, regular);
    append(`shadow-${color}-bold-on-hover`, bold);
    append(`shadow-${color}-bold-on-active`, bold);
  });

  colorsFor(resolved, 'hoverBackground').forEach(color => {
    const css = `.bg-${color}-on-hover:hover, .bg-${color}-on-active.is-active, .bg-${color}-on-active.is-active:hover { background-color: var(--${color}) !important; }`;
    append(`bg-${color}-on-hover`, css);
    append(`bg-${color}-on-active`, css);
  });

  colorsFor(resolved, 'hoverColor').forEach(color => {
    if (isNotAccessibleExceptBg(color)) return;
    const css = `.color-${color}-on-hover:hover, .color-${color}-on-active.is-active, .color-${color}-on-active.is-active:hover { color: var(--${color}) !important; }`;
    append(`color-${color}-on-hover`, css);
    append(`color-${color}-on-active`, css);
  });

  colorsFor(resolved, 'hoverBorder').forEach(color => {
    if (isNotAccessibleExceptBg(color)) return;
    const css = `.border--${color}-on-hover:hover, .border--${color}-on-active.is-active, .border--${color}-on-active.is-active:hover { border-color: var(--${color}) !important; }`;
    append(`border--${color}-on-hover`, css);
    append(`border--${color}-on-active`, css);
  });

  return {
    rules: order.map(className => [
      new RegExp(`^${escapeRegex(className)}$`),
      () => cssByClass[className]
    ]),
    safelist: order.slice(),
    preflight: '.btn.btn--stroke { background-color: transparent; }'
  };
}

module.exports = { colorRules };
