import React from 'react';
import 'antd/dist/antd.css';
import './App.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home';
import Topic from './Topic';
import axios from './axios'
const { Header, Content, Footer } = Layout;

class App extends React.Component {
  render () {
    return (
      <Router >
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Route exact path="/"><Home /></Route>
            <Route path="/topic/:id"><Topic /></Route>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design 2018 Created by Ant UED</Footer>
        </Layout>
      </Router>
    )
  }
}

export default App;
