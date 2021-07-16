import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"

class ListsService {
  addList() {
    console.log(" List Service - addList")
    ProxyState.list = [...ProxyState.list, new List()]
  }
}
export const listsService = new ListsService();
