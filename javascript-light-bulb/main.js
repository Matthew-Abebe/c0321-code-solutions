var button = document.getElementById('light-bulb');
var background = document.querySelector('body');
var isBulbOn;

button.addEventListener('click', handleClick);

function handleClick(event) {

  isBulbOn = !isBulbOn;
  if (isBulbOn === true) {
    button.className = 'light-on';
    background.className = 'background-light-on';
  }
  if (isBulbOn === false) {
    button.className = 'light-off';
    background.className = 'background-light-off';
  }
}
