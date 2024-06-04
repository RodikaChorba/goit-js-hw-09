const savedFormData = localStorage.getItem('feedback-form-state');

if (savedFormData) {
  const { email, message } = JSON.parse(savedFormData);

  document.querySelector('[name="email"]').value = email;
  document.querySelector('[name="message"]').value = message;

  formData.email = email;
  formData.message = message;
}

const loginForm = document.querySelector('.feedback-form');

let formData = { email: '', message: '' };

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { elements } = event.currentTarget;
  const email = elements.email.value.trim();
  const message = elements.message.value.trim();

  const formData = { email, message };

  console.log(formData);

  event.currentTarget.reset();
}

loginForm.addEventListener(`input`, handleInput);
function handleInput(event) {
  const { elements } = event.currentTarget;
  const email = elements.email.value.trim();
  const message = elements.message.value.trim();
  formData = { email, message };
  console.log(formData);
  localStorage.setItem(`feedback-form-state`, JSON.stringify(formData));
}

document.querySelector('.feedback-form').addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email && formData.message) {
    console.log('Form data:', formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    document.querySelector('[name="email"]').value = '';
    document.querySelector('[name="message"]').value = '';
  } else {
    alert('Fill please all fields');
  }
});
