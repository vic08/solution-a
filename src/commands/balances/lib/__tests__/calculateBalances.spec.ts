import { calculateBalances } from "../calculateBalances";
import {
  transactionBalances1,
  transactionSet1,
  transactionSetCorrupted1,
} from "./dataMocks/transactions";
import { PassThrough } from "stream";

describe("calculateBalances.ts", () => {
  describe("calculateBalances()", () => {
    test("Should output correct balances for each user based on the array of transactions", (done) => {
      const mockStream = new PassThrough();

      calculateBalances(mockStream).then((output) => {
        expect(output).toEqual(transactionBalances1);
        done();
      });

      transactionSet1.forEach((item, idx) => {
        mockStream.emit("data", { key: idx, value: item });
      });

      mockStream.emit("finish");
    });

    test("Should throw if there is a corrupted item in the transactions list", () => {
      const mockStream = new PassThrough();

      expect(() => {
        calculateBalances(mockStream);

        transactionSetCorrupted1.forEach((item, idx) => {
          mockStream.emit("data", { key: idx, value: item });
        });

        mockStream.emit("finish");
      }).toThrow();
    });
  });
});
