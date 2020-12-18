import { Router } from '../index';
import { html, css, customElement, LitElement } from "lit-element";

@customElement('app-signup')
export class SignupnView extends LitElement {

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
        <app-input type="email" id="email" label="Email" placeholder=""></app-input>
        <app-input type="text" id="first_name" label="First name" placeholder=""></app-input>
        <app-input type="text" id="last_name" label="Last name" placeholder=""></app-input>
        <app-input type="password" id="password1" label="Password" placeholder=""></app-input>
        <app-input type="password" id="password2" label="Repeat password" placeholder=""></app-input>
        <div class="actions">
          <app-button type="submit" @click="${this.signin}">Login</app-button>
          <app-button ?isPrimary="${true}" type="submit" @click="${this.signup}">Register</app-button>
        </div>
      </div>
    `;
  }

  signup() {
    Router.render('/');
  }

  signin() {
    Router.render('/signin');
  }

}