import { html, customElement, LitElement } from "lit-element";
import { PageMixin } from '../../client-packages/page-mixin/page.mixin';
import { IState } from '../../interfaces/state';
import { IUser } from '../../interfaces/user';
import { router } from '../../client-packages/router/router';

import './root.component.scss';

@customElement('app-root')
export class AppRoot extends PageMixin(LitElement) {
  user: IUser | undefined = undefined;

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