import { TransactionRecord } from "../../../types";

export function mockTransaction(
  input?: Partial<TransactionRecord>
): TransactionRecord {
  return {
    user_id: "1",
    timestamp: new Date("2022-02-02").toISOString(),
    amount: "+1.00",
    currency: "GBP",
    ...input,
  };
}

export const transactionSet1: TransactionRecord[] = [
  mockTransaction({
    user_id: "1",
    amount: "+11.22",
    currency: "USD",
  }),
  mockTransaction({
    user_id: "1",
    amount: "-11.00",
    currency: "USD",
  }),
  mockTransaction({
    user_id: "1",
    amount: "+0.78",
    currency: "USD",
  }),
  mockTransaction({
    user_id: "1",
    amount: "+100.00",
    currency: "GBP",
  }),
  mockTransaction({
    user_id: "1",
    amount: "-200.00",
    currency: "EUR",
    timestamp: new Date("2024-01-01").toISOString(),
  }),
  mockTransaction({
    user_id: "2",
    amount: "+8.02",
    currency: "USD",
  }),
  mockTransaction({
    user_id: "2",
    amount: "-0.02",
    currency: "USD",
  }),
  mockTransaction({
    user_id: "2",
    amount: "+5.00",
    currency: "USD",
  }),
  mockTransaction({
    user_id: "2",
    amount: "+100.00",
    currency: "GBP",
  }),
  mockTransaction({
    user_id: "2",
    amount: "-200.00",
    currency: "EUR",
    timestamp: new Date("2023-01-01").toISOString(),
  }),
];

export const transactionBalances1 = [
  {
    userId: "1",
    lastActivity: "2024-01-01T00:00:00.000Z",
    USD: 100,
    GBP: 10000,
    EUR: -20000,
  },
  {
    userId: "2",
    lastActivity: "2023-01-01T00:00:00.000Z",
    USD: 1300,
    GBP: 10000,
    EUR: -20000,
  },
];

/* eslint-disable @typescript-eslint/no-explicit-any */
export const transactionSetCorrupted1: any[] = [
  {
    user_id: "2",
    amount: "+5.00",
    currency: "USD",
    // timestamp missing
  },
  mockTransaction({
    user_id: "2",
    amount: "100.00", // + sign missing
    currency: "GBP",
  }),
  mockTransaction({
    user_id: "2",
    amount: "-200.00",
    currency: "EUR",
    timestamp: new Date("2023-01-01").toISOString(),
  }),
];
