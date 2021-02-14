import Operation from './operation';

export enum AccountType {
  Asset = 'a', // activo
  Liability = 'p' // pasivo
}

export default interface Account extends Operation {
  name: string;
  type: AccountType;
  // Let's use bank code for the moment
  // and see how that goes
  bank: string;
  amount: number;
}
