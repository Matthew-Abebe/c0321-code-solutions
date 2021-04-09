var number = document.querySelector('h1');
var timerID = null;
var counter = 4;

function updateHeader() {
  counter--;
  if (counter > 0) {
    number.textContent = counter;
  } else {
    number.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timerID);
  }
}

timerID = setInterval(updateHeader, 1000);
