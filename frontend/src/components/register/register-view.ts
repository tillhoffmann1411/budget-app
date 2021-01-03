import { router } from '../../router';
import { html, customElement, LitElement } from "lit-element";
import { ComponentMixin } from '../../shared/component.mixin';
import './register-view.scss';
import { UserService } from '../../services/user.service';

@customElement('app-register')
export class RegisterView extends ComponentMixin(LitElement) {

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="login-form">
        <app-input type="text" id="username" label="Username" placeholder=""></app-input>
        <app-input type="email" id="email" label="Email" placeholder=""></app-input>
        <app-input type="text" id="first_name" label="First name" placeholder=""></app-input>
        <app-input type="text" id="last_name" label="Last name" placeholder=""></app-input>
        <app-input type="password" id="password1" label="Password" placeholder=""></app-input>
        <app-input type="password" id="password2" label="Repeat password" placeholder=""></app-input>
        <div class="actions">
          <app-button @click="${() => router.navigate('login')}" title="Login"></app-button>
          <app-button ?isPrimary="${true}" type="submit" @click="${this.register}" title="Register"></app-button>
        </div>
      </div>
    `;
  }

  async register() {
    const user = await UserService.register({ username: 'JohnDoe', password: 'password123' });
    console.log('user:', user);
    if (user) {
      router.navigate('/');
    }
  }
}