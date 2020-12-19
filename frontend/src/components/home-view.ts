import { html, customElement } from "lit-element";
import { BaseView } from './base-view';
import './home-view.scss';

@customElement('app-home')
export class Home extends BaseView {

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