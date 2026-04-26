// Responsible for creating tune elements and adding them to
// the tunes list elements

function createTuneElement(audioFile) {
    let newElement = document.createElement("div");
    let html = `
        <h3 class="new-tune-header">${audioFile.name}</h3>
        <audio class="new-tune-audio-track" 
            controls 
            src="${audioFile.path}"
            type="audio/mpeg"></audio>`;
    
    newElement.innerHTML = html;
    newElement.className = "new-tune-div";

    return newElement;
}

function populateTuneList() {
    let tunes = document.getElementById("tunes");
    let audioFiles = [{
            name: "Binz",
            path: "audio/Binz.mp3"
        },
        {
            name: "Chandelier",
            path: "audio/Chandelier.mp3"
        },
        {
            name: "Don't Blame Us For The Boogie",
            path: "audio/DontBlameUsForTheBoogie.mp3"
        },
        {
            name: "Golden",
            path: "audio/Golden.mp3"
        },
        {
            name: "Lose Yourself to Dance",
            path: "audio/LoseYourself.mp3"
        },
        {
            name: "Passion Fruit",
            path: "PassionFruit.mp3"
        },
        {
            name: "Ta Douleur",
            path: "audio/ta-douleur.mp3"
        }];

    for (var i = 0; i < audioFiles.length; i++) {
        let audioElement = createTuneElement(audioFiles[i])
        tunes.appendChild(audioElement);
    }
}


populateTuneList();