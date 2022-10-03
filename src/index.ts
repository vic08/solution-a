import { Command } from "commander";
import { balances } from "./commands/balances";

const cli = new Command();

cli.name("aave-test").version("0.1.0");

cli
  .command("balances")
  .argument("filePath", "JSON input file path")
  .action(balances);

cli.parse(process.argv);
