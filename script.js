document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('multiStepForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page reload

        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value,
        };

        // Send form data to the server
        fetch('https://nmlc-main.onrender.com/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(async (response) => {
                if (response.ok) {
                    const data = await response.json();
                    alert(data.message); // Show success message
                } else {
                    const errorData = await response.json();
                    alert(`Failed to send email: ${errorData.message}`);
                }
            })
            .catch((error) => {
                console.error('Error submitting form:', error);
                alert('An error occurred while submitting the form.');
            });
    });
    function showForm() {
        const formContainer = document.getElementById('formContainer');
        const startPage = document.querySelector('.start-page');
    
        // Hide the start page
        startPage.style.display = 'none';
    
        // Show the form container
        formContainer.classList.remove('hidden');
        formContainer.style.animation = 'fadeIn 1s forwards'; // Optional fade-in animation
    }
});