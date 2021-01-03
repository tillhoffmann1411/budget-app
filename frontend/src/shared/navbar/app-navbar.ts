import { customElement, html } from 'lit-element';
import { connect } from 'pwa-helpers'

import { store } from '../../redux/store';
import { BaseView } from '../base-view';
import { IAppState } from '../../redux/reducer';
import { router } from '../../router';

@customElement('app-navbar')
export class AppNavbar extends connect(store)(BaseView) {
  isLogedIn = false;

  stateChanged(state: IAppState) {
    this.isLogedIn = state.auth.logedIn;
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

  }

}