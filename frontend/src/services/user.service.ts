import { IUser } from '../interfaces/user';
import { removeUser, setUser } from '../redux/actions';
import { store } from '../redux/store';

export class UserService {
  public static baseurl = 'http://0.0.0.0:8000'

  static register(credentials: { username: string, password: string, email?: string, name?: string }): Promise<any> {
    const user = {
      username: credentials.username,
      password1: credentials.password,
      password2: credentials.password,
      email: credentials.email,
      name: credentials.name,
    }

    const param = {
      headers: {
        'content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(user),
      method: 'POST'
    }
    return fetch(this.baseurl + '/auth/registration/', param).then(r => r.json());


    // // TODO
    // return new Promise<IUser>(() => {
    //   const user: IUser = {
    //     id: 42,
    //     ...credentials,
    //   };
    //   store.dispatch(setUser(user, 'ichbineinjwttoken'));
    //   return user;
    // });
  }

  static login(credentials: { username: string, password: string }): Promise<{ refresh: string, access: string }> {
    const param = {
      headers: {
        'content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(credentials),
      method: 'POST'
    }
    return fetch(this.baseurl + '/token/', param).then(r => r.json());


    // // TODO
    // return new Promise<IUser>(() => {
    //   console.log('logging in ....');
    //   const user: IUser = {
    //     id: 42,
    //     ...credentials,
    //   }
    //   return store.dispatch(setUser(user, 'ichbineinjwttoken'));
    //   // return user;
    // });
  }

  static signout(): Promise<boolean> {
    // TODO
    return new Promise<boolean>(() => {
      store.dispatch(removeUser);
      return true;
    });
  }
}