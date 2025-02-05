document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const infoCard = document.getElementById('infoCard');


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
        } else {
            clearError(email)
        }

        if(!validatePhone(phone.value)) {
            setError(phone, 'Phone is required')
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
