import { html, customElement, LitElement } from "lit-element";
import { PageMixin } from '../../client-packages/page-mixin/page.mixin';

import './transaction.component.scss';

@customElement('app-transaction')
export class TransactionComponent extends PageMixin(LitElement) {
  render() {
    return html`
      <h1>
        Transaction Component
      </h1>
    `;
  }
}