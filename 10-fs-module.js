
// Destructure from 'fs' Module
const {readFileSync, writeFileSync} = require('fs')

const firstText = readFileSync('./content/first.txt', 'utf-8')
const secondText = readFileSync('./content/second.txt', 'utf-8')


writeFileSync(
    './conent/result-sync.txt',
    `Here is the result ${firstText} ${secondText}`,
    { flag: 'a'}
)

console.log(firstText, secondText)