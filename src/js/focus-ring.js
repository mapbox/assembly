/* eslint-disable */
(function () {
  document.documentElement.classList.add('focus-control');
  var activeClass = 'focus-control--visible';
  var on = false;
  document.addEventListener('mousedown', function () {
    if (on === false) return;
    on = false;
    document.documentElement.classList.remove(activeClass);
  });
  document.addEventListener('keydown', function (event) {
    if (on === true) return;
    if (event.key !== 'Tab' && event.keyCode !== 9) return;
    on = true;
    document.documentElement.classList.add(activeClass);
  });
}());
