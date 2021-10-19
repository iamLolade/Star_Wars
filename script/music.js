//background music
let media = document.getElementById("bgmp");

setTimeout(play, 4000);

function play() {
    media.muted = false;
    media.play();
}

play();

window.addEventListener('DOMContentLoaded', ()=>{
    play();
}, false);