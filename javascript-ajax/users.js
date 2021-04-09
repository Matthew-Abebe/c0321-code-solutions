var userList = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send();

xhr.responseType = 'json';

xhr.addEventListener('load', handleLoad);

function handleLoad(event) {
  console.log('xhr status: ', xhr.status);
  console.log('xhr response: ', xhr.response);

  for (var i = 0; i < xhr.response.length; i++) {
    console.log(xhr.response[i]);
    var names = document.createElement('li');
    names.textContent = xhr.response[i].name;
    userList.appendChild(names);
  }
}
