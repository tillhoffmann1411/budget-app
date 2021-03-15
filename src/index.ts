import { router } from './client-packages/router/router';

import './styles/colors.scss';
import './style.scss';


import './components/navbar/app-navbar';
import './components/root/root.component';

import './views/not-found/not-found.component';
import './views/login/login.component';
import './views/register/register.component';
import './views/transaction/transaction.component';

window.onload = checkUser;
function checkUser() {
  if (localStorage.getItem('token')) {
    router.navigate('transaction');
  }
  else {
    router.navigate('login');
  }
};