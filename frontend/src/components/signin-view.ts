import { Router } from '../index';
import { html, css, customElement, LitElement } from "lit-element";

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
        flex-direction: row-reverse;
        margin: 15px;
      }
    `;
  }

  render() {
    return html`
      <div class="signin-form">
        <app-input type="text" id="username" label="Username" placeholder=""></app-input>
        <app-input type="password" id="password" label="Password" placeholder=""></app-input>
        <div class="actions">
          <app-button ?isPrimary="${true}" type="submit" @click="${this.signin}">Login</app-button>
        </div>
      </div>
    `;
  }

  signin() {
    Router.render('/');
  }

}