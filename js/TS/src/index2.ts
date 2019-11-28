// const add = (a: number, b: number) => number =>  (a: number, b: number) => a + b

// const add = (a: number, b: number) => a + (b ? b : 0)

// const add = (a: number, ...rest: number[]) => rest.reduce((a, b) => {return a + b})
// console.log(add)

// 重载
interface Direction {
  top: number
  right: number,
  bottom: number,
  left: number
}

function assigined(all: number): Direction
function assigined(topAndBottom: number, leftAndRight: number): Direction
function assigined(top: number, Right: number, bottom: number,left: number): Direction

function assigined (a: number, b?: number, c?: number, d?: any) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a
  } else if (c === undefined && d === undefined) {
    c = a
    d = b
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d
  }
}
// assigined()
assigined(1)
assigined(1, 2)
// assigined(1, 2, 3)
assigined(1, 2, 3, 4)

// 泛型
// function returnItem (para: number): number {
//   return para
// }

// function returnItem (para: string): string {
//   return para
// }

// function returnItem<T> (para: T): T {
//   return para
// }

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

// 泛型变量
function getArrayLength<T>(argn: Array<T>): Array<T> {
  console.log(argn as Array<any>, (argn as Array<any>).length)
  return argn
}

interface RecturnTempFn<T>{
  (para: T) : T
}

const returnItem: RecturnTempFn<number> = para => para


// 泛型约束
type Params = Number | String
// 泛型类
class Stack<T extends Params> {
  private arr: number[] = []
  public push(item: number) {
    this.arr.push(item)
  }
  public pop() {
    this.arr.pop()
  }
}
const Stack1 = new Stack<String>()
const Stack2 = new Stack<Number>()
// const Stack3 = new Stack<Boolean>()

// 使用多重类型进行泛型约束

interface FirstInterface {
  doSomething(): number
}
interface SecondInterface {
  doSomethingElse(): string
}
// 错误演示
// class Dom<T extends FirstInterface, T extends SecondInterface> {
//   private test: T
//   useT() {
//     this.test.doSomething()
//     this.test.doSomethingElse()
//   }
// }

interface ChildInterface extends FirstInterface, SecondInterface {

}

class Dom<T extends ChildInterface> {
  private test: T
  useT() {
    this.test.doSomething()
    this.test.doSomethingElse()
  }
}

// new 
function factory<T>(type: {new(): T}): T {
  return new type()
}