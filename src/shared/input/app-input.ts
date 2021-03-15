import { html, property, customElement, LitElement } from "lit-element";
import { ComponentMixin } from '../component.mixin';
import './app-input.scss';

@customElement('app-input')
export class AppInput extends ComponentMixin(LitElement) {
  @property({ type: String }) id: string;
  @property({ type: String }) label: string;
  @property({ type: String }) type: string;
  @property({ type: String }) placeholder: string;
  @property({ type: Boolean }) required: boolean;
  value: string;


  constructor() {
    super();
    this.id = '';
    this.label = '';
    this.type = 'text';
    this.placeholder = '';
    this.required = false;
    this.value = '';
  }

  render() {
    return html`
      <section class="form-group">
        <label for="${this.id}">${this.label}</label>
        <input id="${this.id}" type="${this.type}" placeholder="${this.placeholder}" ?required="${this.required}"
          value="${this.value}" @change=${this.updateShownValue} />
      </section>
    `;
  }

  updateShownValue(e) {
    this.value = e.srcElement.value
  }

}