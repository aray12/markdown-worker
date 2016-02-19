const textContent = document.querySelector('#text-content');
const formattedContent = document.querySelector('#formatted-content');
const markedWorker = new Worker('worker.js');

function generateMarkdown(e) {
    markedWorker.postMessage(e.target.value);
}

markedWorker.onmessage = function(e) {
    formattedContent.innerHTML = e.data;
}

textContent.onkeyup = generateMarkdown;
textContent.onblur = generateMarkdown;