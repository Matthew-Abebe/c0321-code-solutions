
document.addEventListener('keydown', handleKeydown);

function handleKeydown(event) {
  var currentIndex = 0;
  var character = document.getElementById('g');
  var characterPressed = event;

  console.log(character);
  console.log(characterPressed);

  if (character === characterPressed) {
    console.log('its a match');
  }
}
