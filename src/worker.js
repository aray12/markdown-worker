const marked = require('marked');

marked.setOptions();

onmessage = function(event) {
    marked(event.data, (err, content) => {
        if (err) throw err;
        postMessage(content);
    })   
}