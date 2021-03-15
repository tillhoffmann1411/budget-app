
import './colors.scss';
import './style.scss';


import './router';


import './shared/button/app-button';
import './shared/input/app-input';
import './shared/navbar/app-navbar';


import './components/root/root.component';
import './components/not-found/not-found.component';
import './components/root/root.component';
import './components/not-found/not-found.component';
import './components/login/login.component';
import './components/register/register.component';
import './components/transaction/transaction.component';
import { router } from './router';
import { store } from './redux/store';
import { setUser } from './redux/actions';


window.onload = checkUser;
function checkUser() {
  if (localStorage.getItem('token')) {
    store.dispatch(setUser({ username: '', id: NaN }, localStorage.getItem('token')));
    router.navigate('transaction');
  }
  else {
    router.navigate('login');
  }
};