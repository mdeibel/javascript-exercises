const fibonacci = function(index) {
    if (index < 0) return "OOPS";
    if (index === 1 || index === 2) {
        return 1;
    }
    
    let prevFib = 1;
    let currFib = 1;
    let temp;
    for (let i = 2; i < index; i++) {
        temp = currFib;
        currFib = prevFib + currFib;
        prevFib = temp;
    }

    return currFib;
};

// Do not edit below this line
module.exports = fibonacci;
