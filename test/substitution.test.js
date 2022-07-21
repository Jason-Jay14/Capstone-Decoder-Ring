const { expect } = require("chai");
const { substitution } = require("../src/substitution");



describe("substitution", () => {
    it("should return false if given no alphabet", () => {
      const actual = substitution("test");
      expect(actual).to.be.false;
    });
    it("should return false if alphabet isn't 26 characters", () => {
      const actual = substitution("test", "abcdefghijklmnopqrstuvwxyza");
      expect(actual).to.be.false;
    });
    it("should return false if alphabet has repeating characters", () => {
      const actual = substitution("test", "tttttteeeeeessssssttttt");
      expect(actual).to.be.false;
    });
    it("should encode with special characters", () => {
      const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
      const expected = "ykrrpik";
      expect(actual).to.equal(expected);
    });
    it("should decode with special characters", () => {
      const actual = substitution("ykrrpik","plmoknijbuhvygctfxrdzeswaq",
        (encode = false)
      );
      const expected = "message";
      expect(actual).to.eql(expected);
    });
    it("should preserve spaces", () => {
        const actual = substitution("mes sage", "plmoknijbuhvygctfxrdzeswaq")
        const expected = "ykr rpik"
        expect(actual).to.eql(expected)
    });
    it("Should ignore capital letters",()=>{
        const actual = substitution("MESSAGE", "plmoknijbuhvygctfxrdzeswaq")
        const expected = "ykrrpik"
        expect(actual).to.eql(expected)
    });
  });
