const marked = require('marked');
importScripts('//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.1.0/highlight.min.js');

marked.setOptions({
    highlight: function(code) {
        return hljs.highlightAuto(code).value;
    }
});

onmessage = function(event) {
    
    marked(event.data, (err, content) => {
        if (err) throw err;
        postMessage(content);
    })   
}