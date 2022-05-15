const sumAll = function(first, second) {
    if (typeof(first) !== 'number' || typeof(second) !== 'number' || 
            first < 0 || second < 0) {
        return "ERROR";
    }
    let sum = 0;
    if (first > second) {
        for (let i = second; i <= first; i++) {
            sum += i;
        }
    }
    else {
        for (let i = first; i <= second; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
