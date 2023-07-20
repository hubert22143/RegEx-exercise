document.addEventListener("DOMContentLoaded", () => {
    const RegistrationValidation = document.querySelectorAll('input');
  
    const ValidationPatterns = {
        username:/^\w{5,9}$/,
        password:/^(?=(.*[A-Z]){1})\w{5,15}(([0-9]{5}))([!@#$%^&*]+)?$/,
        email:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    }
  
    RegistrationValidation.forEach((input) => {
        input.addEventListener('keyup', (e) => {
            const inputName = e.target.attributes.name.value;
            const inputValue = e.target.value;
            const pattern = ValidationPatterns[inputName];
            const isValid = pattern.test(inputValue);
  
            if (ValidationPatterns.hasOwnProperty(inputName)) {
                if (isValid) {
                    e.target.classList.remove('invalid');
                    e.target.classList.add('valid');
                } else {
                    e.target.classList.remove('valid');
                    e.target.classList.add('invalid');
                }
            } else {
                console.log(`Validation pattern not found for ${inputName}`);
            }
        });
    });
});