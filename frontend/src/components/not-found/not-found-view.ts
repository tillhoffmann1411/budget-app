import { html, customElement } from "lit-element";
import { BaseView } from './base-view';
import './not-found-view.scss';

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