import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor({ name, listId, checked, id = generateId() }) {
    this.id = id
    this.listId = listId
    this.name = name
    this.checked = checked
  }

  get Template() {
    return `
        <div class="custom-control custom-checkbox" style="width:15rem;" >
          <input type="checkbox" class="custom-control-input"
          id=${this.id} onclick="app.listsController.mycbClick(${this.id})">
          <label class="custom-control-label col-10" for=${this.id}>${this.name}</label>
          <i class="fa fa-trash action text-danger" title="delete list" onclick="app.listsController.delTask('${this.id}')"></i>
  </div>
`
  }
}