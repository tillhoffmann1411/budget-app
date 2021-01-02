import { html, property, customElement } from "lit-element";
import { BaseView } from '../../components/base-view';
import './app-button.scss';

@customElement('app-button')
export class AppButton extends BaseView {
  @property() click: () => void;
  @property({ type: String })
  @property({ type: String }) type: string;
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