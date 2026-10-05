import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const {
  ALL_COLORS,
  isNotAccessibleForButtons,
  isNotAccessibleForForms
} = require('../../../src/preset/color-utils.js');

export default {
  load() {
    return {
      all: ALL_COLORS,
      button: ALL_COLORS.filter(color => !isNotAccessibleForButtons(color)),
      form: ALL_COLORS.filter(color => !isNotAccessibleForForms(color))
    };
  }
};
