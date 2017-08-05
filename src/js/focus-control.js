(function() {
  var attributeName = 'data-assembly-focus-control';
  document.documentElement.setAttribute(attributeName, 'not-visible');
  var on = false;
  document.addEventListener('mousedown', function() {
    if (on === false) return;
    on = false;
    document.documentElement.setAttribute(attributeName, 'not-visible');
  });
  document.addEventListener('keydown', function(event) {
    if (on === true) return;
    if (event.key !== 'Tab' && event.keyCode !== 9) return;
    on = true;
    document.documentElement.setAttribute(attributeName, 'visible');
  });
})();
