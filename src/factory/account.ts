import { AccountType, Account } from "../model/account";
import { Bank } from "../model/bank";
import { OperationState } from "../model/operation";

const faker = require("faker");

export function account(
  type: AccountType,
  { code }: Bank,
  state?: OperationState
): Account {
  return {
    name:
      faker.finance.accountName() +
      " " +
      faker.random.number({ max: 9, min: 2 }),
    type,
    amount: faker.finance.amount(),
    state: state ?? OperationState.Estimated,
    date: new Date(),
    dayOfCycle: faker.random.number(30),
    bank: code,
  };
}
