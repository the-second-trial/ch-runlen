const { encode, encode_recursive } = require('./encode');

/**
 * @param {(input: string) => string} encodeFunc 
 */
const allTests = (encodeFunc) => {
    it('should return an empty string when input is an empty string', () => {
        expect(encodeFunc("")).toBe("");
    });

    it('should encode a string with no repeated characters', () => {
        expect(encodeFunc("abc")).toBe("a1b1c1");
    });

    it('should encode a string with repeated characters', () => {
        expect(encodeFunc("aaabbc")).toBe("a3b2c1");
    });

    it('should handle strings with a single character', () => {
        expect(encodeFunc("a")).toBe("a1");
    });

    it('should handle strings with all identical characters', () => {
        expect(encodeFunc("aaaa")).toBe("a4");
    });

    it('should handle strings with mixed case characters', () => {
        expect(encodeFunc("aAaa")).toBe("a1A1a2");
    });
};

describe('encode', () => {
    allTests(encode);
});

describe('encode recursive', () => {
    allTests(encode_recursive);
});
