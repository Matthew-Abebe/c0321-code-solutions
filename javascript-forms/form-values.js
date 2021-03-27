var contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event, obj) {
  event.preventDefault();

  var name = contactForm.elements.name.value;
  var email = contactForm.elements.email.value;
  var message = contactForm.elements.message.value;

  var controlFormsObj = {
    user_name: name,
    user_email: email,
    user_message: message
  };

  contactForm.reset();

  console.log(controlFormsObj);
}
