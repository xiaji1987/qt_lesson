1. 加个router-view标签
<div id="app">  
    <!-- router-view 路由出口, 路由匹配到的组件将渲染在这里 -->  
    <router-view></router-view>  
</div>
2. router.js里面定义子路由
import home from "./home.vue"  
import game from "./game.vue"  
//定义路由  
const routes = [  
  { path: "/", redirect: "/home" },//重定向,指向了home组件  
  {  
    path: "/home", component: home,  
    children: [  
      { path: "/home/game", component: game }  
    ]
  }  
]