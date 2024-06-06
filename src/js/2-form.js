const loginForm = document.querySelector('.feedback-form');

let formData = { email: '', message: '' };

const savedFormData = localStorage.getItem('feedback-form-state');

if (savedFormData) {
  const { email, message } = JSON.parse(savedFormData);

  document.querySelector('[name="email"]').value = email;
  document.querySelector('[name="message"]').value = message;

  formData.email = email;
  formData.message = message;
}

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { elements } = event.currentTarget;
  const email = elements.email.value.trim();
  const message = elements.message.value.trim();

  formData = { email, message };

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
}

loginForm.addEventListener(`input`, handleInput);
function handleInput(event) {
  const { elements } = event.currentTarget;
  const email = elements.email.value.trim();
  const message = elements.message.value.trim();
  formData = { email, message };
  localStorage.setItem(`feedback-form-state`, JSON.stringify(formData));
}
