window.addEventListener("keydown", function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    audio.play();
    audio.currentTime = 0;

})