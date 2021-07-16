import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
  constructor(name, color, id = generatedId()) {
    console.log(" List - constructor")
    this.id = id
    this.name = name
    this.color = color
  }

  get Template() {

    return /*html*/`
        <div class="card p-2 value">
            ${this.id} - ${this.name} -  ${this.color}
        </div>
        `
  }
}
