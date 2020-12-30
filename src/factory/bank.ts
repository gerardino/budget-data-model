import { Bank } from "../model/bank";
import { Currency } from "../model/currency";

const faker = require('faker');

export function bank(currency: Currency): Bank {
  const name = faker.company.companyName();

  return {
    amount: faker.finance.amount(),
    currency: currency.code,
    code: name.substr(0, 3),
    name,
    description: faker.company.catchPhrase()
  };
}