const song1 = 'audiofiletest1.m4a';
const song2 = 'audiofiletest2.m4a';
const songimg1 = 'audiofiletest1.jpg';
const songimg2 = 'audiofiletest2.png';
const songtext1 = 'placeholder text one';
const songtext2 = 'placeholder text two';


const imgDisplay = document.getElementById('audioImage');
const audioSrc = document.getElementById('audioSource');
const textElem = document.getElementById('textElement');


const backButton = document.getElementById('backButton');
const forwardButton = document.getElementById('forwardButton');


backButton.addEventListener('click', () => {update(1);});
forwardButton.addEventListener('click', () => {update(2);});

function update(n){
    if (n === 1){
        imgDisplay.src = songimg1;
        audioSrc.src = song1;
        textElem.textContent = songtext1;
    } else if (n === 2){
        imgDisplay.src = songimg2;
        audioSrc.src = song2;
        textElem.textContent = songtext2;
    }

    // Reload the audio source to reflect the new source
    audioSrc.parentElement.load();
}

