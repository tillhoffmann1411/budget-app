import { router } from '../../client-packages/router/router';
import { html, customElement, LitElement, query } from "lit-element";
import { PageMixin } from '../../client-packages/page-mixin/page.mixin';
import { UserService } from '../../services/user.service';
import { store } from '../../redux/store';
import { removeUser, setUser } from '../../redux/actions';

import './login.component.scss';

@customElement('app-login')
export class LoginView extends PageMixin(LitElement) {
  @query("form")
  form!: HTMLFormElement;

  @query("#username")
  username!: HTMLInputElement;

  @query("#password")
  password!: HTMLInputElement;



  constructor() {
    super();
  }

  render() {
    return html`
      <form>
        <section>
          <label for="email">Email</label>
          <input id="email" type="email" placeholder="john@example.com" required />
        </section>
      
        <section>
          <label for="password">Password</label>
          <input id="password" type="password" required />
        </section>
      
        <section class="actions">
          <button @click="${() => router.navigate('register')}" type="button">Register</button>
          <button @click="${(e: MouseEvent) => this.login(e)}" type="submit" class="primary">Login</button>
        </section>
      </form>
    `;
  }

  firstUpdated() {
    this.addEventListener("keyup", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      this.login(event);
    })
  }

  async login(event: Event) {
    event.preventDefault();
    const valid = this.form.checkValidity();

    if (valid) {
      const response = await UserService.login({ username: this.username.value, password: this.password.value });
      if (response.access) {
        store.dispatch(setUser({ username: '', id: 2 }, response.access));
        router.navigate('/transaction');
      } else {
        store.dispatch(removeUser());
        console.log('Login fehlgeschlagen!');
      }
    }
  }

}
