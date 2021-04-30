var showModalButtonEl = document.getElementById('open-modal');
var hideModalButtonEl = document.getElementById('close-modal');
var modal = document.querySelector('.modal-container');

showModalButtonEl.addEventListener('click', handleShowClick);

function handleShowClick() {
  modal.classList.remove('hidden');
  document.body.style.backgroundColor = '#333';
}

hideModalButtonEl.addEventListener('click', handleHideClick);

function handleHideClick() {
  modal.classList.add('hidden');
  document.body.style.backgroundColor = '#ffff';
}
