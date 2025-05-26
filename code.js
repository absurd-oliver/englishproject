const songs = [
  {
    audio: 'audio files/audiofiletest1.m4a',
    image: 'image files/audiofiletest1.jpg',
    text: 'placeholder text one',
  },
  {
    audio: 'audio files/audiofiletest2.m4a',
    image: 'image files/audiofiletest2.png',
    text: 'placeholder text two',
  },
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
const themeToggle = document.getElementById('themeToggle');

let currentSongIndex = 0;

// Load last saved song & theme from localStorage
window.addEventListener('DOMContentLoaded', () => {
  const savedSongIndex = parseInt(localStorage.getItem('selectedSong'));
  if (!isNaN(savedSongIndex) && savedSongIndex >= 0 && savedSongIndex < songs.length) {
    currentSongIndex = savedSongIndex;
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeToggle.checked = true;
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
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  songSelector.value = currentSongIndex;
  loadSong(currentSongIndex);
});

forwardButton.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  songSelector.value = currentSongIndex;
  loadSong(currentSongIndex);
});

// Dropdown change listener
songSelector.addEventListener('change', (e) => {
  currentSongIndex = parseInt(e.target.value);
  loadSong(currentSongIndex);
});

// Theme toggle listener
themeToggle.addEventListener('change', (e) => {
  if (e.target.checked) {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});

// Save selected song to localStorage whenever it changes
function saveSelectedSong(index) {
  localStorage.setItem('selectedSong', index);
}

songSelector.addEventListener('change', () => saveSelectedSong(currentSongIndex));
backButton.addEventListener('click', () => saveSelectedSong(currentSongIndex));
forwardButton.addEventListener('click', () => saveSelectedSong(currentSongIndex));
