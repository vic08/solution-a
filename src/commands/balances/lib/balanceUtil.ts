export function parseTransactionValueInCents(value: string): number {
  const sign = value[0];

  const dotSymbol = value[value.length - 3];

  if (dotSymbol !== ".") {
    throw new Error(
      `Transaction value must have exactly 2 decimal digits. Got ${value} instead`
    );
  }

  const valueCents = parseInt(value.substring(1).replace(".", ""));

  if (sign === "+") {
    return valueCents;
  } else if (sign === "-") {
    return valueCents * -1;
  } else {
    throw new Error(`Unknown transaction value format: ${value}.`);
  }
}

export function balanceValueStringRepresentation(valueCents: number): string {
  const sign = valueCents >= 0 ? "+" : "-";
  const valueString =
    valueCents >= 0
      ? valueCents.toString()
      : valueCents.toString().substring(1);
  let valueDecimalPart = valueString.substring(valueString.length - 2);
  let valueIntegerPart = valueString.substring(0, valueString.length - 2);

  if (valueString.length === 1) {
    valueDecimalPart = "0" + valueDecimalPart;
    valueIntegerPart = "0";
  } else if (valueString.length === 2) {
    valueIntegerPart = "0";
  }

  return `${sign}${valueIntegerPart}.${valueDecimalPart}`;
}

export function activityDateOutput(dateInput: string): string {
  return new Date(dateInput).toLocaleDateString();
}
