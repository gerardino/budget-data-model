import { Currency } from "../model/currency";

export function currency(name: string, symbol?: string): Currency {
  if (!symbol) {
    symbol = name.substr(0);
  }

  return { name, symbol };
}
