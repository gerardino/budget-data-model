import { Bank } from './bank';

export enum AccountState {
  Automatic = 'a',
  Disabled = 'd',
  Pending = 'p',
  Estimated = 'e',
  Executed = 'x'
}

export enum AccountType {
  Asset = 'a',     // activo
  Liability = 'p'  // pasivo
}

export interface Account {
  name: string;
  type: AccountType;
  amount: number;
  state: AccountState;
  date: Date;
  bank: Bank;
}