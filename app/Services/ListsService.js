import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"
import Task from "../Models/Task.js"

class ListsService {
  addList(userinput) {
    console.log(" List Service - addList" + userinput)
    ProxyState.lists = [...ProxyState.lists, new List(userinput)]
    console.log(ProxyState.lists)
  }
  delList(id) {
    ProxyState.lists = ProxyState.lists.filter(lists => lists.id != id)
    ProxyState.tasks = ProxyState.tasks.filter(tasks => tasks.listsId != id)
  }
  addTask(rawTask) {
    ProxyState.tasks = [...ProxyState.tasks, new Task(rawTask)]
  }
  delTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
  }
}
export const listsService = new ListsService();
