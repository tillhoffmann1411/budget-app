import { LitElement, html, property, css } from "lit-element";

class SignIn extends LitElement {

  static get styles() {
    return css``;
  }

  constructor() {
    super();
  }


  render() {
    return html`
      <div class="signin-form">
        <app-input type="text" id="username" label="Username" placeholder=""></app-input>
        <app-input type="password" id="password" label="Password" placeholder=""></app-input>
        <app-button @click="${this.signin}">Login</app-button>
      </div>
    `;
  }

  signin() {
    alert('Login !!!!');
  }

}


customElements.define("app-signin", SignIn);