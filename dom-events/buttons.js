var button = document.querySelector('.click-button');
button.addEventListener('click', handleClick);

function handleClick(event) {
  console.log('button clicked');
  console.log('event: ', event);
  console.log('eventTarget: ', event.target);
}

var hoverButton = document.querySelector('.hover-button');
hoverButton.addEventListener('mouseover', handleMouseOver);

function handleMouseOver(event) {
  console.log('button hovered');
  console.log('event: ', event);
  console.log('eventTarget: ', event.target);
}

var doubleClickButton = document.querySelector('.double-click-button');
doubleClickButton.addEventListener('dblclick', handleDoubleClick);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event: ', event);
  console.log('eventTarget: ', event.target);
}
