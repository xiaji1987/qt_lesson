// 自动构建路由
import React from 'react'
import Head from 'next/head'//组件 每个路由 独立的地址
import { Button } from 'antd'
import Header from '../components/Header.js'
// import '../static/style/pages/index.css'
const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Header>
      <div>

      </div>
    </Header>
    <Button type="danger">我是按钮</Button>
  </>
)

export default Home