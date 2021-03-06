import { html, property, customElement, LitElement } from "lit-element";
import { ComponentMixin } from '../component.mixin';
import './app-button.scss';

@customElement('app-button')
export class AppButton extends ComponentMixin(LitElement) {
  @property() click: () => void;
  @property({ type: String }) type: string = '';
  @property({ type: Boolean }) isPrimary: boolean = false;

  constructor() {
    super();
    this.isPrimary = false;
  }

  render() {
    return html`
      <button class="${this.isPrimary ? 'primary' : 'secondary'}" type="${this.type}" @click="${this.click}">
        ${this.title}
      </button>
    `;
  }
}