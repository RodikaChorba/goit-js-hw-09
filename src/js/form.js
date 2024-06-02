console.log(`Task-4`);

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const { elements } = event.currentTarget;
    const email = elements.email.value.trim();
    const password = elements.password.value.trim();

    if (!email || !password) {
        alert('All form fields must be filled in');
        return;
    }

    const formData = { email, password };

    console.log(formData);

    event.currentTarget.reset();
}
