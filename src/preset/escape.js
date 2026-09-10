'use strict';

function escapeSelector(str) {
  return str.replace(/[^a-zA-Z0-9_-]/g, ch => `\\${ch}`);
}

function toEscapedSelector(raw) {
  return `.${escapeSelector(raw)}`;
}

module.exports = {
  escapeSelector,
  toEscapedSelector
};
