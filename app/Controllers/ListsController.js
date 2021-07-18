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
      name: form.listname.value,
      color: form.colorselected.value
    }
    listsService.addList(userinput)
    form.reset()
  }

  delList(id) {
    var result = confirm("Press a button!");
    if (result == true) {
      listsService.delList(id)
    }
  }

  mycbClick(elem) {
    debugger;
    var checkBox = elem;
    var p = document.getElementsByTagName('p')[1];
    if (checkBox.checked == true) {
      // call method to modify the value
      // call a common function to update the Count of check/total
      p.innerHTML = "Checkbox <b>" + checkBox.id + "</b> is CHECKED!"
    }
  }

  addTask(listId) {
    event.preventDefault()
    let form = event.target
    let listTask = {
      listId,
      name: form.task.value,
      checked: false
    }
    listsService.addTask(listTask)
    countTask(listId);
    form.reset()
  }

  delTask(id) {
    var result = confirm("Press a button!");
    if (result == true) {
      listsService.delTask(id)
    }
  }
}