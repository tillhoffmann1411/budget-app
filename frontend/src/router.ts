interface IRoute {
  path: string,
  component?: Node,
  children?: IRoute[]
}

export class Router {
  private routes: IRoute[];
  private currentPath: string;

  constructor(private outlet: HTMLElement, routes?: IRoute[], private config?: { pageNotFound?: Node }) {
    this.routes = routes;
    this.currentPath = window.location.pathname;

    const activeRoutes = Array.from(document.querySelectorAll('[route]'));
    activeRoutes.forEach(r => r.addEventListener('click', this.nativeNavigate.bind(this), false))
    this.navigate(this.currentPath);
  }

  setRoutes(routes: IRoute[]) {
    this.routes = routes;
  }


  navigate(path: string) {
    window.history.pushState(null, '', path);
    this.outlet.innerHTML = '';
    this.outlet.append(this.getComponent(path));
  }

  private nativeNavigate(event) {
    const path = (event.target.attributes as NamedNodeMap).getNamedItem('route').value;
    console.log(path);
    this.navigate(path);
  }

  private getComponent(path: string): Node {
    const pathSegments = path.split('/').filter(p => p.length > 0);                       // Split Path into array
    if (pathSegments.length === 0) {
      return this.routes.filter(r => r.path === '/')[0].component;
    }
    const route = this.recGetChild(pathSegments, { path: '', children: this.routes });    // Recursive start call with dummy route object
    if (!route) {
      return this.config.pageNotFound;
    }
    return route.component;
  }

  private recGetChild(path: string[], route: IRoute): IRoute {
    if (path.length === 0 || !route.children) {                                           // Stop when Path array is empty or no children in route object are available
      return route;
    }

    const child = route.children.filter(r => r.path === '/' + path[0])[0];
    path.shift();
    return this.recGetChild(path, child);
  }
}