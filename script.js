document.addEventListener('DOMContentLoaded', function () {
    // Select animation elements
    const word1 = document.getElementById('word1');
    const word2 = document.getElementById('word2');
    const word3 = document.getElementById('word3');
    const word4 = document.getElementById('word4');
    const finalText = document.getElementById('final-text');
    const logo = document.getElementById('logo');
    const formContainer = document.getElementById('formContainer');

    // Animation Timings
    setTimeout(() => {
        word1.classList.add('fade-in'); // National fades in
    }, 500);

    setTimeout(() => {
        word2.classList.add('pull-up'); // Management pulls up
    }, 2000);

    setTimeout(() => {
        word3.classList.add('pull-up'); // Legal pulls up
    }, 3500);

    setTimeout(() => {
        word4.classList.add('pull-up'); // Counsel pulls up
    }, 5000);

    setTimeout(() => {
        finalText.classList.add('shrink'); // Shrinks into National Counsel
    }, 6500);

    setTimeout(() => {
        logo.classList.remove('hidden'); // Logo fades in
        logo.classList.add('fade-in-logo');
    }, 8000);

    setTimeout(() => {
        // Fade out animation
        document.querySelector('.animation-container').style.display = 'none';
        formContainer.classList.remove('hidden'); // Show the form
    }, 9500);
    
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