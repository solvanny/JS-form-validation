const form = document.querySelector('.formWithValidation');
const fields = form.querySelectorAll('.field');

// Generate error
const generateError = (text) => {
    let error = document.createElement('div');
    error.className = 'error';
    error.innerHTML = text;
    error.style.color = 'red';
    return error;
};

// Remove errors
const removeErrors = () => {
    let errors = form.querySelectorAll('.error');
    for (let i = 0; i<errors.length; i++){
        errors[i].remove();
    }
};

// Error if field or fields are blank
const fieldsBlankError = () => {
    for (let i = 0; i<fields.length; i++) {
        if(!fields[i].value){
            let error = generateError('Cannot be blank');
            form[i].parentElement.insertBefore(error, fields[i]);
        }     
    };
};

// Error if password does not match
const passwordConf = () => {
    let password = form.querySelector('.password');
    let passwordConfirmation = form.querySelector('.passwordConfirmation');
    if(password.value !== passwordConfirmation.value) {
        let error = generateError('Password does not match');
        passwordConfirmation.parentElement.insertBefore(error, passwordConfirmation);
    }
};

// Form validation
form.addEventListener('submit', event => {
    event.preventDefault();
    removeErrors();
    fieldsBlankError();
    passwordConf();
});

