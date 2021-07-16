
import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";

export function saveState() {
  localStorage.setItem('SkTaskMastr', JSON.stringify({
    List: ProxyState.List,
  }))
  console.log('saved state', ProxyState)
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('SkTaskMastr'))
  console.log(data)
  if (data != null) {
    ProxyState.list = data.list.map(p => new List(p))
  }

}