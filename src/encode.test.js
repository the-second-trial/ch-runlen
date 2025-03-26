const { encode } = require('./encode');

describe('encode', () => {
    it('should return an empty string when input is an empty string', () => {
        expect(encode("")).toBe("");
    });

    it('should encode a string with no repeated characters', () => {
        expect(encode("abc")).toBe("a1b1c1");
    });

    it('should encode a string with repeated characters', () => {
        expect(encode("aaabbc")).toBe("a3b2c1");
    });

    it('should handle strings with a single character', () => {
        expect(encode("a")).toBe("a1");
    });

    it('should handle strings with all identical characters', () => {
        expect(encode("aaaa")).toBe("a4");
    });

    it('should handle strings with mixed case characters', () => {
        expect(encode("aAaa")).toBe("a1A1a2");
    });
});
