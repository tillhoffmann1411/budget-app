import { Router } from '../index';
import { html, css, customElement, LitElement } from "lit-element";
import { BaseView } from './base-view';

@customElement('app-signin')
export class SignInView extends LitElement {

  constructor() {
    super();
  }

  static get styles() {
    return css`
      .signin-form {
        max-width: 30em;
      }
        
      .actions {
        display: flex;
        margin: 15px;
        justify-content: flex-end;
      }
    `;
  }

  render() {
    return html`
      <div class="signin-form">
        <app-input type="text" id="username" label="Username" placeholder=""></app-input>
        <app-input type="password" id="password" label="Password" placeholder=""></app-input>
        <div class="actions">
          <app-button type="submit" @click="${this.signup}">Register</app-button>
          <app-button ?isPrimary="${true}" type="submit" @click="${this.signin}">Login</app-button>
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