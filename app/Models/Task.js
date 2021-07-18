import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor({ name, listId, id = generateId() }) {

    this.id = id
    this.listId = listId
    this.name = name
  }


  get Template() {
    return `
        <div class="custom-control custom-checkbox" >
          <input type="checkbox" class="custom-control-input"
          id=${this.id} unchecked>
          <label class="custom-control-label" for=${this.id}>${this.name} </label>
          <i class="fa fa-trash action text-danger" title="delete list" onclick="app.listsController.delTask('${this.id}')"></i>
  </div>

`
  }
}