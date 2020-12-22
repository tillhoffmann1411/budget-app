import { IUser } from '../../models/user';
import { removeUser, setUser } from '../../redux/actions';
import { store } from '../../redux/store';

export class AuthService {

  static signup(credentials: { username: string, password: string, email?: string, firstName?: string, lastName?: string }): Promise<IUser> {
    // TODO
    return new Promise<IUser>(() => {
      const user: IUser = {
        id: 42,
        ...credentials,
      };
      store.dispatch(setUser(user, 'ichbineinjwttoken'));
      return user;
    });
  }

  static signin(credentials: { username: string, password: string }): Promise<IUser> {
    // TODO
    return new Promise<IUser>(() => {
      console.log('logging in ....');
      const user: IUser = {
        id: 42,
        ...credentials,
      }
      store.dispatch(setUser(user, 'ichbineinjwttoken'));
      return user;
    });
  }

  static signout(): Promise<boolean> {
    // TODO
    return new Promise<boolean>(() => {
      store.dispatch(removeUser);
      return true;
    });
  }
}