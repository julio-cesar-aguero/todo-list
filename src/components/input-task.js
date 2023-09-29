import { LitElement, html, css } from "lit";

export class InputTask extends LitElement {
    static styles = [
        css`
          .container-input{
            padding: 1em;
          }
          .container-input input, button{
             padding: 1.5em;
             border: 2px solid #333333;
             color: black;
             font-size: 0.9em;
           }
        `,
      ];
  static get properties() {
    return {
      value: { type: String },
      desactivado: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.value = " ";
    this.tareas = {}
    this.desactivado = true;
  }
  firstUpdated() {
    this.$input = this.shadowRoot.querySelector("input");
  }
  render() {
    return html`
      <div class="container-input">
        <input type="text" @input=${this._value} />
        <button @click="${this._addTask}" ?disabled=${this.desactivado}>
          Agregar
        </button>
      </div>
    `;
  }
  
  _value() {
    this.value = this.$input.value.trim();
    this.desactivado = !this.value;
  }
  _addTask(e) {
    this.dispatchEvent(new CustomEvent('agregar',{
        detail: this.$input.value,
    }
    ))
    this.$input.value = "";
  }
}
customElements.define("input-task", InputTask);
