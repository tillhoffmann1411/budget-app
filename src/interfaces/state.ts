import { ITransaction } from './transaction';
import { IUser } from './user';

export interface IState {
  user: IUser | null;
  auth: {
    token: string | null;
    logedIn: boolean;
  }
  transactions: ITransaction[];
}