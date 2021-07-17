import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
  constructor({ lname, lcolor, id = generateId() }) {
    console.log(" Constructor in List.js" + lname + " " + lcolor)
    this.name = lname
    this.color = lcolor
    this.id = id
  }
  get Template() {
    return /*html*/`
            <div class="card border-black mb-3" style="max-width: 18rem;">
                <div class="card-header text-center ${this.color}" id="listtasktitle">${this.name}
                <p class="card-text" id=TaskCount> 2/4 </p>
                </div>
                  <div class="card-body">
                    <p class="card-text" id=ListTasks>Some quick example text to....
                        <br>
                         <p><b>color: ${this.color} 
                         Id: ${this.id} 
                         name: ${this.name}
                         </b></p>
                    </p>
                </div>
                <div class="card-footer">Text box in Footer</div>
            </div>
        `
  }
}
