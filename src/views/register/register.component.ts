import { router } from '../../client-packages/router/router';
import { html, customElement, LitElement, query } from "lit-element";
import { UserService } from '../../services/user.service';
import { removeUser, setUser } from '../../redux/actions';
import { store } from '../../redux/store';
import { PageMixin } from '../../client-packages/page-mixin/page.mixin';

import './register.component.scss';

@customElement('app-register')
export class RegisterView extends PageMixin(LitElement) {
  @query("form")
  form!: HTMLFormElement;

  @query("#username")
  username!: HTMLInputElement;

  @query("#email")
  email!: HTMLInputElement;

  @query("#password")
  password!: HTMLInputElement;


  constructor() {
    super();
  }

  render() {
    return html`
      <form class="login-form">
        <section>
          <label for="email">Email</label>
          <input id="email" type="email" placeholder="john@example.com" required />
        </section>
      
        <section>
          <label for="password">Password</label>
          <input id="password" type="password" required />
        </section>
      
        <section class="actions">
          <button @click="${() => router.navigate('login')}" type="button">Login</button>
          <button class="primary" type="submit" @click="${(e: MouseEvent) => this.register(e)}">Register</button>
        </section>
      </form>
    `;
  }

  firstUpdated() {
    this.addEventListener("keyup", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      this.register(event);
    })
  }


  async register(event: Event) {
    event.preventDefault();
    const valid = this.form.checkValidity();

    if (valid) {
      const response = await UserService.register({
        username: this.username.value,
        password: this.password.value,
        email: this.email.value
      });

      if (response.token) {
        store.dispatch(setUser({ username: response.user.username, id: response.user.pk, email: response.user.email }, response.token));
        router.navigate('/transaction');
      } else {
        store.dispatch(removeUser());
        console.log('Login fehlgeschlagen!');
      }
    }
  }
}