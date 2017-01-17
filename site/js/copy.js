/* global Clipboard */
/* eslint-disable prefer-arrow-callback */
const clipboard = new Clipboard('button[data-clipboard-text]');
clipboard.on('success', function (ev) {
  ev.trigger.textContent = 'Copied!';
  window.setTimeout(function () {
    ev.trigger.textContent = 'Copy';
  }, 800);
});
