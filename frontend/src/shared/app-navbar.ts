import { customElement, html } from 'lit-element';
import { BaseView } from '../components/base-view';
import { Router } from '../index';

@customElement('app-navbar')
export class AppNavbar extends BaseView {
  render() {
    return html`
      <div>
        <nav>
          <app-button @click="${this.goToHome}" title="Home"></app-button>
          <app-button @click="${this.goToSignin}" title="Login"></app-button>
          <app-button @click="${this.goToSignup}" title="Register"></app-button>
        </nav>
      </div>
    `;
  }

  goToHome() {
    Router.render('/');
  }
  goToSignin() {
    Router.render('/signin')
  }
  goToSignup() {
    Router.render('/signup')
  }

}