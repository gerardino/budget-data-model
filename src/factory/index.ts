import { Budget } from "../model/budget";
import { Bank } from "../model/bank";
import { Currency } from "../model/currency";
import { Transfer } from "../model/transfer";
import { transfer } from "./transfer";
import { account } from "./account";
import { Account, AccountType, AccountState } from "../model/account";

const faker = require('faker');

export function currency(name: string, symbol?: string): Currency {
  if (!symbol) {
    symbol = name.substr(0);
  }

  return { name, symbol };
}

export function bank(currency: Currency): Bank {
  const name = faker.company.companyName();

  return {
    amount: faker.finance.amount(),
    date: new Date(),
    currency,
    code: name.substr(0, 3),
    name,
    description: faker.company.catchPhrase()
  };
}



export function budgetBanks(numberOfBanks: number): Bank[] {
  const banks = [];
  const currencies = [
    currency('Dolar', '$'),
    currency('Quetzal', 'Q'),
    currency('Euro', '€')
  ];

  for (let i = 0; i < numberOfBanks; i++) {
    banks.push(bank(currencies[i % currencies.length]));
  }

  return banks;
}

function budgetTransfers(banks: Bank[]): Transfer[] {
  const transfers = [];

  // Lets just do one bank transfer from the first bank to the rest
  const source = banks[0];

  for (let i = 1; i < banks.length; i++) {
    transfers.push(transfer(source, banks[i]));
  }

  return transfers;
}

function budgetAccounts(banks: Bank[]): Account[] {
  const accounts: Account[] = [];

  const types = [AccountType.Asset, AccountType.Liability];
  const states = [AccountState.Estimated, AccountState.Executed, AccountState.Pending];
  // Three accounts per bank account
  banks.forEach((bank, index) => {
    accounts.push(account(types[index % 2], bank, states[index % 3]));
  });

  return accounts;
}

export function budget(): Budget {
  const from = new Date();
  from.setHours(0, 0, 0, 0);

  const end = new Date(from.getTime());
  end.setMonth(end.getMonth() + 1);

  const banks = budgetBanks(3);

  return {
    banks,
    transfers: budgetTransfers(banks),
    accounts: {
      name: 'Default',
      accounts: budgetAccounts(banks),
      groups: [
        {
          name: 'Special expenses',
          accounts: budgetAccounts([banks[0]]),
          groups: []
        }
      ]
    },

    id: faker.random.number({min: 1000, max: 9999}),
    name: 'Test',
    from,
    to: end
  };
}