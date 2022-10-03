import { BalanceOutput } from "../types";
import {
  activityDateOutput,
  balanceValueStringRepresentation,
} from "./balanceUtil";
import Table from "cli-table";

export function outputBalancesResult(balances: BalanceOutput[]): void {
  const table = new Table({
    head: ["User ID", "GBP", "USD", "EUR", "Last Activity"],
  });

  balances.forEach((item) => {
    table.push([
      item.userId,
      balanceValueStringRepresentation(item.GBP),
      balanceValueStringRepresentation(item.USD),
      balanceValueStringRepresentation(item.EUR),
      activityDateOutput(item.lastActivity),
    ]);
  });

  console.log(table.toString());
}
