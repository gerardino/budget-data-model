import Currency from '../model/currency';

export function currency(name: string, symbol?: string, code?: string): Currency {
  if (!symbol) {
    symbol = name.substr(0);
  }

  if (!code) {
    code = name.substr(0, 3);
  }

  return { name, symbol, code };
}
