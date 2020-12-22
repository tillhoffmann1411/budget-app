import { ITransaction } from '../models/transaction';
import { IUser } from '../models/user';
import { REMOVEUSER, SETUSER } from './actions';

export interface IAppState {
  user: IUser | null;
  auth: {
    token: string | null;
    logedIn: boolean;
  }
  transactions: ITransaction[];
}

const INITIAL_STATE: IAppState = {
  user: null,
  auth: {
    token: null,
    logedIn: false
  },
  transactions: []
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SETUSER:
      console.log('seting user: ', action);
      return {
        ...state,
        auth: {
          token: action.token,
          logedIn: true
        },
        user: action.user
      };

    case REMOVEUSER:
      return INITIAL_STATE;

    default:
      return state;
  }
}