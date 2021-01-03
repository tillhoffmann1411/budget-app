import { IState } from '../interfaces/state';
import { REMOVEUSER, SETUSER } from './actions';

const INITIAL_STATE: IState = {
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