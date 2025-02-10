document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const formCard = document.getElementById('formCard');
    const infoCard = document.getElementById('infoCard');

    const registeredEmails = ['user1@example.com', 'user2@example.com'];
    const registeredPhones = ['123456789', '987654321'];

    function validateField(element, condition, errorMessage) {
        if (condition) {
            setError(element, errorMessage);
            return false;
        } else {
            clearError(element);
            return true;
        }
    }

    function setError(element, errorMessage) {
        const errorSpan = element.nextElementSibling;
        errorSpan.textContent = errorMessage;
        errorSpan.style.display = 'block';
        element.classList.add('error');
    }

    function clearError(element) {
        const errorSpan = element.nextElementSibling;
        errorSpan.textContent = '';
        errorSpan.style.display = 'none';
        element.classList.remove('error');
    }

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validatePassword(password) {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordPattern.test(password)
    }

    function validatePhone(phone) {
        const phonePattern = /^\d{9}$/;
        return phonePattern.test(phone);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const phone = document.getElementById('phone');
        const message = document.getElementById('message');

        let valid = true;

        valid = validateField(name, name.value.trim() === '', 'Name is required') && valid;
        valid = validateField(email, !validateEmail(email.value), 'Invalid email format') && valid;
        valid = validateField(email, registeredEmails.includes(email.value), 'Email already registered') && valid;
        valid = validateField(password, password.value.length < 8, 'Password must be at least 6 characters') && valid;
        valid = validateField(password, !validatePassword(password.value), 'Invalid password format') && valid;
        valid = validateField(phone, !validatePhone(phone.value), 'Invalid phone format') && valid;
        valid = validateField(phone, registeredPhones.includes(phone.value), 'Phone number already registered') && valid;
        valid = validateField(message, message.value.trim() === '', 'Message is required') && valid;

        if(!valid) {
            form.reset
        }


        if (valid) {
            simulateAjaxRequest({
                name: name.value,
                email: email.value,
                password: password.value,
                phone: phone.value,
                message: message.value,
            });

            registeredEmails.push(email.value);
            registeredPhones.push(phone.value);

            form.reset();
        }
    });


    function simulateAjaxRequest(data) {
        setTimeout(() => {
            document.getElementById('cardName').textContent = data.name;
            document.getElementById('cardEmail').textContent = data.email;
            document.getElementById('cardPassword').textContent = data.password;
            document.getElementById('cardPhone').textContent = data.phone;
            document.getElementById('cardMessage').textContent = data.message;

            formCard.classList.add('hidden');
            infoCard.classList.remove('hidden');
            infoCard.classList.add('show');

            console.log('Datos enviados correctamente', data);
        }, 1000);
    }
});