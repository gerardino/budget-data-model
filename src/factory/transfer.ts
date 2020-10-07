import { Transfer, TransferState } from "../model/transfer";
import { Bank } from "../model/bank";
const faker = require('faker');

export function transfer(from: Bank, to: Bank,
    state: TransferState = TransferState.Estimated,
    exchangeRate: number = faker.random.float({max: 10, min: 2})): Transfer {
  const amount = faker.finance.amount();
  
  return {
    date: new Date,
    from,
    to,
    exchangeRate,
    amountFrom: amount,
    amountTo: amount * exchangeRate,
    state
  };
}