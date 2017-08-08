// 	'See All' button event handlers on Documentation page
//	on click hide elem, show all

document.addEventListener('click', e => {
  if (e.target.getAttribute('data-button-expand')) {
    if (e.target.parentNode.children[0].classList.contains('none')) {
      e.target.textContent = 'See fewer';
    } else {
      e.target.textContent = 'See all';
    }
    e.target.parentNode.children[0].classList.toggle('none');
    e.target.parentNode.children[1].classList.toggle('none');
  }
});
