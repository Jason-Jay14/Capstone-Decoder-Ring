const { expect } = require("chai");
const { caesar } = require("../src/caesar");


describe("caesar", () => {
    it("Should return false", () => {
      expect(caesar("message", 0)).to.be.false
      expect(caesar("message", -26)).to.be.false
      expect(caesar("message", 26)).to.be.false
    });
  
    it("Should ignore capital letters", () => {
      const expected = "bcde";
      expect(caesar("ABcD", 1)).to.equal(expected);
    });
  
    it("Should handle shifts that go past the end of the alphabet", () => {
      const expected = "abc";
      expect(caesar("xyz", 3)).to.equal(expected);
    });
  
    it("Should maintains spaces and non letter chars", () => {
      const expectedWithSpaces = " vguv ";
      const expectedWithNonLetterChars = "vguv!";
      const expectedWithSpaceAndChar = " vguv! ";
      expect(caesar(" test ", 2)).to.equal(expectedWithSpaces);
      expect(caesar("test!", 2)).to.equal(expectedWithNonLetterChars);
      expect(caesar(" test! ", 2)).to.equal(expectedWithSpaceAndChar);
    });
  });