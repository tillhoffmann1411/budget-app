import { router } from '../../router';
import { html, customElement, LitElement, query } from "lit-element";
import { ComponentMixin } from '../../shared/component.mixin';
import './login.component.scss';
import { UserService } from '../../services/user.service';
import { store } from '../../redux/store';
import { removeUser, setUser } from '../../redux/actions';

@customElement('app-login')
export class LoginView extends ComponentMixin(LitElement) {
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
      <form class="login-form">
        <app-input type="text" id="username" label="Username" ?required="${true}"></app-input>
        <app-input type="password" id="password" label="Password" ?required="${true}"></app-input>
        <section class="actions">
          <app-button @click="${() => router.navigate('register')}" title="Register" type="button"></app-button>
          <app-button ?isPrimary="${true}" @click="${(e) => this.login(e)}" type="submit" title="Login"></app-button>
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