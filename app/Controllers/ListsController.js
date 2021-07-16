import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"


function _draw() {
  let lists = ProxyState.lists;
  let template = ''
  lists.forEach(l => template += l.template)
  document.getElementById("Lists").innerHTML = /* html */ `
<a>Test</a>
      ${template}
  </div>
  `
}

export default class ListsController {
  constructor() {
    console.log(" List Controller - Constructor")
    ProxyState.on("lists", _draw);
    _draw()
  }

  addList() {
    console.log(" List Controller - addList")
    // let form = event.target
    listsService.addList()
  }
}