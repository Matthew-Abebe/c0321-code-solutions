var showModalButtonEl = document.getElementById('open-modal');
var hideModalButtonEl = document.getElementById('close-modal');
var backdrop = document.querySelector('.backdrop');

showModalButtonEl.addEventListener('click', handleShowClick);

function handleShowClick() {
  backdrop.classList.remove('hidden');
}

hideModalButtonEl.addEventListener('click', handleHideClick);

function handleHideClick() {
  backdrop.classList.add('hidden');
}
