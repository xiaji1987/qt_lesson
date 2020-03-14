v-model的本质是语法糖，v-model在内部为不同属性抛出的时间
- text和textarea元素使用value属性和input事件
- checkbox和radio使用checked属性和change事件
- select字段讲value作为prop并将change作为事件
<input v-model='value'>
相当于
<input :value='value' @input='value = $event.target.value'>

自拟定义组件，v-model默认利用value的prop和名input事件
父组件：
<ModelChild v-model="message"></ModelChild>

子组件：
<div>{{value}}</div>

props:{
    value: String
},
methods: {
  test1(){
     this.$emit('input', '小红')
  },
},