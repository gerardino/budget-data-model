import { Bank } from "./bank";
import { Transfer } from "./transfer";
import { AccountGroup } from "./account-group";

export interface Budget {
  banks: Bank[];
  transfers: Transfer[];
  accounts: AccountGroup;
  basedOn?: Budget;

  id: number;
  name: string;
  from: Date;
  to: Date;
}