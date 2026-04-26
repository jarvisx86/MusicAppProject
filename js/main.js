// Responsible for creating tune elements and adding them to
// the tunes list elements

function createTuneElement(title, audioPath) {
    let newElement = document.createElement("div");
    let html = `
        <h3 class="new-tune-header">${title}</h3>
        <audio class="new-tune-audio-track" 
            controls 
            src="${audioPath}" 
            type="audio/mpeg"></audio>`;
    
    newElement.innerHTML = html;
    newElement.className = "new-tune-div";

    return newElement;
}

function populateTuneList() {
    let tunes = document.getElementById("tunes");
    
    for (var i = 0; i < 5; i++) {
        let audioElement = createTuneElement(`Tune ${i}`, "")
        tunes.appendChild(audioElement);
    }
}


populateTuneList();