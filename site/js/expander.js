// 	event handlers on each button
//	on click hide elem, show all

const buttons = document.querySelectorAll('button');

let i;
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    let classId = this.id.replace('button-', '');
    document.getElementById('expanded-' + classId).className = '';
    document.getElementById('collapsed-' + classId).className = 'none';
  });
}
