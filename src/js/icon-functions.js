(function() {
  var Assembly = (window.Assembly = window.Assembly || {});
  var svgNS = 'http://www.w3.org/2000/svg';
  var xlinkNS = 'http://www.w3.org/1999/xlink';

  Assembly.iconExists = function(iconName) {
    return new RegExp('id=[\'"]icon-' + iconName + '[\'"]').test(
      Assembly._svgSprite
    );
  };

  function assertIcon(iconName) {
    if (!Assembly.iconExists(iconName))
      throw new Error('Icon "' + iconName + '" does not exist');
  }

  Assembly.createIcon = function(iconName) {
    assertIcon(iconName);
    var svg = document.createElementNS(svgNS, 'svg');
    svg.setAttributeNS(null, 'class', 'icon');
    var use = document.createElementNS(svgNS, 'use');
    use.setAttributeNS(xlinkNS, 'xlink:href', '#icon-' + iconName);
    svg.appendChild(use);
    return svg;
  };

  Assembly.changeIcon = function(iconEl, iconName) {
    assertIcon(iconName);
    iconEl.firstChild.setAttributeNS(
      xlinkNS,
      'xlink:href',
      '#icon-' + iconName
    );
    return iconEl;
  };
})();
