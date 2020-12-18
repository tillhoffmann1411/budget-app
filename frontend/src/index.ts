import { AppRouter } from './router';

import './colors.scss';

import './shared/app-button';
import './shared/app-input';

import './components/signin-view';
import './components/signup-view';
import './components/home-view';
import './components/not-found-view';

export let Router: AppRouter;

window.addEventListener('load', () => {
  Router = new AppRouter(document.querySelector('main'));
  import('./shared/app-navbar');
});
