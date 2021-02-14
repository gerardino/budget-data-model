import Operation from './operation';

export default interface Transfer extends Operation {
  exchangeRate: number;
  // Let's use bank code for the moment
  // and see how that goes
  fromBank: string;
  fromAmount: number;
  // Let's use bank code for the moment
  // and see how that goes
  toBank: string;
  toAmount: number;

  notes?: string;
}
