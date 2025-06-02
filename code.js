const songs = [
  {
    audio: 'audio files/placeholderAudioFileName1.mp3',
    image: 'image files/placeholderImageFileName1.jpg',
    text: 'placeholder text one'
  },
  {
    audio: 'audio files/placeholderAudioFileName2.mp3',
    image: 'image files/placeholderImageFileName2.jpg',
    text: 'placeholder text two'
  },
  {
    audio: 'audio files/placeholderAudioFileName3.mp3',
    image: 'image files/placeholderImageFileName3.jpg',
    text: 'placeholder text three'
  },
  {
    audio: 'audio files/placeholderAudioFileName4.mp3',
    image: 'image files/placeholderImageFileName4.jpg',
    text: 'placeholder text four'
  },
  {
    audio: 'audio files/placeholderAudioFileName5.mp3',
    image: 'image files/placeholderImageFileName5.jpg',
    text: 'placeholder text five'
  },
  {
    audio: 'audio files/placeholderAudioFileName6.mp3',
    image: 'image files/placeholderImageFileName6.jpg',
    text: 'placeholder text six'
  },
  {
    audio: 'audio files/placeholderAudioFileName7.mp3',
    image: 'image files/placeholderImageFileName7.jpg',
    text: 'placeholder text seven'
  },
  {
    audio: 'audio files/placeholderAudioFileName8.mp3',
    image: 'image files/placeholderImageFileName8.jpg',
    text: 'placeholder text eight'
  },
  {
    audio: 'audio files/placeholderAudioFileName9.mp3',
    image: 'image files/placeholderImageFileName9.jpg',
    text: 'placeholder text nine'
  },
  {
    audio: 'audio files/placeholderAudioFileName0.mp3',
    image: 'image files/placeholderImageFileName0.jpg',
    text: 'placeholder text ten'
  }
];

const imgDisplay = document.getElementById('audioImage');
const audioElem = document.getElementById('audioElement');
const audioSrc = document.getElementById('audioSource');
const textElem = document.getElementById('textElement');

const backButton = document.getElementById('backButton');
const forwardButton = document.getElementById('forwardButton');
const playPauseButton = document.getElementById('playPauseButton');
const playIcon = document.getElementById('playIcon');

const songSelector = document.getElementById('songSelector');

var currentSongIndex = 0;

// Load last saved song from localStorage
window.addEventListener('DOMContentLoaded', () => {
  const savedSongIndex = parseInt(localStorage.getItem('selectedSong'));
  if (!isNaN(savedSongIndex) && savedSongIndex >= 0 && savedSongIndex < songs.length) {
    currentSongIndex = savedSongIndex;
  }

  songSelector.value = currentSongIndex;
  loadSong(currentSongIndex);
  updatePlayIcon();
});

// Load song details but do NOT autoplay
function loadSong(index) {
  const song = songs[index];
  imgDisplay.src = song.image;
  audioSrc.src = song.audio;
  textElem.textContent = song.text;
  audioElem.load();
  updatePlayIcon();
}

// Play / Pause toggle
playPauseButton.addEventListener('click', () => {
  if (audioElem.paused || audioElem.ended) {
    audioElem.play();
  } else {
    audioElem.pause();
  }
});

// Update icon when playback state changes
audioElem.addEventListener('play', () => {
  playIcon.src = 'icon files/pause.svg';
});

audioElem.addEventListener('pause', () => {
  playIcon.src = 'icon files/play.svg';
});

function updatePlayIcon() {
  if (audioElem.paused || audioElem.ended) {
    playIcon.src = 'icon files/play.svg';
  } else {
    playIcon.src = 'icon files/pause.svg';
  }
}

// Back / Forward buttons
backButton.addEventListener('click', () => {
  if (currentSongIndex != 0){
      currentSongIndex = (currentSongIndex - 1);
      songSelector.value = currentSongIndex;
      loadSong(currentSongIndex);
    } else {
      currentSongIndex = 10;
      songSelector.value = currentSongIndex;
      loadSong(currentSongIndex);
    }
  
});

forwardButton.addEventListener('click', () => {
  if (currentSongIndex > 10){
      currentSongIndex = (currentSongIndex + 1);
      songSelector.value = currentSongIndex;
      loadSong(currentSongIndex);
    } else {
      currentSongIndex = 0;
      songSelector.value = currentSongIndex;
      loadSong(currentSongIndex);
    }
});

// Dropdown change listener
songSelector.addEventListener('change', (e) => {
  currentSongIndex = parseInt(e.target.value);
  loadSong(currentSongIndex);
});

});

// Save selected song to localStorage whenever it changes
function saveSelectedSong(index) {
  localStorage.setItem('selectedSong', index);
}

songSelector.addEventListener('change', () => saveSelectedSong(currentSongIndex));
backButton.addEventListener('click', () => saveSelectedSong(currentSongIndex));
forwardButton.addEventListener('click', () => saveSelectedSong(currentSongIndex));
