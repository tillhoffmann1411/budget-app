import { html, customElement, LitElement } from "lit-element";
import { IState } from '../../interfaces/state';
import { IUser } from '../../interfaces/user';
import { router } from '../../router';
import { ComponentMixin } from '../../shared/component.mixin';
import './root.component.scss';

@customElement('app-root')
export class AppRoot extends ComponentMixin(LitElement) {
  user: IUser

  constructor() {
    super();
  }

  stateChanged(state: IState) {
    this.user = state.user;
    this.requestUpdate();
  }

  render() {
    return html`
      <app-navbar></app-navbar>
      <div>${this.renderOutlet()}</div>
    `;
  }

  renderOutlet() {
    switch (router.getPath()) {
      case 'login':
        return html`
                <app-login></app-login>
            `
      case 'register':
        return html`
                <app-register></app-register>
            `
      case 'transaction':
        return html`
                <app-transaction></app-transaction>
            `
      default:
        router.navigate('');
        return html`
                <app-not-found></app-not-found>
            `
    }
  }

  async firstUpdated() {
    router.subscribe(() => {
      this.requestUpdate();
    });
    console.log("User not detected. Forcing manual login!");
    router.navigate("login");
  }
}