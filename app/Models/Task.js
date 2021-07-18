import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor({ name, listId, id = generateId() }) {
    console.log(" in Task constructor")
    this.id = id
    this.listId = listId
    this.name = name
  }


  get Template() {
    return `<li>
        <div class="custom-control custom-checkbox" >
        <input type="checkbox" class="custom-control-input" id="defaultChecked2" unchecked>
          <label class="custom-control-label" for="defaultChecked2">${this.name} </label>
</div>
        <span class="action" onclick="app.listsController.delTask('${this.id}')">x</span></li>`
  }



}