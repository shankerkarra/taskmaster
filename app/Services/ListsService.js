import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"
import Task from "../Models/Task.js"

class ListsService {
  addList(userinput) {
    console.log(" List Service - addList" + userinput)
    ProxyState.lists = [...ProxyState.lists, new List(userinput)]
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

  countTask({ listId }) {
    let totalcount = ProxyState.tasks.filter(t => t.listId = listId)
    console.log("Total Count :" + totalcount)
    // var myArr = [{ "Hello World!": "Welcome!", "int": 10 }, { "Learn": "Share", "int": 20 }, { "Tutorials": "Quiz", "int": 30 }];
    // myArr.forEach(function (val) {
    //   if (!val.__proto__.__proto__) {
    //     len++;
    //   }
    // })
  }
  mycbClick(id, text) {
    console.log("at Service Checkbox: " + id + " " + Text)
    var checkBox = document.getElementById(id);
    var text = document.getElementById("text");
    if (checkBox.checked === true) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
}
export const listsService = new ListsService();
