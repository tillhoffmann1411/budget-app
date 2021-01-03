import { html, customElement } from "lit-element";
import { router } from '../../router';
import { BaseView } from '../../shared/base-view';
import './root-view.scss';

@customElement('app-root')
export class AppRoot extends BaseView {

  constructor() {
    super();
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
      case 'profil':
        return html`
                <app-profil></app-profil>
            `
      default:
        router.navigate('');
        return html`
                <app-not-found></app-not-found>>
            `
    }
  }
}