// This file contains JavaScript code that handles the cartoon animations for the advanced friendship animation project.

document.addEventListener("DOMContentLoaded", function() {
    const cartoonContainer = document.createElement('div');
    cartoonContainer.classList.add('cartoon-container');
    document.body.appendChild(cartoonContainer);

    // Create a cartoon character
    const character = document.createElement('div');
    character.classList.add('cartoon-character');
    cartoonContainer.appendChild(character);

    // Create a speech bubble
    const speechBubble = document.createElement('div');
    speechBubble.classList.add('speech-bubble');
    speechBubble.innerText = "You're the best friend ever!";
    cartoonContainer.appendChild(speechBubble);

    // Animation for the cartoon character
    function animateCharacter() {
        character.classList.add('animate');
        setTimeout(() => {
            character.classList.remove('animate');
        }, 2000);
    }

    // Animation for the speech bubble
    function showSpeechBubble() {
        speechBubble.classList.add('show');
        setTimeout(() => {
            speechBubble.classList.remove('show');
        }, 3000);
    }

    // Trigger animations on load
    animateCharacter();
    showSpeechBubble();

    // Optional: Repeat animations every few seconds
    setInterval(() => {
        animateCharacter();
        showSpeechBubble();
    }, 5000);
});