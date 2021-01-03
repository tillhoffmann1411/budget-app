
import './colors.scss';
import './style.scss';

import './components/home/home-view';
import './components/not-found/not-found-view';

import './shared/index';
import { UserModule } from './user-module/index';

import './shared/navbar/app-navbar';

import { Router } from './router';
import { Home } from './components/home/home-view';
import { NotFoundView } from './components/not-found/not-found-view';

export let router: Router;

window.addEventListener('load', () => {
  // Router = new AppRouter(document.querySelector('main'));
  router = new Router(document.querySelector('main'), [
    {
      path: '/',
      component: new Home
    },
    {
      path: '/user',
      children: UserModule.routes,
    },
  ],
    {
      pageNotFound: new NotFoundView
    });
});
