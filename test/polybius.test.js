const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe('polybius()', () => {
    it("should translate both i and j to 42", () => {
        const input = 'i j';
        const expected = "42 42";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });
    it("should translate both 'i' and 'j' to 42", () => {
        const message = "jiggle";
        const actual = polybius(message);
        const expected = "424222221351";
        expect(actual).to.equal(expected);
    });
    it("should leave spaces as is for encoding", () =>{
        const input = 'my message';
        const expected = '2345 23513434112251';
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });
    it("should leave spaces as is decoding", () => {
        const input = '2345 23513434112251';
        const encode = false 
        const expected = 'my message';
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });
});
