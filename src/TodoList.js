import { html, css, LitElement } from "lit";
import "./components/input-task";
import "./components/lista-tarea";
export class TodoList extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 25px;
      color: var(--todo-list-text-color, #000);
    }
    .container__tareas {
      width: 350px;
      height: 400px;
      color: black;
      background-color: #cbcbcb4b;
      border-radius: 0.5rem;
      margin: 0.5rem;
    }
  `;

  static properties = {
    tareas: { type: Array },
    lista: { type: Array },
    tarea: { type: Object },
  };

  constructor() {
    super();
    this.tareas = [];
    this.tarea = {};
  }

  render() {
    return html`
      <h2>To Do List App</h2>
      <input-task @agregar=${this._agregar}></input-task>

      <div class="container__tareas">
        <lista-tarea
          .tareas=${this.tareas}
          @eliminar=${this._eliminarItem}
        ></lista-tarea>
      </div>
      <button @click=${this._borrarLista}>Borrar Lista</button>
    `;
  }
  _agregar(e) {
    this.tareas.push((this.tarea = e.target.value));
    this.tareas = [...this.tareas];
    this.requestUpdate();
  }
  _eliminarItem(e) {
    this.tareas.splice(e.detail.index, 1);
    this.tareas = [...this.tareas];
    this.requestUpdate();
  }
  _borrarLista() {
    this.tareas = [];
    this.requestUpdate();
  }
}
