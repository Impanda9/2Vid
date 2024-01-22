function showButtons() {
    document.getElementById("buttonsContainer").style.display = "flex";
}

function editAnswer() {
    window.location.href = 'https://impanda9.github.io/3VidA/';
}

function watchAgain() {
    var video = document.getElementById("vid1");
    video.currentTime = 0;
    video.play();
    document.getElementById("buttonsContainer").style.display = "none";
}
