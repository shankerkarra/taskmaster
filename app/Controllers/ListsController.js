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
    ProxyState.on("lists", _draw);
    _draw()
  }

  addList() {
    event.preventDefault();
    console.log(" List Controller - addList")
    debugger;
    let form = event.target
    let userinput = {
      lname: form.listname.value,
      lcolor: form.colorselected.value
    }
    console.log(form)
    listsService.addList(userinput)
    form.reset()
  }
}