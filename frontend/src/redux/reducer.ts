export const UserFilters = {};

export interface IUserState {
  id: number;
  logedIn: boolean;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}

const INITIAL_STATE: IUserState = {
  logedIn: false,
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  id: NaN
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}