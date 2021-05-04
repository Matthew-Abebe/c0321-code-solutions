document.addEventListener('keydown', handleKeydown);

var index = 0;
function handleKeydown(event) {
  var characters = document.querySelectorAll('span');
  var characterPressed = event;

  if (characterPressed.key === characters[index].textContent) {
    characters[index].style.color = ('green');
    characters[index].className = ('active');
    characters[index + 1].className = ('next-letter');
    index++;
    console.log(index);
  } else if (characterPressed.key !== characters[index].textContent) {
    characters[index].style.color = ('red');
  }
}
