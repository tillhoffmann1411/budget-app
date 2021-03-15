import { IState } from '../interfaces/state';
import { router } from '../router';
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
      window.localStorage.setItem('token', action.token);
      return {
        ...state,
        auth: {
          token: action.token,
          logedIn: true
        },
        user: action.user
      };

    case REMOVEUSER:
      window.localStorage.clear();
      router.navigate('login');
      return INITIAL_STATE;

    default:
      return state;
  }
}