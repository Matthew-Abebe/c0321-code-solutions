var taskList = document.querySelector('.task-list');

taskList.addEventListener('click', handleClick);

function handleClick(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);

  console.log(event.target.closest('.task-list-item'));

  var closestEl = event.target.closest('.task-list-item');
  closestEl.remove();
}
