const formKey = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(formKey);

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData = {
    email: parsedData.email || '',
    message: parsedData.message || '',
  };

  formEl.elements.email.value = formData.email;
  formEl.elements.message.value = formData.message;
}

formEl.addEventListener('input', event => {
  const { name, value } = event.target;

  formData[name] = value.trim();
  localStorage.setItem(formKey, JSON.stringify(formData));
});

formEl.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(formKey);

  formData = {
    email: '',
    message: '',
  };

  formEl.reset();
});

