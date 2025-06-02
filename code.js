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

var currentSongIndex = 0;

// Load song details but do NOT autoplay
function loadSong(index) {
  console.log("loadSong() with parameter: " + index + " called successfully");
  const song = songs[index];
  console.log('called "songs" @ index #' + index);
  imgDisplay.src = song.image;
  console.log("changed image source to: " + song.image);
  audioSrc.src = song.audio;
  console.log("changed audio source to: " + song.audio);
  textElem.textContent = song.text;
  console.log("changed text element content to: " + song.text);
  audioElem.load();
  console.log("loaded audio element");
  console.log("calling updatePlayIcon()");
  updatePlayIcon();
}

// Play / Pause toggle
playPauseButton.addEventListener("click", () => {
  console.log("starting playPauseButton event listener if statement:");
  if (audioElem.paused || audioElem.ended) {
    audioElem.play();
    console.log(".play() @ audio element");
  } else {
    audioElem.pause();
    console.log(".pause() @ audio element");
  }
  console.log("playPauseButton event listener if statement ended successfully");
});

// Update icon when playback state changes
audioElem.addEventListener("play", () => {
  playIcon.src = "icon files/pause.svg";
  console.log("updated playIcon source to: icon files/pause.svg");
});

audioElem.addEventListener("pause", () => {
  playIcon.src = "icon files/play.svg";
  console.log("updated playIcon source to: icon files/play.svg");
});

function updatePlayIcon() {
  console.log("starting updatePlayIcon function if statement");
  if (audioElem.paused || audioElem.ended) {
    playIcon.src = "icon files/play.svg";
    console.log(
      "updated playIcon source to: icon files/play.svg because the audio file ended or paused"
    );
  } else {
    playIcon.src = "icon files/pause.svg";
    console.log(
      "updated playIcon source to: icon files/pause.svg because the audio file didn't end or pause"
    );
  }
  console.log("updatePlayIcon function if statement ended successfully");
}

// Back / Forward buttons
backButton.addEventListener("click", () => {
  console.log("starting backButton event listener if statement");
  if (currentSongIndex === 0) {
    currentSongIndex = 9;
    console.log("currentSongIndex set to: 9");
    songSelector.value = 9;
    console.log("songSelector.value set to: 9");
    console.log("calling loadSong() with parameter: 9");
    loadSong(currentSongIndex);
  } else {
    currentSongIndex = currentSongIndex - 1;
    console.log("currentSongIndex set to: " + currentSongIndex);
    songSelector.value = currentSongIndex;
    console.log("songSelector.value set to: " + currentSongIndex);
    console.log("calling loadSong() with parameter: " + currentSongIndex);
    loadSong(currentSongIndex);
  }
  console.log("backButton event listener if statement ended successfully");
});

forwardButton.addEventListener("click", () => {
  console.log("starting forwardButton event listener if statement");
  if (currentSongIndex === 9) {
    currentSongIndex = 0;
    console.log("currentSongIndex set to: 0");
    songSelector.value = 0;
    console.log("songSelector.value set to: 0");
    console.log("calling loadSong() with parameter: 0");
    loadSong(currentSongIndex);
  } else {
    currentSongIndex = currentSongIndex + 1;
    console.log("currentSongIndex set to: " + currentSongIndex);
    songSelector.value = currentSongIndex;
    console.log("songSelector.value set to: " + currentSongIndex);
    console.log("calling loadSong() with parameter: " + currentSongIndex);
    loadSong(currentSongIndex);
  }
  console.log("forwardButton event listener if statement ended successfully");
});

// Dropdown change listener
songSelector.addEventListener("change", (e) => {
  console.log("songSelector event listener started");
  currentSongIndex = parseInt(e.target.value);
  console.log("currentSongIndex set to: " + currentSongIndex);
  console.log("calling loadSong() with parameter: " + currentSongIndex);
  loadSong(currentSongIndex);
});
