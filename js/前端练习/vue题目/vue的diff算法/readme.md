diff算法
1. 当数据发生改变时，set方法会让调用Dep.notify通知订阅者Watcjer,订阅者就会电泳patch给真实的DOM打补丁，更新相应试图
2. 

patch
patch算法接受两个参数，是oldNode和newNode代表新节点和旧节点
判断两个节点是否值一样，不一样就用新节点替换旧节点，如果一样就检查他们的直接点。