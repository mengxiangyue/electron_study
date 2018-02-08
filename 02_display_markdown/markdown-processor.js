const fs = require('fs')
const marked = require('marked')

const content = fs.readFileSync('readme.md', 'utf-8')

const html = marked(content)

document.getElementById('viewer').innerHTML = html