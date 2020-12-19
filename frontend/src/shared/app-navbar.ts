import { customElement, html } from 'lit-element';
import { connect } from 'pwa-helpers'

import { store } from '../redux/store';
import { Router } from '../index';
import { BaseView } from '../components/base-view';
import { IUserState } from '../redux/reducer';

@customElement('app-navbar')
export class AppNavbar extends connect(store)(BaseView) {
  isLogedIn = false;

  stateChanged(state: IUserState) {
    this.isLogedIn = state.logedIn;
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
      <app-button @click="${this.goToHome}" title="Home"></app-button>
      <app-button @click="${this.goToSignin}" title="Login"></app-button>
      <app-button @click="${this.goToSignup}" title="Register"></app-button>
    `;
  }

  getLogedIn() {
    return html`
      <app-button @click="${this.goToHome}" title="Home"></app-button>
      <app-button @click="${this.logout}" title="Logout"></app-button>
    `;
  }

  logout() {

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