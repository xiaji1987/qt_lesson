import React from 'react';
import express from 'express';
import { renderToString 
} from 'react-dom/server';
import Header from '../components/Header';
import render from './render';
import { matchRoutes } from 'react-router-config'
import routes from '../routers'
import { getServerStore } from '../store/index'
/**
 * 构建在 虚拟 dom 之上的 服务端渲染
 * { name： ''， age: '' }
 * { tag: '', attribute: , children: [], class: '' }
 * 
 * MVVM / dom diff
 * react: react-native
 * vue:   weex
 */
const app = new express();
app.use(express.static('public'))
app.get('*', (req, res) => {
  /**
   * 渲染html之前 保证redux 有数据， 渲染的页面 就是带有数据的html
   * 1. 拿到当前访问的url 命中的组件
   * 2. 拿到 组件上面的 loadData
   * 3. 一个个dispatch
   * 4. 再渲染
   */

  const store = getServerStore();
  let promises = [];
  const matchRoute = matchRoutes(routes, req.path)
  // console.log(matchRoute)
  matchRoute.forEach(mRoute => {
    // console.log('>>>:'+ mRoute.route.loadData(store));
    if(mRoute.route.loadData) {
      promises.push(mRoute.route.loadData(store))
    }
    
  });
  Promise.all(promises).then(resArr => {
    const html = render(req, store);
    res.send(html)
  }).catch(error => {
    console.log('服务端出错了:' + error)
  })
  console.info(matchRoute)
})
app.listen(3000, () => {
  console.log('server is running 3000');
})