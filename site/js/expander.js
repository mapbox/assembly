// 	event handlers on each button
//	on click hide elem, show all

const buttons = document.querySelectorAll('button[id^="expandButton-"]');
let i;

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {

    const classId = this.id.replace('expandButton-', '');
    const expanded = document.getElementById('expanded-' + classId);
    const collapsed = document.getElementById('collapsed-' + classId);

    if (expanded.className === 'none') {
      expanded.className = 'inline';
      collapsed.className = 'none';
      this.textContent = 'See fewer';
    } else if (expanded.className === 'inline') {
      expanded.className = 'none';
      collapsed.className = 'inline';
      this.textContent = 'See all';
    }

  });
}
