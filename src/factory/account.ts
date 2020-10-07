import { AccountType, Account, AccountState } from "../model/account";
import { Bank } from "../model/bank";

const faker = require("faker");

export function account(
  type: AccountType,
  bank: Bank,
  state?: AccountState
): Account {
  return {
    name:
      faker.finance.accountName() +
      " " +
      faker.random.number({ max: 9, min: 2 }),
    type,
    amount: faker.finance.amount(),
    state: state ?? AccountState.Estimated,
    date: new Date(),
    bank,
  };
}
