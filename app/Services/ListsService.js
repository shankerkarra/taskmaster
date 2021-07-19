import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"
import Task from "../Models/Task.js"

class ListsService {
  addList(userinput) {
    //   console.log(" List Service - addList" + userinput)
    ProxyState.lists = [...ProxyState.lists, new List(userinput)]
  }
  delList(id) {
    ProxyState.lists = ProxyState.lists.filter(lists => lists.id != id)
    ProxyState.tasks = ProxyState.tasks.filter(tasks => tasks.listId != id)
  }
  addTask(rawTask) {
    ProxyState.tasks = [...ProxyState.tasks, new Task(rawTask)]
    //  countTask({ listId })
    //   console.log("call countTask")
  }
  delTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
  }

  toggleCheckbox(elem) {
    // var checkBox = elem;
    // var p = document.getElementsByTagName('p')[1];
    //if (checkBox.checked == 'true') {
    //debugger;
    let chngTask = ProxyState.tasks.find(t => t.id == elem)
    // call method to modify the value
    //  console.log(chngTask.checked)
    if (chngTask.checked == "True") {
      chngTask.checked = "false";
    }
    else {
      chngTask.checked = "True";
    }
    ProxyState.tasks = ProxyState.tasks
    // for (let i = 0; i < chngTask.length; i++) {
    //   const el = chngTask[i];
    //   const index = chngTask.findIndex(elm => el['id'] === elm['id']);
    //   if (index === -1) {
    //     continue;
    //   }
    //   else {
    //     el[index] = { ['checked']: "True" };
    //     el;
    //   }
    // }

  }

  CntTask({ listId }) {
    let totalcount = ProxyState.tasks.filter(t => t.listId == listId)
    let counter = 0;
    for (const input of inputs) {
      if (input.status == 0) counter += 1;
    }
    return counter;

  }
  countTask({ listId }) {
    //debugger;
    let totalcount = ProxyState.tasks.filter(t => t.listId == listId)
    // console.log("Total Count :" + totalcount)

    let chkcount = ProxyState.tasks.filter(t => t.listId == listId && t.checked == 'True')
    // console.log("Total Count :" + chkcount)


  }
  mycbClick(id, text) {
    // console.log("at Service Checkbox: " + id + " " + Text)
    var checkBox = document.getElementById(id);
    var text = document.getElementById("text");
    if (checkBox.checked === true) {
      const el = chngTask[i];
      const index = chngTask.findIndex(elm => el['id'] === elm['id']);
      //     ['checked'] = "false";
      text.style.display = "block";
    } else {
      //    ['checked'] = "true";

      text.style.display = "none";
    }
  }
}
export const listsService = new ListsService();
