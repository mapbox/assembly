// 	event handlers on each button
//	on click hide elem, show all

var buttons = document.querySelectorAll('button');

for (i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function() {
		var classId = this.id.replace('button-','');
		document.getElementById('expanded-' + classId).className = '';
		document.getElementById('collapsed-' + classId).className = 'none';
	});
};