vue的双向数据绑定
vue采用了数据解释结合发布订阅这模式，听过Object.defineProperty()来劫持个个属性set和get，数据变动是发消息给订阅者，触发相应的监听回调

具体步骤:
1. 在vue里面的data,Vue会将data里面的属性遍历一遍，都会用Object.defineProperty加上set和get方法，给某个对象赋值时，就会触发set方法，就能监听数据的变化
2. compile解析模板指令，将模板替换成数据，然后初始化渲染页面视图，将对应的节点绑定更新函数，一旦数据有变动，收到通知跟新数据
3. Watcher是Observer和Compile之间通信的桥梁
主要做的事情:
- 在自生实例是订阅器里面添加自己
- 自身必需有一个update方法
- 带属性变动时，调用update方法，并触发complie绑定的回调
4. 整合Observer compile和Watcher,通过Observer监听model数据的变活，利用watcher搭建起Observer和Compile之间的通信桥梁， Compile解析编译模板指令
model数据变化 -> Observer监听变化 -> Watcher察觉到数据的更新 -> 触发compile的数据编译 -> 视图更新
从而达到数据的双向数据绑定

Object,definedProperty优势
兼容性好
Proxy 的存在浏览器兼容性问题,而且无法用 polyfill 磨平

vue3.0 的Proxy
Object.definedProperty()的问题
1. 不能监听数组的变化
2. 必须遍历对象每个属性
3. 必须深层遍历嵌套对象

Proxy的特点
1. 针对整个对象，而不是对象的某个属性，所以不需要队keys进行遍历， 这解决了Object.definedProperty的第二个问题
2. 支持数组 proxy不需要对数组方法进行重载，减少代码量
3. proxy返回的是新对象，我们可以操作新对象达到目的，而非Object.defineProperty，只能遍历对象直接修改

proxy的优势
1. prosy的第二个参数可以有13中连接方法，比Object.definedProperty更加丰富
2. Proxy 作为新标准受到浏览器厂商的重点关注和性能优化
