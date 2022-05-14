const removeFromArray = function(...args) {
    let initArray = args[0];
    return initArray.filter(value => !args.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
