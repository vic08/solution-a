import { loadJsonContent } from "./lib/loadJsonContent";
import { calculateBalances } from "./lib/calculateBalances";
import { outputBalancesResult } from "./lib/outputBalancesResult";

export const balances = (filePath: string) => {
  return loadJsonContent(filePath)
    .then(calculateBalances)
    .then(outputBalancesResult);
};
