/**
 * Encodes a string.
 * @param {string} input The string to encode.
 * @returns {string} The encoded string.
 */
function encode(input) {
    let output = '';
    for (let i = 0, currentChar = '', length = ''; i <= input.length; i++) {
        if (input[i] === currentChar) {
            length++;
            continue;
        }
        output += `${currentChar}${length}`;
        currentChar = input[i];
        length = 1;
    }
    return output;
}

module.exports = { encode };
