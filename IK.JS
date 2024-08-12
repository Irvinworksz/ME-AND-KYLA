document.addEventListener('DOMContentLoaded', function() {
    const revealButton = document.getElementById('revealButton');
    const hiddenImage = document.getElementById('hiddenImage');
    const audio = document.getElementById('audio');

    revealButton.addEventListener('click', function() {
        // Remove the 'hidden' class and add 'show' class to fade in the image
        hiddenImage.classList.remove('hidden');
        hiddenImage.classList.add('show');
        
        // Play the audio
        audio.play();
        
        // Trigger bubble effect
        revealButton.classList.add('clicked');
        
        // Remove the 'clicked' class after animation duration
        setTimeout(() => {
            revealButton.classList.remove('clicked');
        }, 500); // Matches the duration of the bubble effect
    });
});
