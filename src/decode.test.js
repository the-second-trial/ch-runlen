const { decode } = require('./decode');

/**
 * @param {(input: string) => string} decodeFunc 
 */
const allTests = (decodeFunc) => {
    it('should return an empty string when input is an empty string', () => {
        expect(decodeFunc("")).toBe("");
    });

    it('should decode a string with no repeated characters', () => {
        expect(decodeFunc("a1b1c1")).toBe("abc");
    });

    it('should decode a string with repeated characters', () => {
        expect(decodeFunc("a3b2c1")).toBe("aaabbc");
    });

    it('should handle strings with a single character', () => {
        expect(decodeFunc("a1")).toBe("a");
    });

    it('should handle strings with all identical characters', () => {
        expect(decodeFunc("a4")).toBe("aaaa");
    });

    it('should handle strings with mixed case characters', () => {
        expect(decodeFunc("a1A1a2")).toBe("aAaa");
    });
};

describe('decode', () => {
    allTests(decode);
});
