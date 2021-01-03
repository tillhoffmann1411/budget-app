import { html, customElement, LitElement } from "lit-element";
import { ComponentMixin } from '../../shared/component.mixin';
import './not-found-view.scss';

@customElement('app-not-found')
export class NotFoundView extends ComponentMixin(LitElement) {
  render() {
    return html`
      <h1>
        404 Page not found!
      </h1>
    `;
  }
}