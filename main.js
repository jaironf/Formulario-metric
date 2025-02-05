document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const infoCard = document.getElementById('infoCard');

    const registeredEmails = ['user1@example.com', 'user2@example.com'];
    const registeredPhones = ['123456789', '987654321'];

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').Value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

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


    })
})
