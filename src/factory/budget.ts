import { bank, currency } from '.';
import { AccountType } from '../model/account';
import Account from '../model/account';
import AccountGroup from '../model/account-group';
import Bank from '../model/bank';
import Budget from '../model/budget';
import Currency from '../model/currency';
import { OperationState } from '../model/operation';
import Transfer from '../model/transfer';
import { account } from './account';
import { transfer } from './transfer';

import faker from 'faker';

function budgetCurrencies() {
  return [
    currency('Dolar', '$'),
    currency('Quetzal', 'Q'),
    currency('Euro', '€'),
  ];
}

function budgetBanks(numberOfBanks: number): Bank[] {
  const banks = [];
  const currencies = budgetCurrencies();

  for (let i = 0; i < numberOfBanks; i++) {
    banks.push(bank(currencies[i % currencies.length]));
  }

  return banks;
}

/**
 * Generates a list of transfers between banks.
 * @param banks
 */
function budgetTransfers(banks: Bank[]): Transfer[] {
  const transfers = [];

  // Lets just do one bank transfer from the first bank to the rest
  const source = banks[0];

  for (let i = 1; i < banks.length; i++) {
    transfers.push(transfer(source, banks[i]));
  }

  return transfers;
}

/**
 * Based on a set of bank accounts, it generates a set of accounts for
 * a budget.
 * @param banks
 */
function budgetAccounts(banks: Bank[]): Account[] {
  const accounts: Account[] = [];

  const types = [AccountType.Asset, AccountType.Liability];
  const states = [
    OperationState.Estimated,
    OperationState.Executed,
    OperationState.Pending,
  ];
  // Three accounts per bank account
  banks.forEach((bank, index) => {
    accounts.push(account(types[index % 2], bank, states[index % 3]));
  });

  return accounts;
}

function mapBanks(banks: Bank[]): Record<string, Bank> {
  return banks.reduce((map: Record<string, Bank>, bank: Bank) => {
    map[bank.code] = bank;
    return map;
  }, {});
}

function mapCurrencies(currencies: Currency[]): Record<string, Currency> {
  return currencies.reduce((map: Record<string, Currency>, currency: Currency) => {
    map[currency.code] = currency;
    return map;
  },
  {});
}

/**
 * Fabricates a valid budget with random data.
 */
export function budget(): Budget {
  const from = new Date();
  from.setHours(0, 0, 0, 0);

  const end = new Date(from.getTime());
  end.setMonth(end.getMonth() + 1);

  const banks = budgetBanks(3);

  return {
    currencies: mapCurrencies(budgetCurrencies()),
    banks: mapBanks(banks),
    transfers: budgetTransfers(banks),
    accounts: banks.map(
      (b) => new AccountGroup(
        `Special expenses #${faker.random.number(100)}`,
        b.currency,
        budgetAccounts([b]),
      ),
    ),

    id: faker.random.number({ min: 1000, max: 9999 }),
    name: `Test Budget ${faker.random.number(100)}`,
    from,
    to: end,
  };
}
