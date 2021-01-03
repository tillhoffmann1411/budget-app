import { customElement, html, LitElement } from 'lit-element';

import { ComponentMixin } from '../component.mixin';
import { router } from '../../router';
import { store } from '../../redux/store';
import { removeUser } from '../../redux/actions';

@customElement('app-navbar')
export class AppNavbar extends ComponentMixin(LitElement) {
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
      <div>
        <nav>
          ${this.isLogedIn ? this.getLogedIn() : this.getNotLogedIn()}
        </nav>
      </div>
    `;
  }


  getNotLogedIn() {
    return html`
      <app-button @click="${() => router.navigate('login')}" title="Login"></app-button>
      <app-button @click="${() => router.navigate('register')}" title="Register"></app-button>
    `;
  }

  getLogedIn() {
    return html`
      <app-button @click="${this.logout}" title="Logout"></app-button>
    `;
  }

  logout() {
    store.dispatch(removeUser());
  }

}