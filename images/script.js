const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", function () {

    if (music.paused) {
        music.play();
        musicButton.textContent = "🎶";
    } else {
        music.pause();
        musicButton.textContent = "🎶";
    }

});