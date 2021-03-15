import { IUser } from '../interfaces/user';

export const SETUSER = 'Set User';
export const REMOVEUSER = 'Remove User';


export const setUser = (user: IUser, token: string) => {
  return {
    type: SETUSER,
    user,
    token
  }
}

export const removeUser = () => {
  return {
    type: REMOVEUSER,
  }
}