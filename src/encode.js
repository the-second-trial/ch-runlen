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

/**
 * Encodes a string.
 * @param {string} input The string to encode.
 * @param {string} output The recursive carry on output. 
 * @returns {string} The encoded string.
 */
function encode_recursive(input, output) {
    if (!input) {
        // Final condition
        return output || '';
    }

    if (!output) {
        // Initial condition
        return encode_recursive(input, `${input[0]}0`);
    }

    const currentChar = output[output.length-2];
    const length = parseInt(output[output.length-1]);
    if (input[0] === currentChar) {
        return encode_recursive(input.substring(1), `${output.substring(0, output.length-1)}${length+1}`);
    }
    return encode_recursive(input.substring(1), `${output}${input[0]}${1}`);
}

module.exports = { encode, encode_recursive };
