React.RureComponent与Component区别
React.PureComponent通过props和state的前比较实现shouldComponentUpate()
缺点: 可能会因深层的数据不一致产生错误的否定判断，从而shouldComponentUpdate结果返回false,界面得不到更新
缺点:不需要开发者实现shouldComponentUpdate，就可以简单的判断性能

shouldComponentUpdate(nextProps, nextState) {
  return this.props.value.foo != nextProps.value.foo
}