document.addEventListener('DOMContentLoaded', () => {
    const noteButtons = document.querySelectorAll('button');

    noteButtons.forEach(button => {
        button.addEventListener('click', function() {
            playSound(this.getAttribute('data-note'));
        });
    });
});

function playSound(note) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine'; // You can change this to 'square', 'sawtooth', or 'triangle' for different sounds
    
    // Frequency values for each note
    const frequencies = {
        'G3#': 207.65,
        'B3': 246.94,
        'E4': 329.63,
        'F4#': 369.99,
        'G4#': 415.30,
        // Add more notes as needed
    };

    oscillator.frequency.value = frequencies[note]; // Set frequency
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 1); // Play note for 1 second
}

