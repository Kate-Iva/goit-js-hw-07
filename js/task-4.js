'use strict';
const form = document.querySelector('.login-form');
const handlerSubmit = event => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    if (Object.values(data).some(value => value.trim())) {
        alert('All form fields must be filled in');
    } else {
        console.log(data);
        form.reset();
    }
}
form.addEventListener('submit', handlerSubmit);