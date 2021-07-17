import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"

class ListsService {
  addList(userinput) {
    console.log(" List Service - addList" + userinput)
    ProxyState.lists = [...ProxyState.lists, new List(userinput)]
  }
}
export const listsService = new ListsService();
