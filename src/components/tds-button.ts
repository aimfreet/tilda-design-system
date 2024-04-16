import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('tds-button')
export class TdsButton extends LitElement {

    @property({ type: String })
    label = ''

    render() {
        return html`
            <button>${this.label}</button>
        `
    }
}