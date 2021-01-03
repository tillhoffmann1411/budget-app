import { router } from '../../router';
import { html, customElement, LitElement, query } from "lit-element";
import { ComponentMixin } from '../../shared/component.mixin';
import './register.component.scss';
import { UserService } from '../../services/user.service';
import { removeUser, setUser } from '../../redux/actions';
import { store } from '../../redux/store';

@customElement('app-register')
export class RegisterView extends ComponentMixin(LitElement) {
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
        <app-input type="text" id="username" label="Username" placeholder=""></app-input>
        <app-input type="email" id="email" label="Email" placeholder=""></app-input>
        <app-input type="password" id="password" label="Password" placeholder=""></app-input>
        <section class="actions">
          <app-button @click="${() => router.navigate('login')}" type="button" title="Login"></app-button>
          <app-button ?isPrimary="${true}" type="submit" @click="${(e) => this.register(e)}" title="Register"></app-button>
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