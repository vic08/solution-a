import { validateJsonContent } from "../validateJsonContent";
import {
  transactionsInput1,
  transactionsInputCorrupted1,
  transactionsInputCorrupted2,
  transactionsInputCorrupted3,
  transactionsInputCorrupted4,
} from "./dataMocks/transactionsJsonInput";

describe("validateJsonContent.ts", () => {
  describe("validateJsonContent()", () => {
    test("Should not throw error, if the object complies with the json schema", () => {
      expect(() => {
        transactionsInput1.forEach((item) => {
          validateJsonContent(item);
        });
      }).not.toThrow();
    });

    test("Should throw error, if the object does not comply with the json schema", () => {
      const corruptTransactions = [
        transactionsInputCorrupted1,
        transactionsInputCorrupted2,
        transactionsInputCorrupted3,
        transactionsInputCorrupted4,
      ];

      corruptTransactions.forEach((transactions) => {
        expect(() => {
          transactions.forEach((item) => {
            validateJsonContent(item);
          });
        }).toThrow();
      });
    });
  });
});
