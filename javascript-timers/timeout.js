var message = document.querySelector('h1');

function addMessage() {
  message.innerHTML = 'Hello There';
}

window.setTimeout(addMessage, 2 * 1000);
