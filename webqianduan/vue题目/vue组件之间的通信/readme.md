组建通信分为3中 父子通信 子父通信 兄弟通信

1. 父子通信
- 使用props，父组件可以通过props向子组件传递数据

例子
父组件
<template>
  <child :msg="message"></child>
</template>

<script>
import child from './child.vue';
export default {
    components: {
        child
    },
    data () {
        return {
            message: 'father message';
        }
    }
}
</script>

子组件
<template>
  <div>{{msg}}</div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      required: true
    }
  }
}
</script>

2. 子父通信
子组件利用$emit方法触发时间，回调给父组件
例子

父组件
<template>
    <child @msgFunc="func"></child>
</template>

<script>
import child from './child.vue';
export default {
  components: {
    child
  },
  methods: {
    func (msg) {
      console.log(msg);
    }
  }
}
</script>

子组件
<template>
  <button @ckick="handle">{{msg}}</button>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  methods: {
    handle () {
      this.$emit('msgFunc')
    }
  }
}
</script>

3. 兄弟组件通信
bus.js的函数
import Vue from 'vue'
export default new Vue()

需要通信的组件
<template>
	<button @click="toBus">子组件传给兄弟组件</button>
</template>

<script>
import Bus from '../common/js/bus.js'
export default{
	methods: {
    toBus () {
      Bus.$emit('on', '来自兄弟组件')
    }
	}
}
</script>

接受的组件
<script>
import Bus from '../common/js/bus.js'
export default {
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    Bus.$on('on', (msg) => {
      this.message = msg
    })
  }
}
</script>

4. $attrs和$listeners 隔代组件通信
v-bind="$attrs"
v-on="$listeners"

5. previde和inject 隔代组件通信
祖先使用provider提供变量
子孙组件通过inject注入变量
provide / inject 主要解决了跨级组件间的通信问题

6. vuex传递信息