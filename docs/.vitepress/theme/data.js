import { data as colors } from './colors.data.js';
import scales from '../../../src/scales.json';

function scaleToken(value) {
  if (Array.isArray(value)) {
    return String(value[0]).replace(/\\/g, '');
  }
  return String(value).replace(/\\/g, '');
}

const ALL_COLORS = colors.all;
const buttonColors = colors.button;
const formColors = colors.form;

export { ALL_COLORS, scales, scaleToken, buttonColors, formColors };
