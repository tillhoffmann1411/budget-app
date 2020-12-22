import { Router } from '../index';
import { html, customElement } from "lit-element";
import { BaseView } from '../components/base-view';
import './signup-view.scss';
import { AuthService } from './services/auth.service';

@customElement('app-signup')
export class SignupnView extends BaseView {

  constructor() {
    super();
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
          <app-button type="submit" @click="${this.signin}" title="Login"></app-button>
          <app-button ?isPrimary="${true}" type="submit" @click="${this.signup}" title="Register"></app-button>
        </div>
      </div>
    `;
  }

  async signup() {
    const user = await AuthService.signup({ username: 'JohnDoe', password: 'password123' });
    console.log('user:', user);
    if (user) {
      Router.render('/');
    }
  }

  signin() {
    Router.render('/signin');
  }

}