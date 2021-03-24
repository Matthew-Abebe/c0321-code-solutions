var button = document.getElementById('light-bulb');
var background = document.querySelector('body');

button.addEventListener('click', handleClick);
button.addEventListener('dblclick', handleDoubleClick);

function handleClick(event) {
  button.className = 'light-on';
  background.className = 'background-light-on';

}

function handleDoubleClick(event) {
  button.className = 'light-off';
  background.className = 'background-light-off';
}
