var userNameInput = document.querySelector('input[name = "name"]');
var userEmailInput = document.querySelector('input[name = "email"]');
var userMessageTextArea = document.querySelector('textarea[name = "message"]');

userNameInput.addEventListener('focus', handleFocus);
userNameInput.addEventListener('blur', handleBlur);
userNameInput.addEventListener('input', handleInput);
userEmailInput.addEventListener('focus', handleFocus);
userEmailInput.addEventListener('blur', handleBlur);
userEmailInput.addEventListener('input', handleInput);
userMessageTextArea.addEventListener('focus', handleFocus);
userMessageTextArea.addEventListener('blur', handleBlur);

function handleFocus(event) {
  console.log('focus event has fired!');
  console.log('event target name: ', event.target.name);
}

function handleBlur(event) {
  console.log('blur event has fired!');
  console.log('event target name: ', event.target.name);
}

function handleInput(event) {
  console.log('event target name: ', event.target.name);
  console.log('event target value: ', event.target.value);
}
