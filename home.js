let files = [];

fetch("http://32.223.181.79:5000/api/files")
    .then(response => response.json())
    .then(data => {
        files = data;
        update_search_list();
    })
    .catch(error => {
        console.error("Error fetching files:", error);
    });

function switchVideo(name) {
    let video = document.getElementById("Player-Video");
    video.innerHTML = "";
    let source = document.createElement("source");
    source.setAttribute("src", "Media/" + name);
    source.setAttribute("type", "video/webm");

    video.appendChild(source);
    video.load();
}

function update_search_list() {
    let list = document.getElementById("Nav-List");
    list.innerHTML = "";

    files.forEach(file => {
        const list_item = document.createElement("li");
        list_item.textContent = file;
        list_item.onclick = () => { switchVideo(file); };
        list.appendChild(list_item);
    });
}
