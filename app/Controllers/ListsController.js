import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"


function _draw() {
  let list = ProxyState.list;
  let template = ''
  list.forEach(l => template += l.Template)
  document.getElementById("Lists").innerHTML = /* html */ `
      ${template}
  </div>
  `
}

export default class ListsController {
  constructor() {
    console.log(" List Controller - Constructor")
    ProxyState.on("list", _draw);
    _draw()
  }

  addList() {
    console.log(" List Controller - addList")
    // let form = event.target
    listsService.addList()
  }
}