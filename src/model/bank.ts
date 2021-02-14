export default interface Bank {
  amount: number;
  // Changing to string code, let's see how it goes
  currency: string;
  code: string;
  name: string;
  description?: string;
}
