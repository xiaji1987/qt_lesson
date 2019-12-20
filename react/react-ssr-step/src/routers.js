import React from 'react'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import App from './App'

export default [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/',
        component: Home,
        loadData: Home.loadData,
        exact: true
      },
      {
         path: '/login',
         loadData: 2,
         component: Login
      }
    ]
  }
]