import {
  ALL_COLORS,
  isNotAccessibleForButtons,
  isNotAccessibleForForms
} from '../../../src/preset/color-utils.js';
import scales from '../../../src/scales.json';

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

export { ALL_COLORS, scales, scaleToken, buttonColors, formColors };
