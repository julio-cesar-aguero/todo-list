import { LitElement, html, css } from "lit";

export class ListaTarea extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      li {
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        background-color: white;
        margin: 0.5em;
        padding: 0.8em;
      }

      button {
        margin-left: 20px;
        background-color: #ff6060d6;
      }
    `,
  ];
  static get properties() {
    return {
      tareas: { type: Array, reflect: true },
    };
  }

  constructor() {
    super();
  }
  render() {
    return html`
      ${this.tareas.map(
        (tarea, index) =>
          html`
            <li>
              No: ${index} Nombre: ${tarea}
              <button
                @click=${() => {
                
                  this.dispatchEvent(
                    new CustomEvent("eliminar", {
                      bubbles: true,
                      detail: { index },
                    })
                  );
                }}
              >
                Eliminar
              </button>
            </li>
          `
      )}
    `;
  }
}
customElements.define("lista-tarea", ListaTarea);
