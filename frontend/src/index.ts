import { AppRouter } from './router';

import './colors.scss';
import './style.scss';

import './shared/button/app-button';
import './shared/input/app-input';

import './components/home-view';
import './components/not-found-view';

import './user-module/index';

export let Router: AppRouter;

window.addEventListener('load', () => {
  Router = new AppRouter(document.querySelector('main'));
  import('./shared/navbar/app-navbar');
});
