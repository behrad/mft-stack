const chalk = require('chalk')
const data = []
let index = 0

module.exports.push = function(item) {
    data.push(item)
    console.log(chalk.green(`pushing to stack: ${item}`))
    index++
}

module.exports.pop = function() {
    if (index > 0) {
        index--
        console.log(chalk.green(`popping: ${data[index]}`))
        return data[index]
    }
    return null
}

module.exports.length = function() {
    return index
}