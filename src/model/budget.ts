import { Bank } from "./bank";
import { Transfer } from "./transfer";
import { AccountGroup } from "./account-group";
import { Currency } from "./currency";

export interface Budget {
  currencies: Record<string, Currency>;
  banks: Record<string, Bank>;
  transfers: Transfer[];
  accounts: AccountGroup[];
  basedOn?: Budget;

  id: number;
  name: string;
  from: Date;
  to: Date;
}