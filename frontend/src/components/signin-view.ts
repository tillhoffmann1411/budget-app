import { Router } from '../index';
import { html, customElement } from "lit-element";
import { BaseView } from './base-view';
import './signin-view.scss';

@customElement('app-signin')
export class SignInView extends BaseView {

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="signin-form">
        <app-input type="text" id="username" label="Username" placeholder=""></app-input>
        <app-input type="password" id="password" label="Password" placeholder=""></app-input>
        <div class="actions">
          <app-button type="submit" @click="${this.signup}" title="Register"></app-button>
          <app-button ?isPrimary="${true}" type="submit" @click="${this.signin}" title="Login"></app-button>
        </div>
      </div>
    `;
  }

  signin() {
    Router.render('/');
  }

  signup() {
    Router.render('/signup');
  }

}