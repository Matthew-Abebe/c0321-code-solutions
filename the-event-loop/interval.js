var count = 3;
var timerId = null;

console.log(count);

function countdown() {
  count--;
  console.log(count);
  if (count <= 1) {
    clearInterval(timerId);
    console.log('Blast off!');
  }
}

timerId = setInterval(countdown, 1000);
