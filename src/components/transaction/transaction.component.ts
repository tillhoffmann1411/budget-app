import { html, customElement, LitElement } from "lit-element";
import { ComponentMixin } from '../../shared/component.mixin';
import './transaction.component.scss';

@customElement('app-transaction')
export class TransactionComponent extends ComponentMixin(LitElement) {
  render() {
    return html`
      <h1>
        Transaction Component
      </h1>
    `;
  }
}