import { LitElement, html, property, css } from "lit-element";

class AppInput extends LitElement {
  @property({ type: String }) id: string;
  @property({ type: String }) label: string;
  @property({ type: String }) type: string;
  @property({ type: String }) placeholder: string;

  static get styles() {
    return css`
      .form-group {
        display: flex;
        flex-direction: column;
        padding: 5px
      }
      label {
        padding: 0.5rem;
      }
      input {
        color: var(--font-color);
        padding: 0.7rem;
        border: 2px solid var(--input-background);
        background: var(--input-background);
        border-radius: 10px;
      }

      input:focus {
        outline: none;
        border: 2px var(--primary) solid;
      }
    `;
  }

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


customElements.define("app-input", AppInput);