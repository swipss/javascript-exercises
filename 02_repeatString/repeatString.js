const repeatString = function(str, num) {
    if (num < 0){
        return "ERROR"
    }
    let output = ''
    while (num > 0) {
        output += str
        num--
    }
    return output
};

// Do not edit below this line
module.exports = repeatString;
