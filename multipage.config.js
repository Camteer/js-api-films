const path = require('path');

result = {}

result.entry = {
    'main': path.join(__dirname, '../src/index.js'),
    'complited': path.join(__dirname, '../src/complited.js'),
    'later': path.join(__dirname, '../src/later.js'),
}

result.pages = [
    { chunks: ['main'], page: 'index.html', template: path.join(__dirname, '../src/index.html'), },
    { chunks: ['complited'], page: '/pages/complited.html', template: path.join(__dirname, '../pages/complited.html') },
    { chunks: ['later'], page: 'pages/later.html', template: path.join(__dirname, '../pages/later.html') },
]

module.exports = result;