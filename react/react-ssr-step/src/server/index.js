import express from 'express';
import render from './render';
const app = new express();

// 构建在虚拟dom之上的服务端渲染
// 虚拟dom和平台无关

app.get('*', (req, res) => {
  const html = render();
  res.send(html)
})

app.listen(3001, () => {
  console.log('express server is running 3001');
})