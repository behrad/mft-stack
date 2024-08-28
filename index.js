const data = []
let index = 0

module.exports.push = function(item) {
    data.push(item)
    index++
}

module.exports.pop = function() {
    if (index > 0) {
        index--
        return data[index]
    }
    return null
}

module.exports.length = function() {
    return index
}