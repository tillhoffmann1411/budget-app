import { customElement, html, LitElement } from 'lit-element';
import { Router } from '../index';

@customElement('app-navbar')
export class AppNavbar extends LitElement {
  render() {
    return html`
      <div>
        <nav>
          <app-button @click="${Router.render('/')}">Home</app-button>
          <app-button @click="${Router.render('/signin')}">Signin</app-button>
          <app-button @click="${Router.render('/signup')}">Register</app-button>
        </nav>
      </div>
    `;
  }

}