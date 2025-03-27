/**
 * Decodes a string previously encoded.
 * @param {string} input The encoded string.
 * @returns {string} The decoded string.
 */
function decode(input) {
    let output = '';
    for (let i = 0; i < input.length; i += 2) {
        output += getSameCharStr(input[i], parseInt(input[i+1]));
    }
    return output;
}

/**
 * Creates a string of identical characters.
 * @param {string} char The character to replicate.
 * @param {number} length The number of replications.
 */
function getSameCharStr(char, length) {
    let output = "";
    for (let i = 0; i < length; i++) {
        output += char;
    }
    return output;
}

module.exports = { decode };
