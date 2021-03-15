import { html, customElement, LitElement } from "lit-element";
import { PageMixin } from '../../client-packages/page-mixin/page.mixin';

import './not-found.component.scss';

@customElement('app-not-found')
export class NotFoundView extends PageMixin(LitElement) {
  render() {
    return html`
      <h1>
        404 Page not found!
      </h1>
    `;
  }
}