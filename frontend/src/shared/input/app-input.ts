import { html, property, customElement } from "lit-element";
import { BaseView } from '../../components/base-view';
import './app-input.scss';

@customElement('app-input')
export class AppInput extends BaseView {
  @property({ type: String }) id: string;
  @property({ type: String }) label: string;
  @property({ type: String }) type: string;
  @property({ type: String }) placeholder: string;


  constructor() {
    super();
    this.id = '';
    this.label = '';
    this.type = 'text';
    this.placeholder = '';
  }


  render() {
    return html`
      <div class="form-group">
        <label id="${this.id}">${this.label}</label>
        <input id="${this.id}" type="${this.type}" placeholder="${this.placeholder}" />
      </div>
    `;
  }

}