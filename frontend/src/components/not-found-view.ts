import { html, css, customElement } from "lit-element";
import { BaseView } from './base-view';

@customElement('app-not-found')
export class NotFoundView extends BaseView {
  render() {
    return html`
      <h1>
        404 Page not found!
      </h1>
    `;
  }
}