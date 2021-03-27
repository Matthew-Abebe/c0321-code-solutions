var $tabContainer = document.querySelector('.tab-container');
var $tabElements = document.querySelectorAll('.tab');
var $viewElements = document.querySelectorAll('.view');

function handleClick(event) {
  if (!event.target.matches('.tab')) {
    return;
  }

  for (var i = 0; i < $tabElements.length; i++) {
    if ($tabElements[i] === event.target) {
      $tabElements[i].className = 'tab active';
    } else {
      $tabElements[i].className = 'tab';
    }
  }

  var dataView = event.target.getAttribute('data-view');

  for (var k = 0; k < $viewElements.length; k++) {
    if ($viewElements[k].getAttribute('data-view') === dataView) {
      $viewElements[k].className = 'view';
    } else {
      $viewElements[k].className = 'view hidden';
    }
  }

}

$tabContainer.addEventListener('click', handleClick);
