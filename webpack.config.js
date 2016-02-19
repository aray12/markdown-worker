const path = require('path');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src', 'app.js'),
        worker: path.resolve(__dirname, 'src', 'worker.js'),
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js',
    }
}