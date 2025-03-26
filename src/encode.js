/**
 * Encodes a string.
 * @param {string} input The string to encode.
 * @returns {string} The encoded string.
 */
function encode(input) {
    let output = '';
    let currentChar = '';
    let length = '';
    for (const char of input) {
        if (char === currentChar) {
            length++;
            continue;
        }
        output += `${currentChar}${length}`;
        currentChar = char;
        length = 1;
    }
    output += `${currentChar}${length}`;
    return output;
}

module.exports = { encode };
