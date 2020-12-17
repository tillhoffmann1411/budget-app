import { LitElement, html, css, property } from "lit-element";

export class ActionButton extends LitElement {
  @property() click: () => void;
  @property({ type: String }) type: string;
  @property({ type: Boolean }) isPrimary: boolean = false;

  constructor() {
    super();
    this.isPrimary = false;
  }

  static get styles() {
    return css`
    button {
      color: var(--primary);
      border: none;
      width: fit-content;
      background: #ffffff00;
      padding: 10px 20px;
      border-radius: 0.5rem;
      font-size: 1.2rem;
      font-weight: bold;
      margin-left: 10px;
    }
    
    button.secondary {
      background: transparent;
      color: var(--primary);
    }
    
    button.primary {
      background: var(--primary);
      color: var(--on-primary-font);
    }
    
    
    button:hover {
      cursor: pointer;
    }
    
    button:focus {
      outline: none;
    }
    
    button:active {
      transform: scale(.95);
    }
    `
  }

  render() {
    console.log('is primary?', this.isPrimary);
    return html`
      <button class="${this.isPrimary ? 'primary' : 'secondary'}" type="${this.type}" @click="${this.click}">
        <slot></slot>
      </button>
    `;
  }
}

customElements.define("app-button", ActionButton);