function showButtons() {
    document.getElementById("buttonsContainer").style.display = "flex";
}

function editAnswer() {
    window.location.href = "3.ViAnswr.html";
}

function watchAgain() {
    var video = document.getElementById("vid1");
    video.currentTime = 0;
    video.play();
    document.getElementById("buttonsContainer").style.display = "none";
}
