import * as account from './model/account';
import * as accountGroup from './model/account-group';
import * as bank from './model/bank';
import * as budget from './model/budget';
import * as currency from './model/currency';
import * as transfer from './model/transfer';

export default {
  ...account,
  ...accountGroup,
  ...bank,
  ...budget,
  ...currency,
  ...transfer,
};
