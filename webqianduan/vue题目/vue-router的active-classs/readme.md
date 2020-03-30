active-class 是属于vue-router模块的router-link

例子
<router-link to='/' active-class="active" >首页</router-link>

router.js里面
<script>
  const router = new VueRouter({
    routes,
    linkActiveClass: 'active'
  });
</script>

会有一个bug，首页的active一直被应用
解决办法
1. 在router-link中加入exact
<router-link to='/' active-class="active" exact>首页</router-link>
2. 或者换成linkExactActiveClass
<script>
  const router = new VueRouter({
    routes,
    linkExactActiveClass: 'active'
  });
</script>