import { IState } from '../interfaces/state';
import { router } from '../client-packages/router/router';
import { REMOVEUSER, SETUSER } from './actions';

const INITIAL_STATE: IState = {
  user: undefined,
  auth: {
    token: undefined,
    logedIn: false
  },
  transactions: []
}

export const reducer = (state = INITIAL_STATE, action: any) => {
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