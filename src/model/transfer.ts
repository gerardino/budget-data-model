import { Bank } from './bank';

export enum TransferState {
  Disabled = 'd',
  Pending = 'p',
  Estimated = 'e',
  Executed = 'x'
}

export interface Transfer {
  date: Date;
  from: Bank;
  to: Bank;
  exchangeRate: number;
  amountFrom: number;
  amountTo: number;
  state: TransferState;
}
