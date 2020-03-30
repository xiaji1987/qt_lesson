怎么定义vue-router的动态路由？怎么获取传过来的动态参数？

1. router目录下的index.js path属性加上/:id,使用router对象的query.id
例子
// 组件调用
this.$router.push({path: `/home/${id}`})
// 路由配置
{
  path: '/home/:id'
  name: home,
  componet: home
}

//组件获取
this.router.query.id

2. params传参
this.$router.push({ path: '/news', query: { userId: 123 }});

this.$router.push({ name: 'news', params: { userId: 123 }})