1. 手动回收 free
2. 自动回收
 
 栈和堆 
 简单数据类型放在栈里
 复杂数据类型放在堆里


 栈里里面的回收靠ESP指针向下移，覆盖内存，回收内存

 堆分为新生代和老生带
 副垃圾回收带，回收新生代垃圾回收
 主垃圾回收带，回收老生代回收
 
 新生代分为对象空间和空闲空间 两个进行角色反转无限重复使用
 当新生代的对象经过两次回收还存活，则移动到老生带

 第一步: 标记空间的对象空间
 第二步：清除标记的对象空间
 第三部: 整理空间

// 增量标记
把标记分成很多个标记任务