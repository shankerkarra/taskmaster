//import Value from "./Models/Value.js"
import List from "./Models/List.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"


class AppState extends EventEmitter {
  /** @type {Value[]} */
  //values = []


  list = [
    new List({
      id: '123456',
      name: 'Test1',
      color: '#25f6bd'
    }),
    new List({
      id: '234567',
      name: 'Test2',
      color: '#2a4f45'
    })
  ];
}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
