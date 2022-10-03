import {
  balanceValueStringRepresentation,
  parseTransactionValueInCents,
} from "../balanceUtil";

describe("balanceUtil.ts", () => {
  describe("parseTransactionValueInCents()", () => {
    test("Should parse a positive value in cents correctly", () => {
      expect(parseTransactionValueInCents("+100500.22")).toEqual(10050022);
    });

    test("Should parse a negative value in cents correctly", () => {
      expect(parseTransactionValueInCents("-2233.11")).toEqual(-223311);
    });

    test("Should throw an error if the input string is in a wrong format", () => {
      const falseCases = ["2233.11", "-2233.1", "28881", "+223."];
      falseCases.forEach((input) => {
        expect(() => {
          parseTransactionValueInCents(input);
        }).toThrow();
      });
    });
  });

  describe("balanceValueStringRepresentation()", () => {
    test("Should yield correct string representation of given numbers", () => {
      const cases = [
        {
          in: 1,
          out: "+0.01",
        },
        {
          in: 0,
          out: "+0.00",
        },
        {
          in: -2,
          out: "-0.02",
        },
        {
          in: 13,
          out: "+0.13",
        },
        {
          in: -22,
          out: "-0.22",
        },
        {
          in: 288,
          out: "+2.88",
        },
        {
          in: -33458,
          out: "-334.58",
        },
      ];

      cases.forEach((item) => {
        expect(balanceValueStringRepresentation(item.in)).toEqual(item.out);
      });
    });
  });
});
