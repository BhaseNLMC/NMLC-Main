document.addEventListener('DOMContentLoaded', function () {
    // Select elements
    const word1 = document.getElementById('word1');
    const word2 = document.getElementById('word2');
    const word3 = document.getElementById('word3');
    const word4 = document.getElementById('word4');
    const finalText = document.getElementById('final-text');
    const logo = document.getElementById('logo');
    const formContainer = document.getElementById('formContainer');

    // Animation Sequence
    setTimeout(() => {
        word1.classList.add('fade-in'); // "National" fades in
    }, 500);

    setTimeout(() => {
        word1.style.display = 'none'; // Hide "National"
        word2.classList.remove('hidden'); // Show "Management"
        word2.classList.add('pull-up'); // "Management" pulls up
    }, 2000);

    setTimeout(() => {
        word2.style.display = 'none'; // Hide "Management"
        word3.classList.remove('hidden'); // Show "Legal"
        word3.classList.add('pull-up'); // "Legal" pulls up
    }, 3500);

    setTimeout(() => {
        word3.style.display = 'none'; // Hide "Legal"
        word4.classList.remove('hidden'); // Show "Counsel"
        word4.classList.add('pull-up'); // "Counsel" pulls up
    }, 5000);

    setTimeout(() => {
        word4.style.display = 'none'; // Hide "Counsel"
        finalText.classList.remove('hidden'); // Show "National Counsel"
        finalText.classList.add('shrink'); // Shrink animation
    }, 6500);

    setTimeout(() => {
        logo.classList.remove('hidden'); // Logo fades in
        logo.classList.add('fade-in-logo');
    }, 8000);

    setTimeout(() => {
        // Hide the animation container and show the form
        document.querySelector('.animation-container').style.display = 'none';
        formContainer.classList.remove('hidden'); // Reveal the form
    }, 9500);
});
