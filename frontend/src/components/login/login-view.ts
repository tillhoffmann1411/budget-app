import { router } from '../../router';
import { html, customElement, LitElement } from "lit-element";
import { ComponentMixin } from '../../shared/component.mixin';
import './login-view.scss';
import { UserService } from '../../services/user.service';

@customElement('app-login')
export class LoginView extends ComponentMixin(LitElement) {

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="login-form">
        <app-input type="text" id="username" label="Username" placeholder=""></app-input>
        <app-input type="password" id="password" label="Password" placeholder=""></app-input>
        <div class="actions">
          <app-button @click="${() => router.navigate('register')}" title="Register"></app-button>
          <app-button ?isPrimary="${true}" type="submit" @click="${this.login}" title="Login"></app-button>
        </div>
      </div>
    `;
  }

  async login() {
    const user = await UserService.login({ username: 'JohnDoe', password: 'password123' });
    console.log('user:', user);
  }

}