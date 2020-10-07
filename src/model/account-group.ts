import { Account } from './account';

export interface AccountGroup {
  name: string;
  accounts: Account[];
  groups: AccountGroup[];
}