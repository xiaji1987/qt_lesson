# Set 和 Weakset 区别
1. Weakset 只能存放对象
2. Weakset 不支持遍历。没有size
3. Weakset 存放的对象不会记入到对象的引用技术， 因此不会影响GC的回收
4. Weakset 存放的对象如果在外界消失了， 那么Weakset里面也不会存在

# map 和 Weakmap 区别
1. Weakmap 只能接受对象作为键名 (null除外，也接受)
2. Weakmap 键名指向对象不会记入到对象的引用数当中
