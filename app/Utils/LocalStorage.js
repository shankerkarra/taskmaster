
import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";

export function saveState() {
  localStorage.setItem('SkTaskMastr', JSON.stringify({
    Lists: ProxyState.Lists,
  }))
  console.log('saved state', ProxyState)
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('SkTaskMastr'))
  console.log(data)
  if (data != null) {
    ProxyState.lists = data.lists.map(p => new List(p))
  }

}