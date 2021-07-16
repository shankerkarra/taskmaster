import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
  constructor(name, color, id = generateId()) {
    console.log(" List - constructor")
    this.id = id
    this.name = name
    this.color = color
  }

  get Template() {
    return /*html*/`
            <div class="card border-black mb-3" style="max-width: 18rem;">
                <div class="card-header bg-transparent" id="listtasktitle">${this.name}r</div>
                <div class="card-body">
                    <p class="card-text" id=ListTasks>Some quick example text to....
                        <br>
                         <p><b>color: ${this.color} 
                         Id: ${this.id}
                         name: ${this.name}
                         </b></p>
                    </p>
                </div>
                <div class="card-footer bg-transparent">Text box in Footer</div>
            </div>
        `
  }
}
