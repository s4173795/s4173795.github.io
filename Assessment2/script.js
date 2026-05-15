const audio = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const volumeSlider = document.getElementById('volume');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const timerButtons = document.querySelectorAll('.timer-btn');
const timerDisplay = document.getElementById('timer-display');
const themeToggle = document.getElementById('theme-toggle');

let isPlaying = false;

/*
Clear play and pause feedback helps users understand
the current state of the media player.
*/

async function playMusic() {
    
    try {

        /*
        audio.play() returns a promise in modern browsers.
        Using await improves reliability and prevents playback
        errors when users interact with the play button.
        */

        await audio.play();

        isPlaying = true;

        // Update button icon so users can clearly see playback state.
        playBtn.innerHTML = '⏸';

        // Visual feedback shows the player is currently active.
        playBtn.classList.add('playing');

    }
    catch(error) {
        console.log('Playback failed:', error);
    }
}

function pauseMusic() {

    isPlaying = false;
    audio.pause();

    // Reset button icon when audio is paused.
    playBtn.innerHTML = '▶';

    // Remove active playback styling.
    playBtn.classList.remove('playing');
}

playBtn.addEventListener('click', () => {

    if(isPlaying) {
        pauseMusic();
    }
    else {
        playMusic();
    }
});

/*
//The progress bar provides real-time feedback so users can understand how much of the track has played.
*/

function updateProgress(e) {

    const { duration, currentTime } = e.srcElement;

    const progressPercent = (currentTime / duration) * 100;

    progress.style.width = `${progressPercent}%`;

    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);

    if(durationSeconds < 10) {
        durationSeconds = `0${durationSeconds}`;
    }

    if(durationSeconds) {
        durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }

    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);

    if(currentSeconds < 10) {
        currentSeconds = `0${currentSeconds}`;
    }

    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
}

audio.addEventListener('timeupdate', updateProgress);


//Users can click anywhere on the progress bar to seekthrough the audio track quickly.


function setProgress(e) {

    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

progressContainer.addEventListener('click', setProgress);

/*
Volume control improves usability by allowing users
to adapt the sound level to different environments.
*/

volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
});


//The focus timer was designed specifically for