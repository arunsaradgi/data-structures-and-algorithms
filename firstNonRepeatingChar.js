// function firstNonRepeatingChar(str) {
//     for (let char in str) {    // iterates over indexes
//         if (str.indexOf(char) === str.lastIndexOf(char)) return char;
//     }
//     return null;

// }

// console.log(firstNonRepeatingChar("aabbccddefgh"))

function firstNonRepeatingChar(str) {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) return char;
    }
    return null;
}
console.log(firstNonRepeatingChar("aaabbccddeeefghi"))