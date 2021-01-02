import { AppRouter } from './router';

import './colors.scss';
import './style.scss';

import './components/home/home-view';
import './components/not-found/not-found-view';

import './shared/index';
import './user-module/index';


export let Router: AppRouter;

window.addEventListener('load', () => {
  Router = new AppRouter(document.querySelector('main'));
  import('./shared/navbar/app-navbar');
});
