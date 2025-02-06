document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const infoCard = document.getElementById('infoCard');

    const registeredEmails = ['user1@example.com', 'user2@example.com'];
    const registeredPhones = ['123456789', '987654321'];

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const phone = document.getElementById('phone');
        const message = document.getElementById('message');

        let valid = true;

        if(name.value.trim() === '') {
            setError(name, 'Name is required');
            valid = false;
        } else {
            clearError(name)
        }

        if(!validateEmail(email.value)) {
            setError(email, 'Email is required');
            valid = false;
        } else if(registeredEmails.includes(email.value)){
            setError(email, 'The email is already registered');
            valid = false
        } else {
            clearError(email)
        }

        if(!validatePhone(phone.value)) {
            setError(phone, 'Phone is required')
        } else if(registeredPhones.includes(phone.value)) {
            setError(phone, 'The number is already registered');
            valid = false
        } else {
            clearError(phone)
        }
        
        if(message.value.trim() === '') {
            setError(message, 'Message is valid')
        } else {
            clearError(message)
        }

        if (valid) {
            simulateAjaxRequest({
                name: name.value,
                email: email.value,
                password: password.value,
                phone: phone.value,
                message: message.value,
            });

            registeredEmails.push(email.value)
            registeredPhones.push(phone.value)

        }
    })

    function setError(element, message) {
        const errorMessage = element.nextElementSibling;
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }   

    function clearError(element) {
        const errorMessage = element.nextElementSibling;
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
    }

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
        return emailPattern.test(email)
    }

    function validatePhone(phone) {
        const phonePattern = /^[0-9]{9}$/
        return phonePattern.test(phone)
    }

    function simulateAjaxRequest(data) {
        setTimeout(() => {
            document.getElementById('cardName').textContent = data.name;
            document.getElementById('cardEmail').textContent = data.email;
            document.getElementById('cardPassword').textContent = data.password
            document.getElementById('cardPhone').textContent = data.phone;
            document.getElementById('cardMessage').textContent = data.message;

            infoCard.classList.remove('hidden')
            infoCard.classList.add('show')

            console.log('Datos enviados correctamente', data)
        }, 2000)  
    }

})

