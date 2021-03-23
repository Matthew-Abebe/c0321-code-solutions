var userClicks = 0;
var button = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

button.addEventListener('click', function () {
  clickCount = userClicks;
  return (clickCount);
});
