// 	event handlers on each button
//	on click hide elem, show all

const buttons = document.querySelectorAll('button');

let i;

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {

    const classId = this.id.replace('button-', '');
  	const expanded = document.getElementById('expanded-' + classId);
  	const collapsed = document.getElementById('collapsed-' + classId);

  	if (expanded.className === 'none') {
  	  expanded.className = 'inline';
      collapsed.className = 'none';
  	  this.textContent = 'see fewer';
  	} else if (expanded.className === 'inline') {
  	  expanded.className = 'none';
      collapsed.className = 'inline';
  	  this.textContent = 'see all';
    }

  });
}
