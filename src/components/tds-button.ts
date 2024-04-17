import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

@customElement('tds-button')
export class TdsButton extends LitElement {

    @property({ type: String, attribute: "button-variant" })
    color: ButtonVariant = 'primary';

    @property({ type: Boolean, attribute: "button-disabled" })
    disabled = false;
    
    @property({ type: String })
        label = ''

    render() {
        return html`
            <button class="btn ${this.color}" ?disabled="${this.disabled}">${this.label}</button>
        `
    }

    static get styles() {
        return [
          css`
            .btn {
              border-radius: 10px;
              color: #fff;
              cursor: pointer;
              padding: 0.5rem;
            }
    
            button[disabled] {
              cursor: not-allowed;
            }
    
            .primary {
              color: #000;
              background: PapayaWhip;
            }
    
            .secondary {
              background: rebeccapurple;
            }
    
            .danger {
              background: tomato;
            }
    
            .info {
              color: #000;
              background: skyblue;
            }
    
            .success {
              color: #000;
              background: MediumAquamarine;
            }
          `
        ];
      }
}