// npm - global command , comes with code
// npm --version

// local depedency - only here ( learning )
// npm i [package name]

// global dependecy - use in any project 
// npm install -g [package name]
// sudo install -g [package name] (For Mac/Linux)

// package.jspm - manifest file ( stores important info about project or package )
// manual approach ( create file paackage.json in the root , create properties and configure yourself)
// npm init ( costume configuration )
// npm init -y ( default configuration)

const _ = require('lodash')
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items)
console.log(newItems);