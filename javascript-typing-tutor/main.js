
document.addEventListener('keydown', handleKeydown);

function handleKeydown(event) {
  var index = 0;
  var characters = document.querySelectorAll('span');
  var characterPressed = event;

  if (characterPressed.key === characters[index].textContent) {
    characters[0].style.color = ('green');
    index++;
  } else {
    characters[0].style.color = ('red');
  }

  if (characterPressed.key === characters[index].textContent) {
    characters[1].style.color = ('green');
    index++;
  } else {
    characters[1].style.color = ('red');
  }

}
