import Transfer from '../model/transfer';

import Bank from '../model/bank';
import { OperationState } from '../model/operation';

import faker from 'faker';

export function transfer(
  fromBank: Bank,
  toBank: Bank,
  state = OperationState.Estimated,
  exchangeRate: number = faker.random.float({ max: 10, min: 2 }),
): Transfer {
  const amount = Number(faker.finance.amount());
  const date = new Date();

  return {
    date,
    dayOfCycle: date.getDay(),
    fromBank: fromBank.code,
    toBank: toBank.code,
    exchangeRate,
    fromAmount: amount,
    toAmount: amount * exchangeRate,
    state,
  };
}
