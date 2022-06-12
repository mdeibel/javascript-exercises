const palindromes = function (str) {
    sanitizedStr = str.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').
            toLowerCase().
            replaceAll(/\s/g, '');
    console.log(sanitizedStr);
    reverseStr = '';
    for (let i = sanitizedStr.length - 1; i >= 0; i--) {
        reverseStr += sanitizedStr[i];
    }
    return (reverseStr === sanitizedStr);
};

// Do not edit below this line
module.exports = palindromes;
