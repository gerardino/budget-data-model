import { Account, AccountType } from "./account";
import { Currency } from "./currency";
import { OperationState } from "./operation";

export class AccountGroup {
  constructor(
    public name: string,
    public currency: Currency,
    public accounts: Account[] = []
  ) {}

  /**
   * Returns the total for all the accounts. They can be filtered
   * by type or state.
   * @param {AccountType} type Type of account
   * @param {OperationState} state State of the account
   * @returns {number}
   */
  getTotal(type?: AccountType, state?: OperationState): number {
    return this.accounts.reduce((total: number, a: Account): number => {
      return (type === null || type === a.type) &&
        (state === null || state === a.state)
        ? total + (a.type === AccountType.Asset ? a.amount : -a.amount)
        : total;
    }, 0);
  }
}
