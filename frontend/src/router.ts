import { Router } from '@vaadin/router';

export class AppRouter extends Router {

  constructor(outlet: Node) {
    super(outlet);
    this.initRoutes();
  }

  initRoutes() {
    super.setRoutes([
      {
        path: '/',
        component: 'app-signin'
      },
      {
        path: '/signin',
        component: 'app-signin',
      },
      {
        path: '/signup',
        component: 'app-signup',
      },
      {
        path: '(.*)', // Page not found
        component: 'app-not-found'
      }
    ]);
  }
}

