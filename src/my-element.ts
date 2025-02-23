import { LitElement, css, html } from 'lit'
import { customElement, property, query, state } from 'lit/decorators.js'

@customElement('my-element')
export class MyElement extends LitElement {

  @state() value = 'test';

  render() {
    return html`
      <my-editor .value=${this.value} @valueChange=${this.valueChange}></my-editor>

      <button @click=${this.getEditorValue}>Get Value</button>
    `;
  }

  valueChange(event: CustomEvent): void {
    console.log(event.detail.value);
  }

  getEditorValue(): void {
    console.log(this.value);
  }



  static styles = css`
    `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }

}