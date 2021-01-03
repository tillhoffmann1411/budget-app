import { router } from '../../router';
import { html, customElement, LitElement, query } from "lit-element";
import { ComponentMixin } from '../../shared/component.mixin';
import './register-view.scss';
import { UserService } from '../../services/user.service';

@customElement('app-register')
export class RegisterView extends ComponentMixin(LitElement) {
  @query("form")
  form!: HTMLFormElement;

  @query("#username")
  username!: HTMLInputElement;

  @query("#email")
  email!: HTMLInputElement;

  @query("#name")
  name!: HTMLInputElement;

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
        <app-input type="text" id="name" label="Name" placeholder=""></app-input>
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
        name: this.name.value,
        email: this.email.value
      });
      console.log(response);
      if (response.status === 200) {
        console.log(response.body);
        router.navigate('/transaction');
      } else {
        console.log('Login fehlgeschlagen!');
      }
    }
  }
}