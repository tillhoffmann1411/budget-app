import { Router } from '@vaadin/router';

export class AppRouter extends Router {

  constructor(outlet: Node) {
    super(outlet);
    this.initRoutes();
  }

  initRoutes() {
    this.setRoutes([
      {
        path: '/',
        component: 'app-home'
      },
      {
        path: '/signin',
        component: 'app-signin',
      },
      {
        path: '(.*)', // Page not found
        component: 'app-not-found'
      }
    ]);
  }
}

