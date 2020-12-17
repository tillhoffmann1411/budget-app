import { html, css, customElement, LitElement } from "lit-element";

@customElement('app-home')
export class Home extends LitElement {

  static get styles() {
    return css``;
  }

  constructor() {
    super();
  }


  render() {
    return html`
      <div>
        Home component works!
      </div>
    `;
  }
}