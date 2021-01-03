import { SignInView } from './components/signin/signin-view';
import { SignupView } from './components/signup/signup-view';

export class UserModule {
  public static routes = [
    {
      path: '/signin',
      component: new SignInView
    },
    {
      path: '/signup',
      component: new SignupView
    }
  ];
}