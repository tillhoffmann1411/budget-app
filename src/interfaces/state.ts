import { ITransaction } from './transaction';
import { IUser } from './user';

export interface IState {
  user: IUser | undefined;
  auth: {
    token: string | undefined;
    logedIn: boolean;
  }
  transactions: ITransaction[];
}