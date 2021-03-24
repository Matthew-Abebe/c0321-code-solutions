var contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event, obj) {
  event.preventDefault();

  var controlFormsObj = {
    user_name: contactForm.name.value,
    user_email: contactForm.email.value,
    user_message: contactForm.message.value
  };

  contactForm.reset();

  console.log(controlFormsObj);
}
