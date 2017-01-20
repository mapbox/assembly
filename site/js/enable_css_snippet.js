(function () {
  document.addEventListener('click', function (event) {
    if (!event.target.getAttribute('data-css-snippet-button')) return;
    var codeElement = event.target.nextElementSibling;
    if (!codeElement) throw new Error('No code element found');
    if (codeElement.classList.contains('none')) {
      event.target.textContent = 'Hide CSS';
      codeElement.classList.remove('none');
    } else {
      event.target.textContent = 'Show CSS';
      codeElement.classList.add('none');
    }
  });
}());
