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
                            <i class="fa fa-trash action text-danger" title="delete list" onclick="app.listsController.delList('${this.id}')"></i>
                </div>
                  <div class="card-body">
                         <a>color: ${this.color} - Id: ${this.id} -   name: ${this.name}
                         </a></p>
                    </p>
                </div>
                 <div class="p-2 ">
                  <ol class="p-2 pl-4">
                    ${this.MyTask}
            </ol>
        </div>
              <form onsubmit="app.listsController.addTask('${this.id}')">
          <input type="text" name="task" placeholder="Add Task..." required>
          <button type="submit" class="btn btn-outline-success">+</button>
        </form>
              </div>
        `
  }

  get MyTask() {
    let template = ''
    let tasksTotal = 0
    let tasks = ProxyState.tasks.filter(tasks => tasks.listId === this.id)
    tasks.forEach(t => {
      template += t.Template
      tasksTotal += 1
    })
    return template
  }
}
