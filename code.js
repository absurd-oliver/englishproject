const songs = [
  {
    audio: "audio files/placeholderAudioFileName1.mp3",
    image: "image files/placeholderImgFileName1.jpg",
    text: "placeholder text one",
  },
  {
    audio: "audio files/placeholderAudioFileName2.mp3",
    image: "image files/placeholderImgFileName2.jpg",
    text: "placeholder text two",
  },
  {
    audio: "audio files/placeholderAudioFileName3.mp3",
    image: "image files/placeholderImgFileName3.jpg",
    text: "placeholder text three",
  },
  {
    audio: "audio files/placeholderAudioFileName4.mp3",
    image: "image files/placeholderImgFileName4.jpg",
    text: "placeholder text four",
  },
  {
    audio: "audio files/placeholderAudioFileName5.mp3",
    image: "image files/placeholderImgFileName5.jpg",
    text: "placeholder text five",
  },
  {
    audio: "audio files/placeholderAudioFileName6.mp3",
    image: "image files/placeholderImgFileName6.jpg",
    text: "placeholder text six",
  },
  {
    audio: "audio files/placeholderAudioFileName7.mp3",
    image: "image files/placeholderImgFileName7.jpg",
    text: "placeholder text seven",
  },
  {
    audio: "audio files/placeholderAudioFileName8.mp3",
    image: "image files/placeholderImgFileName8.jpg",
    text: "placeholder text eight",
  },
  {
    audio: "audio files/placeholderAudioFileName9.mp3",
    image: "image files/placeholderImgFileName9.jpg",
    text: "placeholder text nine",
  },
  {
    audio: "audio files/placeholderAudioFileName0.mp3",
    image: "image files/placeholderImgFileName0.jpg",
    text: "placeholder text ten",
  },
];

const imgDisplay = document.getElementById("audioImage");
const audioElem = document.getElementById("audioElement");
const audioSrc = document.getElementById("audioSource");
const textElem = document.getElementById("textElement");

const backButton = document.getElementById("backButton");
const forwardButton = document.getElementById("forwardButton");
const playPauseButton = document.getElementById("playPauseButton");
const playIcon = document.getElementById("playIcon");

const songSelector = document.getElementById("songSelector");
const devConsole = document.getElementById("devLog");
const devConsoleButton = document.getElementById("devLogButton");

var devToggle = false;
var currentSongIndex = 0;

// Load song details but do NOT autoplay
function loadSong(index) {
  logMain("loadSong() with parameter: " + index + " called successfully");
  const song = songs[index];
  logMain('called "songs" @ index #' + index);
  imgDisplay.src = song.image;
  logMain("changed image source to: " + song.image);
  audioSrc.src = song.audio;
  logMain("changed audio source to: " + song.audio);
  textElem.textContent = song.text;
  logMain("changed text element content to: " + song.text);
  audioElem.load();
  logMain("loaded audio element");
  document.getElementsByTagName("body")[0].style.backgroundImage = song.image;
  logMain("calling updatePlayIcon()");
  updatePlayIcon();
}

// Play / Pause toggle
playPauseButton.addEventListener("click", () => {
  logMain("starting playPauseButton event listener if statement:");
  if (audioElem.paused || audioElem.ended) {
    audioElem.play();
    logMain(".play() @ audio element");
  } else {
    audioElem.pause();
    logMain(".pause() @ audio element");
  }
  logMain("playPauseButton event listener if statement ended successfully");
});

// Update icon when playback state changes
audioElem.addEventListener("play", () => {
  playIcon.src = "icon files/pause.svg";
  logMain("updated playIcon source to: icon files/pause.svg");
});

audioElem.addEventListener("pause", () => {
  playIcon.src = "icon files/play.svg";
  logMain("updated playIcon source to: icon files/play.svg");
});

function updatePlayIcon() {
  logMain("starting updatePlayIcon function if statement");
  if (audioElem.paused || audioElem.ended) {
    playIcon.src = "icon files/play.svg";
    logMain(
      "updated playIcon source to: icon files/play.svg because the audio file ended or paused"
    );
  } else {
    playIcon.src = "icon files/pause.svg";
    logMain(
      "updated playIcon source to: icon files/pause.svg because the audio file didn't end or pause"
    );
  }
  logMain("updatePlayIcon function if statement ended successfully");
}

// Back / Forward buttons
backButton.addEventListener("click", () => {
  logMain("starting backButton event listener if statement");
  if (currentSongIndex === 0) {
    currentSongIndex = 9;
    logMain("currentSongIndex set to: 9");
    songSelector.value = 9;
    logMain("songSelector.value set to: 9");
    logMain("calling loadSong() with parameter: 9");
    loadSong(currentSongIndex);
  } else {
    currentSongIndex = currentSongIndex - 1;
    logMain("currentSongIndex set to: " + currentSongIndex);
    songSelector.value = currentSongIndex;
    logMain("songSelector.value set to: " + currentSongIndex);
    logMain("calling loadSong() with parameter: " + currentSongIndex);
    loadSong(currentSongIndex);
  }
  logMain("backButton event listener if statement ended successfully");
});

forwardButton.addEventListener("click", () => {
  logMain("starting forwardButton event listener if statement");
  if (currentSongIndex === 9) {
    currentSongIndex = 0;
    logMain("currentSongIndex set to: 0");
    songSelector.value = 0;
    logMain("songSelector.value set to: 0");
    logMain("calling loadSong() with parameter: 0");
    loadSong(currentSongIndex);
  } else {
    currentSongIndex = currentSongIndex + 1;
    logMain("currentSongIndex set to: " + currentSongIndex);
    songSelector.value = currentSongIndex;
    logMain("songSelector.value set to: " + currentSongIndex);
    logMain("calling loadSong() with parameter: " + currentSongIndex);
    loadSong(currentSongIndex);
  }
  logMain("forwardButton event listener if statement ended successfully");
});

// Dropdown change listener
songSelector.addEventListener("change", (e) => {
  logMain("songSelector event listener started");
  logMain("starting dev check if statement");
  if (songSelector.value != 10) {
    logMain("dev check: false");
    devConsoleButton.classList.add("hidden");
    logMain("added hidden class to devConsoleButton");
    currentSongIndex = parseInt(e.target.value);
    logMain("currentSongIndex set to: " + currentSongIndex);
    logMain("calling loadSong() with parameter: " + currentSongIndex);
    loadSong(currentSongIndex);
  } else {
    devConsoleButton.classList.remove("hidden");
  }
});

devConsoleButton.addEventListener("click", () => {
  logMain("starting devConsoleButton event listener and if statement");
  if (devToggle === true) {
    devToggle = false;
    logMain("devToggle set to false, was: true");
    devConsole.classList.add("hidden");
    logMain("added hidden class to devConsole");
  } else {
    devToggle = true;
    logMain("devToggle set to true, was: false");
    devConsole.classList.remove("hidden");
    logMain("removed hidden class from devConsole");
  }
});

function logMain(info) {
  console.log(info);
  devLog.textContent += info + "\n";
}
