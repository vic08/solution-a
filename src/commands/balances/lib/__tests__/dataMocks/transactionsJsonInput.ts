import { TransactionRecord } from "../../../types";

export const transactionsInput1: TransactionRecord[] = [
  {
    user_id: "100500",
    currency: "USD",
    timestamp: new Date("2022-01-01").toISOString(),
    amount: "+100.00",
  },
  {
    user_id: "100500",
    currency: "GBP",
    timestamp: new Date("2022-01-01").toISOString(),
    amount: "-100.00",
  },
  {
    user_id: "100500",
    currency: "EUR",
    timestamp: new Date("2022-01-01").toISOString(),
    amount: "+100.01",
  },
];

/* eslint-disable @typescript-eslint/no-explicit-any */
export const transactionsInputCorrupted1: any[] = [
  {
    user_id: false, // wrong type
    currency: "USD",
    timestamp: new Date("2022-01-01").toISOString(),
    amount: "+100.00",
  },
];

/* eslint-disable @typescript-eslint/no-explicit-any */
export const transactionsInputCorrupted2: any[] = [
  {
    user_id: "100500",
    currency: "pound", // wrong currency string
    timestamp: new Date("2022-01-01").toISOString(),
    amount: "+100.00",
  },
];

/* eslint-disable @typescript-eslint/no-explicit-any */
export const transactionsInputCorrupted3: any[] = [
  {
    user_id: "100500",
    currency: "GBP",
    timestamp: 100500, // wrong type
    amount: "+100.00",
  },
];

/* eslint-disable @typescript-eslint/no-explicit-any */
export const transactionsInputCorrupted4: any[] = [
  {
    user_id: "100500",
    currency: "EUR",
    timestamp: new Date("2022-01-01").toISOString(),
    amount: "100.00", // wrong format (+ sign forgotten)
  },
];
