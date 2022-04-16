const removeFromArray = function(arr, ...args) {
    // let args = Array.prototype.slice.call(arguments, 1);
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if (arr[i] === args[j]) {
                arr.splice(i, 1)                
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if (arr[i] === args[j]) {
                arr.splice(i, 1)                
            }
        }
    }
    return arr
    
    
};

// Do not edit below this line
module.exports = removeFromArray;
