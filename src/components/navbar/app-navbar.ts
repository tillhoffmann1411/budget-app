import { customElement, html, LitElement } from 'lit-element';

import { router } from '../../client-packages/router/router';
import { store } from '../../redux/store';
import { removeUser } from '../../redux/actions';
import { PageMixin } from '../../client-packages/page-mixin/page.mixin';

import './app-navbar.scss';

@customElement('app-navbar')
export class AppNavbar extends PageMixin(LitElement) {
  isLogedIn = false;

  constructor() {
    super();
    store.subscribe(() => {
      if (this.isLogedIn !== store.getState().auth.logedIn) {
        this.isLogedIn = store.getState().auth.logedIn;
        this.requestUpdate();
      }
    })
  }

  render() {
    return html`
      <nav>
        ${this.isLogedIn ? this.getLogedIn() : this.getNotLogedIn()}
      </nav>
    `;
  }


  getNotLogedIn() {
    return html`
      <button @click="${() => router.navigate('login')}">Login</button>
      <button @click="${() => router.navigate('register')}">Register</button>
    `;
  }

  getLogedIn() {
    return html`
      <button @click="${this.logout}">Logout</button>
    `;
  }

  logout() {
    store.dispatch(removeUser());
  }

}