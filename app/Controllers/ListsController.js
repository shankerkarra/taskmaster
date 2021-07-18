import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"


function _draw() {
  let lists = ProxyState.lists;
  let template = ''
  lists.forEach(l => template += l.Template)
  document.getElementById("Lists").innerHTML = template
}

export default class ListsController {
  constructor() {
    console.log(" List Controller - Constructor")
    ProxyState.on("lists", _draw)
    ProxyState.on('tasks', _draw)
    ProxyState.on('lists', saveState)
    ProxyState.on('tasks', saveState)

    loadState()
    // _draw()
  }

  addList() {
    event.preventDefault();
    console.log(" List Controller - addList")
    let form = event.target
    let userinput = {
      lname: form.listname.value,
      lcolor: form.colorselected.value
    }
    console.log(form)
    listsService.addList(userinput)
    form.reset()
  }

  delList(id) {
    listsService.delList(id)
  }

  addTask(listId) {
    debugger;
    event.preventDefault()
    let form = event.target
    let listTask = {
      listId,
      name: form.task.value
    }
    listsService.addTask(listTask)
    form.reset()
  }

  delTask(id) {
    listsService.delTask(id)
  }
}