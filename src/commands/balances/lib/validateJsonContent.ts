import { supportedCurrencies, TransactionRecord } from "../types";
import Ajv from "ajv";

export function validateJsonContent(jsonContent: TransactionRecord): void {
  const schema = {
    type: "object",
    properties: {
      user_id: {
        type: "string",
      },
      timestamp: {
        type: "string",
      },
      currency: {
        type: "string",
        pattern: `^(${supportedCurrencies.join("|")})$`,
      },
      amount: {
        type: "string",
        pattern: "^(\\+|-)[0-9]+\\.[0-9]{2}$",
      },
    },
    required: ["user_id", "timestamp", "currency", "amount"],
  };

  const ajv = new Ajv();
  const validate = ajv.compile(schema);

  if (!validate(jsonContent)) {
    throw new Error(`Json content is invalid. ${validate.errors}`);
  }
}
