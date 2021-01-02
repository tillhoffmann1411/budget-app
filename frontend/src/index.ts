import { AppRouter } from './router';

import './colors.scss';
import './style.scss';

import './shared/app-button';
import './shared/app-input';

import './components/home-view';
import './components/not-found-view';

import './user-module/index';

export let Router: AppRouter;

window.addEventListener('load', () => {
  Router = new AppRouter(document.querySelector('main'));
  import('./shared/app-navbar');
});
