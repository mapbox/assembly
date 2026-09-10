import {
  ALL_COLORS,
  isNotAccessibleExceptBg,
  isNotAccessibleForButtons,
  isNotAccessibleForForms
} from '../../../src/preset/color-utils.js';
import scales from '../../../src/scales.json';

function colorNames(kind) {
  if (kind === 'color') {
    return ALL_COLORS.filter(color => !isNotAccessibleExceptBg(color)).concat([
      'text'
    ]);
  }
  return ALL_COLORS.slice();
}

function scaleToken(value) {
  if (Array.isArray(value)) {
    return String(value[0]).replace(/\\/g, '');
  }
  return String(value).replace(/\\/g, '');
}

function buttonColors() {
  return ALL_COLORS.filter(color => !isNotAccessibleForButtons(color));
}

function formColors() {
  return ALL_COLORS.filter(color => !isNotAccessibleForForms(color));
}

export {
  ALL_COLORS,
  scales,
  colorNames,
  scaleToken,
  buttonColors,
  formColors,
  isNotAccessibleForButtons,
  isNotAccessibleForForms,
  isNotAccessibleExceptBg
};
