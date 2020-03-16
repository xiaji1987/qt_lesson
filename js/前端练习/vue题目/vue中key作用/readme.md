key的作用
key是Vue中节点的唯一标记，通过key，我们的diff算法可以更加准确，更快速，Vue的diff过程包括oldTree和newTree的头尾各有一个变量oldStartIndex,oldEndIndex和newStartIndex,newEndIndex。他们会把新旧节点进行两两对比，即4种比较方式: 两两组合，如果以上4种比较都没有匹配，如果在设置key，就会用key再进行比较，在比较的过程中，遍历会往中间靠，一旦startindex>Endindex表明oldTree和newTree至少遍历完一遍了
vue的key作用
- key回味Vue种vnode的危机标记，通过这个key,我们的diff操纵可以更准确，更快速
- 更准确: 因为key不复用。在sameNode函数old.key === new.key对比可以避免重复的情况，所以更加准确
- 更快速: 利用key的唯一性生成map对象获取节点，比便利更快，源码如下
function createKeyToOldText(children, beginIndex, endIndex) {
  let i, key
  const map = {}
  for(i = beginIndex; i<= endIndex; ++i) {
    key = children[i].key
    if (isDef(key)) map[key] = i
  }
  return map
}