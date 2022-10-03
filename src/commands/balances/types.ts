export interface TransactionRecord {
  user_id: string;
  timestamp: Timestamp;
  currency: Currency;
  amount: string;
}

export type CurrencyBalances = {
  [key in Currency]: number;
};

export type CurrencyBalancesPresentation = {
  [key in Currency]: string;
};

export interface BalanceOutput extends CurrencyBalances {
  userId: string;
  lastActivity: Timestamp;
}

export type Timestamp = string;

export const supportedCurrencies = ["USD", "GBP", "EUR"] as const;

export type Currency = typeof supportedCurrencies[number];
