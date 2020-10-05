const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it("shouldn't accept a bool", () => {
      const str = true;
      const stringCheck = new Algo().reverse(str);
      expect(stringCheck).toEqual("only strings please");
    });
    it("shouldn't accept a number", () => {
      const str = 23;
      const stringCheck = new Algo().reverse(str);
      expect(stringCheck).toEqual("only strings please");
    });
    it("shouldn't accept an object", () => {
      const str = new String( "This is a String Object" );
      const stringCheck = new Algo().reverse(str);
      expect(stringCheck).toEqual("only strings please");
    });
    it("shouldn't accept an array", () => {
      const str = ["one", "two"];
      const stringCheck = new Algo().reverse(str);
      expect(stringCheck).toEqual("only strings please");
    });

    it("should return the reversed version of the input string", () => {
      const str = "Hello";
      const result = new Algo().reverse(str);
      expect(result).toEqual("olleH");
    });
  });

  describe("isPalindrome", () => {
    it("shouldn't accept a bool", () => {
      const str = true;
      const stringCheck = new Algo().isPalindrome(str);
      expect(stringCheck).toEqual("only strings please");
    });
    it("shouldn't accept a number", () => {
      const str = 23;
      const stringCheck = new Algo().isPalindrome(str);
      expect(stringCheck).toEqual("only strings please");
    });
    it("shouldn't accept an object", () => {
      const str = new String( "This is a String Object" );
      const stringCheck = new Algo().isPalindrome(str);
      expect(stringCheck).toEqual("only strings please");
    });
    it("shouldn't accept an array", () => {
      const str = ["one", "two"];
      const stringCheck = new Algo().isPalindrome(str);
      expect(stringCheck).toEqual("only strings please");
    });

    it("should return the true given a palindrome", () => {
      const str = "RaceCar";
      const result = new Algo().isPalindrome(str);
      expect(result).toEqual(true);
    });

    it("should return the false not given a palindrome", () => {
      const str = "RaceCars";
      const result = new Algo().isPalindrome(str);
      expect(result).toEqual(false);
    });
  });

  describe("capitalize", () => {
    it("shouldn't accept a bool", () => {
      const str = true;
      const stringCheck = new Algo().capitalize(str);
      expect(stringCheck).toEqual("only strings please");
    });
    it("shouldn't accept a number", () => {
      const str = 23;
      const stringCheck = new Algo().capitalize(str);
      expect(stringCheck).toEqual("only strings please");
    });
    it("shouldn't accept an object", () => {
      const str = new String( "This is a String Object" );
      const stringCheck = new Algo().capitalize(str);
      expect(stringCheck).toEqual("only strings please");
    });
    it("shouldn't accept an array", () => {
      const str = ["one", "two"];
      const stringCheck = new Algo().capitalize(str);
      expect(stringCheck).toEqual("only strings please");
    });
    it("should capitalize the first letter of each word", () => {
      const str = "hello my friends";
      const stringCheck = new Algo().capitalize(str);
      expect(stringCheck).toEqual("Hello My Friends");
    });
  });
});