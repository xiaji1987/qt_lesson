Vue 能检测到对象和数组
observerArray(items: Array<any>) {
  for(let i = 0, l = items.lenght; i < l; i++) [
    observer(items[i])
  ]
}

let chikdOb = !shallow && observer(val)