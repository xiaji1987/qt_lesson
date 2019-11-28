// function greeter(person: string): Function {
//   // return 'hello,' + person
//   return function abc(person: string) {

//   }
// }
// const user = 'wn'

// greeter(user)


// // string number boolean null undefind symbol void bigint

// const isLoading: boolean = false

// const a: number = 6
// const b: number = 0xf00d

// const book: string = 'ts'

// function warnUser(): void {
//   alert('test')
// }

// const c: void = undefined

// let u: undefined = undefined
// let n: null = null


// // const sym1 = Symbol('key1')
// // const sym2 = Symbol('key2')
// // sym1 === sym2 //false

// // const max = Number.MAX_SAFE_INTEGER
// // const max1 = max + 1
// // const max2 = max + 2

// // declare let foo: number
// // declare let bar: bigint
// // foo === bar // false

// // any
// // unknow // 跟any一样，但是unknow更加严格，
// // nerver
// // object

// // let notSure: any = 4
// // notSure = '4'
// // notSure.foo.bar = 1
// // notSure()
// // new notSure()
// // notSure[0][1]

// // let value: unknown = 4
// // value = '4'
// // value = {}
// // value = []
// // value.foo.bar = 1
// // value()
// // new value()
// // value[0][1]


// // function error(message: string): never {
// //   throw new Error(message)
// // }

// // const empty: never[] = []
// // empty.push(1)


// // const list: Array<number> = [1, 2, 3] // 泛型
// // const list2: number[] = [1, 2, 3]

// // // 元组
// // let x: [string, number]
// // x = ['hello', 10, false]
// // x = ['hello']




// // object
// // enum Direction {
// //   Center = 1
// // }
// // let val: object

// // val = Direction
// // val = [1]
// // val = [1, 'hello']
// // val = {}





// // 枚举
// // enum Direction {
// //   up = 10,
// //   down,
// //   left,
// //   right
// // }
// enum Direction {
//   up = 'up',
//   down = 'down',
//   left = 'left',
//   right = 'right'
// }
// console.log(Direction['right'], Direction.up)


// // 接口 interface
// interface User {
//   name: string
//   age?: number
//   readonly isMale: boolean
//   say: (words: string) => string
// }
// const getUserName = (user: User) => user.name
// // user.say = function(words: string) {}



// // 属性检查
// interface Config {
//   width?: number
//   [propName: string]: any // 添加字符串索引签名
// }

// function CalculateAreas(config: Config): {area: number} {
//   let square = 100
//   if (config.width) {
//     square = config.width * config.width
//   }
//   return { area: square }
// }

// // let mySquare = CalculateAreas({widdth: 5})

// // 类型断言
// // let mySquare = CalculateAreas({widdth: 5} as Config)


// // 将字面量赋值给另一个变量
// let options = {widdth: 5}
// let mySquare = CalculateAreas(options)






// // 抽象类 class
// abstract class Animal {
//   abstract makeSound(): void
//   move(): void {
//     console.log('ao ao ao ao ao')
//   }
// }

// // const animal = new Animal()
// // 实例化抽象类，需要创建子类来继承基类， 然后可以实例化子类
// class Cat extends Animal {
//   makeSound() {
//     console.log('miao miao miao')
//   }
// }

// const cat = new Cat()
// cat.makeSound()
// cat.move()


// // pubilc  private  protected
// class Car {
//   protected run() { // 被pubilc修饰的成员是可以被外部访问的
//     console.log('启动')
//   }
// }
// // const car = new Car()
// // car.run()

// class GTR extends Car {
//   init () {
//     this.run()
//   }
// }















