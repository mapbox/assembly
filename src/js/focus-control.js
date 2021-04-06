(function() {
  var Assembly = (window.Assembly = window.Assembly || {});
  var on = false;
  var attributeName = 'data-assembly-focus-control';
  document.documentElement.setAttribute(attributeName, 'not-visible');

  function enable() {
    if (on === true) return;
    on = true;
    document.documentElement.setAttribute(attributeName, 'visible');
  }
  function disable() {
    if (on === false) return;
    on = false;
    document.documentElement.setAttribute(attributeName, 'not-visible');
  }

  // Listeners
  document.addEventListener('mousedown', function() {
    disable();
  });
  document.addEventListener('keydown', function(event) {
    if (event.key !== 'Tab' && event.keyCode !== 9) return;
    enable();
  });

  // Imperative API
  Assembly.setFocusState = function(value) {
    if (value === undefined) value = !on;
    value ? enable() : disable();
  };
})();
