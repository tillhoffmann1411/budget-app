import { html, property, customElement } from "lit-element";
import { BaseView } from '../base-view';
import './app-button.scss';

@customElement('app-button')
export class AppButton extends BaseView {
  @property() click: () => void;
  @property({ type: Boolean }) isPrimary: boolean = false;

  constructor() {
    super();
    this.isPrimary = false;
  }

  render() {
    return html`
      <button class="${this.isPrimary ? 'primary' : 'secondary'}" @click="${this.click}">
        ${this.title}
      </button>
    `;
  }
}