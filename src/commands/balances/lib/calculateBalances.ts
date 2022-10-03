import {
  BalanceOutput,
  CurrencyBalances,
  supportedCurrencies,
  TransactionRecord,
} from "../types";
import { parseTransactionValueInCents } from "./balanceUtil";
import { validateJsonContent } from "./validateJsonContent";

export function calculateBalances(
  transactionsStream: NodeJS.ReadableStream
): Promise<BalanceOutput[]> {
  return new Promise<BalanceOutput[]>((resolve, reject) => {
    const resultObject: { [key: string]: BalanceOutput } = {};

    transactionsStream.on(
      "data",
      (data: { key: number; value: TransactionRecord }) => {
        const transaction = data.value;
        validateJsonContent(transaction);

        if (!resultObject[transaction.user_id]) {
          resultObject[transaction.user_id] = {
            userId: transaction.user_id,
            lastActivity: transaction.timestamp,
            ...supportedCurrencies.reduce((sum, item) => {
              sum[item] = 0;
              return sum;
            }, {} as CurrencyBalances),
          };
        }

        resultObject[transaction.user_id][transaction.currency] +=
          parseTransactionValueInCents(transaction.amount);

        if (
          new Date(resultObject[transaction.user_id].lastActivity).getTime() <
          new Date(transaction.timestamp).getTime()
        ) {
          resultObject[transaction.user_id].lastActivity =
            transaction.timestamp;
        }
      }
    );

    transactionsStream.on("finish", () => {
      resolve(Object.values(resultObject));
    });

    transactionsStream.on("error", (err) => {
      reject(err);
    });
  });
}
