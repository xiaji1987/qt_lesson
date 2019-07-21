Koko loves to eat bananas.  There are N piles of bananas, the i-th pile has piles[i] bananas.  The guards have gone and will come back in H hours.

Koko can decide her bananas-per-hour eating speed of K.  Each hour, she chooses some pile of bananas, and eats K bananas from that pile.  If the pile has less than K bananas, she eats all of them instead, and won't eat any more bananas during this hour.

Koko likes to eat slowly, but still wants to finish eating all the bananas before the guards come back.

Return the minimum integer K such that she can eat all the bananas within H hours.
珂珂喜欢吃香蕉。这里有 N 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 H 小时后回来。

珂珂可以决定她吃香蕉的速度 K （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 K 根。如果这堆香蕉少于 K 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。  

珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。

返回她可以在 H 小时内吃掉所有香蕉的最小速度 K（K 为整数）。

- H 时间
- K K*H
- k min 1吃不完
    20 H就吃不完
    1-> N(尝试) 20(Max)

1.把香蕉表达一下 数据结构
处理的数据 .length
[3,6,7,11] H=8
k=4
[30,11,23,4,20] H=8
k=30
2.Max 规则 Max(arr)
3.Max-- 正好在H小时内吃完
 >H 这就是找到
4.怎么可以高效一点 二分查找

Math.max(2,3,4,5)=6 最大值
Math.min(2,3,4,5)=2 最小值
Math.ceil(5/2)=3 向上取整
Math.floor(5/2)=2 向下取整
Math.round(5/2)=3 四舍五入
Math.round(5/3)=2 四舍五入

- JS数组类型
    基础数据类型
        整形 Number string Boolean undefined Null Symbol
    复杂数据类型
        Object [Array,Function,]
    设备 典型的慢操作
    fs.readFile(path,'UTF-8',callback)
- ...spread 展开数组
    ...reset 收起

- koko
    while(1->Math.max(...piles))
    每把香蕉花费的时间piles=>pile=>Match.ceil    