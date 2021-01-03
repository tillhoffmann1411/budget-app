import { router } from '../../../index';
import { html, customElement } from "lit-element";
import { BaseView } from '../../../components/base-view';
import './signin-view.scss';
import { AuthService } from '../../services/auth.service';
import { store } from '../../../redux/store';

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
          <app-button @click="${() => router.navigate('/user/signup')}" title="Register"></app-button>
          <app-button ?isPrimary="${true}" type="submit" @click="${this.signin}" title="Login"></app-button>
        </div>
      </div>
    `;
  }

  async signin() {
    const user = await AuthService.signin({ username: 'JohnDoe', password: 'password123' });
    console.log('user:', user);
  }

}