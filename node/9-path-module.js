const path  = require('path')
console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'text.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

// Brings Absoulute path
const absoulute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absoulute)
