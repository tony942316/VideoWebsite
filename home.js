function herc() {
    switchVideo("Hercules1997.webm");
}

function elem() {
    switchVideo("Elemental2023.webm");
}

function mean() {
    switchVideo("MeanGirls2004.webm");
}

function switchVideo(name) {
    let video = document.getElementById("Player-Video");
    video.innerHTML = "";
    let source = document.createElement("source");
    source.setAttribute("src", "Media/" + name);
    source.setAttribute("type", "video/webm");

    video.appendChild(source);
    video.load();
}
