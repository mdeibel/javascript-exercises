const repeatString = function(word, repeats) {
    if (repeats < 0) {
        return 'ERROR';
    }
    let finalString = '';
    for (let i = 0; i < repeats; i++) {
        finalString += word;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
